const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(`${fileName}`, `${fileContent}`)
  } catch (err) {
    console.log(err)
  }
}

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(`${fileName}`, { encoding: 'utf8' })
    return data
  } catch (err) {
    console.log(err)
  }
}

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.appendFile(`${fileName}`, `${fileContent}`)
  } catch (err) {
    console.log(err)
  }
}

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(`${fileName}`)
  } catch (err) {
    console.log(err)
  }
}

myFileReader('INDEX.JS')

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
 