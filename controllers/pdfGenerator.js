const pdfLib = require('pdf-lib')
const fs = require('fs-extra')

const { PDFDocument, rgb, StandardFonts } = pdfLib

// constants
const TEXT_COLOR = rgb(0, 0, 0)
const SIDE_MARGIN = 48

const getApplicantDetails = details => {
  // const details = {
  //   applicationId: '123456',
  //   applicantName: 'John Doe',
  //   applicantEmail: 'john.doe@email.com',
  //   applicantPhone: '1234567890',
  //   classAndSection: '5-A',
  //   department: 'Computer Science',
  //   institution: 'XYZ School',
  // }
  return `${details.applicationId}\n${details.applicantName}\n${details.applicantEmail}\n${details.applicantPhone}\n${details.classAndSection}\n${details.department}\n${details.institution}`
}

const BRAIN_SIDE_DETAILS = {
  'left-brain dominate': {
    text: `LEFT BRAINED PERSON

You are a left-brained person, your personality is characterized by your logical, analytical, and detail-oriented approach to life. You thrive in structured environments where you can apply your problem-solving skills and prefer tasks that have clear objectives and outcomes.

\u2022 Logical and Analytical Thinking
\u2022 Attention to Detail
\u2022 Orderly and Organized
\u2022 Preference for Facts and Data
\u2022 Strong Problem-Solving Skills
  `,
    image: 'left_brain.png',
  },
  'right-brain dominate': {
    text: `RIGHT BRAINED PERSON

You are a right-brained person, your personality is likely characterized by creativity, intuition, and a holistic approach to problem-solving. Here are some common traits associated with individuals like you.

\u2022 Creative
\u2022 Intuitive
\u2022 Holistic Thinking
\u2022 Emotional Sensitivity
\u2022 Non-linear Thinking
\u2022 Open-Mindedness
\u2022 Spontaneity
\u2022 Visual Thinking
\u2022 Difficulty with Structure
\u2022 Innovative
  `,
    image: 'right_brain.png',
  },
}

const getBrainSideDetails = pdfData => {
  const type = pdfData.brainType
  return BRAIN_SIDE_DETAILS[type]
}

const getPersonalityTypeDetails = require('./assets/personality_type_details.js')

const getSkillScore = pdfData => {
  const score = {}

  pdfData.skills.forEach(skill => {
    score[skill.label] = skill.percentage
  })

  return score
}

const getSkillProficiencyDetails = require('./assets/skill_proficiency_details.js')

const getEmotionalQuotientDetails = require('./assets/emotional_quotient_details.js')

const getProfessionsDetails = require('./assets/professions_details.js')

const generateDocument = async ({ personalDetails, pdfData }) => {
  const existingPdfBytes = fs.readFileSync(
    __dirname + '/assets/csa-report-template.pdf'
  )
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Get and copy the template page of the document
  const [templatePage1] = await pdfDoc.copyPages(pdfDoc, [3])
  const [templatePage2] = await pdfDoc.copyPages(pdfDoc, [3])
  pdfDoc.addPage(templatePage1) // page 4
  pdfDoc.addPage(templatePage2) // page 5

  const pages = pdfDoc.getPages()
  const { height } = pages[0].getSize()

  // letter page
  const letterPage = pages[1]

  letterPage.drawText(personalDetails.applicantName + ',', {
    x: 76,
    y: height - 127,
    size: 12,
    font: helveticaFont,
    color: TEXT_COLOR,
  })

  // user details page
  const userPage = pages[2]

  userPage.drawText(getApplicantDetails(personalDetails), {
    x: 144,
    y: height - 171,
    size: 13,
    lineHeight: 18,
    font: helveticaFont,
    color: TEXT_COLOR,
    maxWidth: 350,
    wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
  })

  // start writing report details
  const reportPage1 = pages[3]

  const brainSideDetails = getBrainSideDetails(pdfData)

  // text x, y start at top left corner
  reportPage1.drawText(brainSideDetails.text, {
    x: SIDE_MARGIN,
    y: height - 150,
    size: 12,
    lineHeight: 18,
    font: helveticaFont,
    color: TEXT_COLOR,
    maxWidth: 300,
    wordBreaks: [' '], // wordBreaks: [" "] is the key to break the text into multiple lines
  })

  const imageBytes = fs.readFileSync(
    __dirname + `/assets/${brainSideDetails.image}`
  )
  const image = await pdfDoc.embedPng(imageBytes)

  // image x, y start at bottom left corner
  reportPage1.drawImage(image, {
    x: 360,
    y: height - 340,
    width: 180,
    height: 180,
  })

  reportPage1.drawText(getPersonalityTypeDetails(pdfData), {
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

  reportPage2.drawText('YOUR SKILL SCORE', {
    x: SIDE_MARGIN,
    y: height - 150,
    size: 12,
    font: helveticaFont,
    color: TEXT_COLOR,
  })

  const skillScore = getSkillScore(pdfData)

  let y = height - 180
  Object.entries(skillScore).forEach(([skill, score]) => {
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

  reportPage2.drawText(getSkillProficiencyDetails(pdfData), {
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

  reportPage3.drawText(getEmotionalQuotientDetails(pdfData), {
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

  const professions = getProfessionsDetails(pdfData)

  let yProfession = height - 480

  professions.forEach((profession, i) => {
    const xProfession = SIDE_MARGIN + i * 170
    const title = `${profession.title} - 0${i + 1}`
    // const widthTitle = helveticaFont.widthOfTextAtSize(title, 10)
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
    profession.sectors.forEach((item, j) => {
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

  return pdfBytes
}

module.exports = generateDocument
