const fileSystem = require('fs')

const readStream = fileSystem.createReadStream('./docs/streams.txt', {encoding: 'utf-8'})
const writeStream = fileSystem.createWriteStream('./docs/streams2.txt')


// readStream.on('data', (chuck) => {
//     console.log(chuck)
//     writeStream.write(chuck)
// })

readStream.pipe(writeStream)