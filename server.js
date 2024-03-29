require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { formidable } = require('formidable')

const logger = require('morgan')

const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const fs = require('fs')
const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logger('dev'))

app.post('/api/submit', async (req, res, next) => {
  const form = formidable({})

  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err)
      return
    }

    if (!files.pdf) {
      res.status(400).json({ error: 'No file uploaded' })
      return
    }

    // create buffer from files.pdf[0].filepath
    const buffer = fs.readFileSync(files.pdf[0].filepath)

    const { data, error } = await resend.emails.send({
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
      res.status(500).json({ error: 'Failed to send email' })
      return
    }

    res.json(data)
  })
})

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

// app.use(express.static(__dirname + '/dist/spa'))

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/dist/spa/index.html')
// })

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000')
})
