module.exports = {
  body: `
    <h1>Hello {{name}}!</h1>
    <p>Here is your report:</p>
    <p>{{report}}</p>
  `,
  styles: `
    h1 {
      color: blue;
    }

    p {
      color: green;
      font-size: 1.5em;
    }

  `,
}
