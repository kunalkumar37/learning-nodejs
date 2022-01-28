//modules  -- Encapsulated Code (only share minimum)
//CommonJS --every file is module (by default)


// const john="john"
// const peter="peter"

// const sayhi=(name)=> 
// {
//     console.log(`hello there ${name}`)
// }

// sayhi('susan')
// sayhi(john)
// sayhi(peter)

const names=require('./4-names')
const sayHi=require('/5-utils')
const data=require('./6-alternative-flavour')
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


