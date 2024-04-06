require('dotenv').config()

const express = require('express')
const cors = require('cors')

const logger = require('morgan')

const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const generateReport = require('./controllers/pdfGenerator')

const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logger('dev'))

app.post('/api/submit', async (req, res) => {
  const body = req.body

  if (!body || !body.pdfData || !body.personalDetails) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  // generate pdf from body info and save it to disk temporarily
  console.info('Generating report...')
  const outputUint8Array = await generateReport(body)
  console.info('Report generated successfully')

  // read the pdf file
  const buffer = Buffer.from(outputUint8Array)

  // send email with pdf attachment
  console.info('Sending email...')
  const { data: emailResponse, error } = await resend.emails.send({
    from: 'contact@rootkings.dev',
    to: ['krushndayshmookh@gmail.com', 'sahilkindarle212@gmail.com'],
    subject: 'Report PDF',
    attachments: [
      {
        content: buffer,
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
  console.info('Email sent successfully')
  return res.json(emailResponse)
})

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

app.listen(process.env.PORT, () => {
  console.info('Server is running on port 3000')
})
