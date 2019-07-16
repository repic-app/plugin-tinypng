const fs = require('fs')
const tinify = require('tinify')

module.exports = (task, _, options) => new Promise((resolve, reject) => {

  if (!options || !options[0] || !options[0].value) {
    reject({
      message: '未指定TinyPNG的API Key'
    })
    return false
  }

  tinify.key = options[0].value

  fs.readFile(task.path, (error, sourceData) => {
    if (error) {
      reject(error)
    } else {
      tinify.fromBuffer(sourceData).toBuffer((error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve({ data })
        }
      })
    }

  })

})