const fs = require('fs')
const axios = require('axios')

const json = require('../src/assets/questions/section4.json')

const fetchAllImages = async () => {
  json.options.forEach(async option => {
    const response = await axios.get(option.imageLink, {
      responseType: 'arraybuffer',
    })

    const buffer = Buffer.from(response.data, 'utf-8')

    fs.writeFile(`../public/images/section4/${option.id}.png`, buffer, () =>
      console.info(`finished downloading: ${option.id}`)
    )
  })
}

fetchAllImages()
