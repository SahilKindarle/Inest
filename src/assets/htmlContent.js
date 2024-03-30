exports.leftBrainContent = `

<div class="information">
  <div class="details">
    <h4 style="margin-bottom: 10px; font-size: 1.4rem">You are a . . .</h4>
    <p style="margin-bottom: 8px">LEFT BRAINED PERSON!</p>
    <p>You are a left-brained person, your personality is characterized by your logical, analytical, and detail-oriented approach to life. You thrive in structured environments where you can apply your problem-solving skills and prefer tasks that have clear objectives and outcomes.
    </p>
    <ul style="margin-top: 10px">
      <li>Logical and Analytical Thinking</li>
      <li>Attention to Detail</li>
      <li>Orderly and Organized</li>
      <li>Preference for Facts and Data</li>
      <li>Strong Problem-Solving Skills</li>
      <li>Less Emphasis on Creativity</li>
      <li>Prefer Concrete Outcomes</li>
    </ul>
  </div>
  <div class="brain-svg">
    <img src="left_brain.png" alt="">
    </div>
</div>

`

exports.rightBrainContent = `

<div class="information">
  <div class="details">
    <h4 style="margin-bottom: 10px; font-size: 1.4rem">You are a . . .</h4>
    <p style="margin-bottom: 8px">Right BRAINED PERSON!</p>
    <p>You are a right-brained person, your personality is likely characterized by creativity, intuition, and a holistic approach to problem-solving. Here are some common traits associated with individuals like you</p>
    <ul style="margin-top: 10px">
      <li>Creative</li>
      <li>Intuitive</li>
      <li>Holistic Thinking</li>
      <li>Emotional Sensitivity</li>
      <li>Non-linear Thinking</li>
      <li>Open-Mindedness</li>
      <li>Spontaneity</li>
      <li>Visual Thinking</li>
      <li>Difficulty with Structure</li>
      <li>Innovative</li>
    </ul>
  </div>
  <div class="brain-svg">
    <img src="right_brain.png" alt="">
    </div>
</div>

`

exports.yourPersonalityType = `
<h5 style="margin-bottom: 5px; ">{{title}}</h5>
<p>{{description}}</p>
`

const secTwo = {
  'Verbal Skills': {
    percentage: 90,
    description:
      'You have a strong command of language and are able to communicate effectively in both written and verbal form.',
  },
  'Numeric Skills': {
    percentage: 80,
    description:
      'You are comfortable working with numbers and have a good understanding of mathematical concepts.',
  },
  'People Skills': {
    percentage: 70,
    description:
      'You are able to work well with others and have strong interpersonal skills.',
  },
  'Adaptive Skills': {
    percentage: 60,
    description:
      'You are able to adapt to new situations and environments quickly and effectively.',
  },
  'Analytical Skills': {
    percentage: 50,
    description:
      'You are able to analyze and solve complex problems using logical reasoning and critical thinking.',
  },
  'Writing Skills': {
    percentage: 40,
    description:
      'You are able to express your thoughts and ideas clearly and concisely in writing.',
  },
  'Time Management Skills': {
    percentage: 30,
    description:
      'You are able to manage your time effectively and prioritize tasks to meet deadlines.',
  },
  overall: {
    title: 'Highly Proficient',
    description:
      'Based on your skill scores, you are highly proficient in the following areas:',
    points: [
      'Verbal Skills',
      'Numeric Skills',
      'People Skills',
      'Adaptive Skills',
    ],
  },
}

exports.yourSkillScore = `

<div class="skills-information">
<div class="skills-score">
<p>Verbal Skills: <span>${secTwo['Verbal Skills'].percentage}%</span> </p>
<p>Numeric Skills: <span>${secTwo['Numeric Skills'].percentage}%</span> </p>
<p>People Skills: <span>${secTwo['People Skills'].percentage}%</span> </p>
<p>Adaptive Skills: <span>${secTwo['Adaptive Skills'].percentage}%</span> </p>
<p>Analytical Skills: <span>${secTwo['Analytical Skills'].percentage}%</span> </p>
<p>Writing Skills: <span>${secTwo['Writing Skills'].percentage}%</span> </p>
<p>Time Management Skills: <span>${secTwo['Time Management Skills'].percentage}%</span> </p>
</div>
<div class="skill-score">
    <div class="graph">
        <div class="graph-details" style="text-align: end;">
            <p> Verbal Skills</p>
            <p> Numeric Skills</p>
            <p> People Skills</p>
            <p> Adaptive Skills</p>
            <p> Analytical Skills</p>
            <p> Writing Skills</p>
            <p> Time Management Skills</p>
        </div>
        <div class="graph-progress">
            <div class="line1">
                <div class="line-data">
                    0%
                </div>
            </div>
            <div class="line2">
                <div class="line-data">
                    20%
                </div>
            </div>
            <div class="line3">
                <div class="line-data">
                    40%
                </div>
            </div>
            <div class="line4">
                <div class="line-data">
                    60%
                </div>
            </div>
            <div class="line5">
                <div class="line-data">
                    80%
                </div>
            </div>
            <div class="line6">
                <div class="line-data">
                    100%
                </div>
            </div>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Verbal Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Numeric Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['People Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Adaptive Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Analytical Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Writing Skills'].percentage}%;"></progress>
            <progress class="graph-indicator" id="file" value="100" max="100"
                style="max-width: ${secTwo['Time Management Skills'].percentage}%;"></progress>
        </div>
    </div>
</div>
</div>
`

const secThree = {
  score: 80,
  description:
    'Your emotional quotient is a measure of your emotional intelligence, which is the ability to recognize, understand, and manage your own emotions, as well as the emotions of others.',
  points: [
    'You are self-aware and able to recognize your own emotions and how they affect your thoughts and behavior.',
    'You are able to manage your emotions effectively and remain calm under pressure.',
    'You are empathetic and able to understand the emotions and perspectives of others.',
    'You have strong social skills and are able to build and maintain positive relationships with others.',
  ],
}

exports.skillProficiencySection = `
<div class="content">
<h4>Your Skill Proficiency Level -- ${secTwo.overall.title}</h4>
<p style="margin-top: 1rem;">${secTwo.overall.description}</p>
<ul style="padding-left: 3rem; margin-top: 1rem;">
${secTwo.overall.points.map(point => `<li>${point}</li>`).join('')}
</ul>
<br>
<br>

<h4>Your Emotional Quotient</h4>

<h2 style="text-align: end;">YOUR SCORE - ${secThree.score}</h2>
<br>
<p style="margin-top: 1rem;">${secTwo.description}</p>
<div class="emotianal-details">
${secThree.points.map(point => `<p>${point}</p>`)}
</div>
</div>`

const secOne = [
  {
    title: 'Option - 01',
    description: 'Software Developer',
    sectors: ['Information Technology', 'Software Development'],
  },
]

exports.yourSuitableProfession = `
<h4 style="margin-bottom: 12px; margin-top: 2rem">Your Best Suitable Profession</h4>
                  <br>
                  {{!-- <div class="grid-container">
                      ${secOne
                        ?.map(
                          (item, i) =>
                            `<div>
                              <p style="text-align: center;"><strong>Option - 0${
                                i + 1
                              }</strong></p>
                              <p class="title">${item.title}</p>
                              <p class="desc">${item.description}</p>
                              <ol>
                              ${item.sectors
                                .map(sector => `<li>${sector}</li>`)
                                .join('')}
                              </ol>
                          </div>`
                        )
                        .join('')}
                  </div> --}}
              </div>`
