import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fs from 'fs-extra'

// constants
// const TEXT_COLOR = rgb(0.95, 0.1, 0.1)
const TEXT_COLOR = rgb(0, 0, 0)
const SIDE_MARGIN = 48

// This should be a Uint8Array or ArrayBuffer
// This data can be obtained in a number of different ways
// If your running in a Node environment, you could use fs.readFile()
// In the browser, you could make a fetch() call and use res.arrayBuffer()
const existingPdfBytes = fs.readFileSync('./csa-report-template.pdf')

// Load a PDFDocument from the existing PDF bytes
const pdfDoc = await PDFDocument.load(existingPdfBytes)

// Embed the Helvetica font
const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

// Get and copy the template page of the document
const [templatePage1] = await pdfDoc.copyPages(pdfDoc, [3])
const [templatePage2] = await pdfDoc.copyPages(pdfDoc, [3])
pdfDoc.addPage(templatePage1) // page 4
pdfDoc.addPage(templatePage2) // page 5

// get all pages
const pages = pdfDoc.getPages()

// Get the width and height of the first page
const { width, height } = pages[0].getSize()
// console.info('Width:', width, 'Height:', height)

// letter page
const letterPage = pages[1]

letterPage.drawText('John Doe' + ',', {
  x: 76,
  y: height - 127,
  size: 12,
  font: helveticaFont,
  color: TEXT_COLOR,
})

// user details page
const userPage = pages[2]



// Draw a string of text diagonally across the first page
userPage.drawText(getApplicantDetails(), {
  x: 144,
  y: height - 171,
  size: 13,
  lineHeight: 18,
  font: helveticaFont,
  color: TEXT_COLOR,
  maxWidth: 350,
  wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
})

// userPage.drawText('This text was added with JavaScript!', {
//   x: 135,
//   y: height - 189,
//   size: 13,
//   font: helveticaFont,
//   color: TEXT_COLOR,
//   rotate: degrees(-45),
// })

// start writing report details

const reportPage1 = pages[3]

const brainSideDetails = `LEFT BRAINED PERSON

You are a left-brained person, your personality is characterized by your logical, analytical, and detail-oriented approach to life. You thrive in structured environments where you can apply your problem-solving skills and prefer tasks that have clear objectives and outcomes.

\u2022 Logical and Analytical Thinking
\u2022 Attention to Detail
\u2022 Orderly and Organized
\u2022 Preference for Facts and Data
\u2022 Strong Problem-Solving Skills
`

// text x, y start at top left corner
reportPage1.drawText(brainSideDetails, {
  x: SIDE_MARGIN,
  y: height - 150,
  size: 12,
  lineHeight: 18,
  font: helveticaFont,
  color: TEXT_COLOR,
  maxWidth: 300,
  wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
})

const imageBytes = fs.readFileSync('./left_brain.png')
const image = await pdfDoc.embedPng(imageBytes)

// image x, y start at bottom left corner
reportPage1.drawImage(image, {
  x: 360,
  y: height - 340,
  width: 180,
  height: 180,
})

const personalityDetails = `PERSONALITY TYPE

Professional pragmatic self-assured

You are proactive and assertive in shaping your destiny, placing trust in your actions rather than relying solely on luck. When faced with challenges, you approach them with a pragmatic and straightforward mindset, finding practical solutions that get the job done efficiently. Your grounded perspective allows you to view daily tasks realistically, addressing them with unwavering determination and resolve. People entrust you with significant responsibilities in the workplace because they have confidence in your reliability and capability. Your strong willpower exudes self-assurance, instilling confidence in others. You are driven by a relentless pursuit of your goals, never resting until you have seen your ideas come to fruition. In essence, you embody professionalism, pragmatism, and self-assurance, commanding respect and admiration for your steadfast commitment to achieving success through your own efforts.
`

reportPage1.drawText(personalityDetails, {
  x: SIDE_MARGIN,
  y: height - 420,
  size: 12,
  lineHeight: 18,
  font: helveticaFont,
  color: TEXT_COLOR,
  maxWidth: 500,
  wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
})

const reportPage2 = pages[4]



const skills = {
  'Verbal Skills': 90,
  'Numeric Skills': 85,
  'People Skills': 70,
  'Adaptive Skills': 80,
  'Analytical Skills': 85,
  'Writing Skills': 90,
  'Time Management Skills': 80,
}

let y = height - 180
Object.entries(skills).forEach(([skill, score]) => {
  const leftSideText = `${skill} `
  const rightSideText = `${score}%`
  const widthLT = helveticaFont.widthOfTextAtSize(leftSideText, 12)
  reportPage2.drawText(leftSideText, {
    x: 228 - widthLT,
    y,
    size: 12,
    font: helveticaFont,
    color: TEXT_COLOR,
    align: 'right',
  })

  // progress bar
  reportPage2.drawRectangle({
    x: 230,
    y: y + 1,
    width: 200,
    height: 5,
    color: rgb(0.75, 0.75, 0.75),
  })

  reportPage2.drawRectangle({
    x: 230,
    y: y + 1,
    width: score * 2,
    height: 5,
    color: rgb(0.2, 0.8, 0.2),
  })

  reportPage2.drawText(rightSideText, {
    x: 438,
    y,
    size: 12,
    font: helveticaFont,
    color: TEXT_COLOR,
  })

  y -= 20
})

