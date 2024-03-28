let leftBrainContent = `

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

let rightBrainContent = `

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

let yourPersonalityType = `
<h5 style="margin-bottom: 5px; ">${title}</h5>
<p>${description}</p>
`

let yourSkillScore = `

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
