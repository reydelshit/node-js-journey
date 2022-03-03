const fileSystem = require('fs')

//read files 
// fileSystem.readFile('./docs/names.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// write files 

// fileSystem.writeFile('./docs/names.txt', 'hey bendover', () => {
//     console.log('wow')
// })

// directories 

if(!fileSystem.existsSync('./assets')){
    fileSystem.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
     })
} else {
    fileSystem.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('deleted')
    })
}


if(fileSystem.existsSync('./docs/deletethis.txt')){
    fileSystem.unlink('./docs/deletethis.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}