const skillProficiencyLevel = `SKILLS PROFICIENCY LEVEL - Expert

As an expert, you are considered a master in this field. Your proficiency level is exceptional, and you are widely acknowledged for your expertise. You possess a deep understanding of the skill and its applications, allowing you to provide guidance, troubleshoot complex issues, and innovate within this area. Your expertise goes beyond individual tasks; you contribute to strategic decision-making and may lead initiatives or projects related to this skill. Others within your organization and possibly in external networks look to you as a leader and authority in this domain. Your ability to articulate complex concepts and processes in a clear and concise manner facilitates understanding and collaboration among colleagues and stakeholders.

\u2022 Continuously push the boundaries of your expertise by exploring new applications or techniques.
\u2022 Serve as a mentor or coach to develop talent within your organization or community.
\u2022 Contribute to thought leadership by publishing research or thought pieces.
\u2022 Actively participate in professional organizations or committees related to the skill.
\u2022 Collaborate with other experts to tackle complex challenges or drive innovation within the field.

`

reportPage2.drawText(skillProficiencyLevel, {
  x: SIDE_MARGIN,
  y: height - 350,
  size: 12,
  lineHeight: 18,
  font: helveticaFont,
  color: TEXT_COLOR,
  maxWidth: 500,
  wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
})

const reportPage3 = pages[5]

const emotionalQuotient = `EMOTIONAL QUOTIENT

Your score: 90

Your emotional intelligence could use some development. It seems that managing your emotions, particularly during stressful situations, may be challenging for you. You might find yourself overwhelmed by strong emotions or tend to avoid conflicts to prevent distress. Additionally, calming down after experiencing upsetting emotions and building strong relationships with others may be areas that require attention. However, don't worry—there are various strategies and techniques you can learn to enhance your emotional intelligence starting today.

Consider:
\u2022 Engaging in mindfulness or relaxation techniques to manage stress and regulate emotions.
\u2022 Practicing assertiveness and conflict resolution skills to address difficult situations constructively.
\u2022 Seeking feedback from trusted individuals to gain insight into areas for improvement.
\u2022 Investing time in building empathy and understanding others' perspectives to strengthen relationships.
`

reportPage3.drawText(emotionalQuotient, {
  x: SIDE_MARGIN,
  y: height - 150,
  size: 12,
  lineHeight: 18,
  font: helveticaFont,
  color: TEXT_COLOR,
  maxWidth: 500,
  wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
})

reportPage3.drawText('YOUR BEST SUITED PROFESSIONS', {
  x: SIDE_MARGIN,
  y: height - 460,
  size: 12,
  font: helveticaFont,
  color: TEXT_COLOR,
})

// three tables of lists

const professions = [
  {
    title: 'Software',
    description:
      'Software Developer is a person concerned with facets of the software development process. Their work includes researching, designing, implementing, and testing software.',
    items: [
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Software Development',
    ],
  },
  {
    title: 'Software',
    description:
      'Software Developer is a person concerned with facets of the software development process. Their work includes researching, designing, implementing, and testing software.',
    items: [
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Software Development',
    ],
  },
  {
    title: 'Software',
    description:
      'Software Developer is a person concerned with facets of the software development process. Their work includes researching, designing, implementing, and testing software.',
    items: [
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Information Technology',
      'Software Development',
      'Software Development',
    ],
  },
]

let yProfession = height - 480

professions.forEach((profession, i) => {
  const xProfession = SIDE_MARGIN + i * 170
  const title = `${profession.title} - 0${i + 1}`
  const widthTitle = helveticaFont.widthOfTextAtSize(title, 10)
  reportPage3.drawText(title, {
    x: xProfession,
    y: yProfession,
    size: 10,
    font: helveticaFont,
    color: TEXT_COLOR,
    align: 'left',
  })

  reportPage3.drawText(profession.description, {
    x: xProfession,
    y: yProfession - 20,
    size: 8,
    lineHeight: 12,
    font: helveticaFont,
    color: TEXT_COLOR,
    maxWidth: 160,
    wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
  })

  const yItems = yProfession - 90
  profession.items.forEach((item, j) => {
    reportPage3.drawText(item, {
      x: xProfession,
      y: yItems - j * 16,
      size: 8,
      font: helveticaFont,
      color: TEXT_COLOR,
    })
  })
})

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()

// For example, `pdfBytes` can be:
//   • Written to a file in Node
//   • Downloaded from the browser
//   • Rendered in an <iframe>

fs.writeFileSync('./csa-report-template-modified.pdf', pdfBytes)
