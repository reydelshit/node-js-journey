
// basic way 
const getNames = require('./people')
// console.log(getNames)

// nice way 

const { peopleNames, peoplesAge } = require('./people')

console.log(peopleNames, peoplesAge)
