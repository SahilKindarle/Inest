require('dotenv').config()

const express = require('express')
const cors = require('cors')

const logger = require('morgan')

const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const fs = require('fs-extra')
const emailTemplate = require('./emailTemplate.js')
const generatePDF = require('@root-kings/pdf-generator')

const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logger('dev'))

app.post('/api/submit', async (req, res) => {
  const body = req.body

  if (!body || !body.pdfData) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  // generate pdf from body info and save it to disk temporarily
  let outputPath = await generatePDF(
    emailTemplate,
    {
      name: 'Sahil',
      report: body.pdfData,
    },
    __dirname + '/temp/report.pdf'
  )

  // for windows:
  if (outputPath.includes('\\')) {
    // platform is windows, replace all backslashes with forward slashes
    outputPath = outputPath.replace(/\\/g, '/')
  }

  // wait for the pdf to be written to disk
  await new Promise(resolve => setTimeout(resolve, 2000))

  // read the pdf file
  const buffer = fs.readFileSync(outputPath)

  // send email with pdf attachment
  const { data: emailResponse, error } = await resend.emails.send({
    from: 'contact@rootkings.dev',
    to: 'krushndayshmookh@gmail.com',
    subject: 'Report PDF',
    attachments: [
      {
        content: buffer,
        // path: files.pdf[0].filepath,
        filename: 'report.pdf',
      },
    ],
    html: '<h1>here is your report.</h1>',
    text: 'here is your report.',
  })

  if (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to send email' })
  }

  // delete the pdf file
  fs.unlinkSync(outputPath)

  return res.json(emailResponse)
})

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

app.listen(process.env.PORT, () => {
  console.info('Server is running on port 3000')
})
