const toyToFind = 2

//ORIGINAL TOYS AS OBJECTS
const elmo = {
    id: 1,
    name: "Tickle Me Elmo",
    type: "toy",
    price: 39.82,
    quantity: 16,
    inStock: true,
    aisleLocation: 3,
    minAge: 2,
    requireBatteries: true
}
// const candyLand = {
//     // id: 2,
//     name: "Candy Land",
//     type: "board game",
//     price: 7.88,
//     quantity: 7,
//     inStock: true,
//     aisleLocation: 35,
//     minAge: 3,
//     requireBatteries: false
// }
// const throwThrowBurrito = {
//     // id: 3,
//     name: "Throw Throw Burrito",
//     type: "card game",
//     price: 24.99,
//     quantity: 10,
//     inStock: true,
//     aisleLocation: 35,
//     minAge: 7,
//     requireBatteries: false
// }

const toys = [
    {
        id: 1,
        name: "Tickle Me Elmo",
        type: "toy",
        price: 39.82,
        quantity: 16,
        inStock: true,
        aisleLocation: 3,
        minAge: 2,
        requireBatteries: true
    },
    {
        id: 2,
        name: "Candy Land",
        type: "board game",
        price: 7.88,
        quantity: 7,
        inStock: true,
        aisleLocation: 35,
        minAge: 3,
        requireBatteries: false
    },
    {
        id: 3,
        name: "Throw Throw Burrito",
        type: "card game",
        price: 24.99,
        quantity: 10,
        inStock: true,
        aisleLocation: 35,
        minAge: 7,
        requireBatteries: false
    }
]


const trashPandas = {
    // id: 4,
    name: "Trash Pandas",
    type: "card game",
    price: 9.89,
    quantity: 4,
    inStock: true,
    aisleLocation: 35,
    minAge: 8,
    requireBatteries: false
}

const bopIt = {
    // id: 5,
    name: "Bop It!",
    type: "game",
    price: 14.92,
    quantity: 1,
    inStock: true,
    aisleLocation: 21,
    minAge: 9,
    requireBatteries: true
}

// toys.push(trashPandas)
// toys.push(bopIt)


const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(trashPandas)
addToyToInventory(bopIt)


// REMOVE ITEM WITH SPECIFIC ID
const removeProduct = (itemId) => {
    for (const toyObj of toys) {
        if (toyObj.id === itemId) {
            // const objectIndex = toys.findIndex(toyObj) --NOT WORKING
            const toyObjIndex = toys.indexOf(toyObj)
            toys.splice(toyObjIndex, 1)
        }
    }
    return toys
}
// const removeFirstId = removeProduct (1)
// console.log(removeFirstId)
// console.log(toys)




// INCREASE PRICE FOR EACH TOY
// for (const toy of toys) {
//     toy.price = toy.price * 1.05
// }

// CONSOLE MESSAGE FOR EACH TOY
// for (const toy of toys) {
//     console.log(`${toy.name} is a ${toy.type} that costs $${toy.price}.`)
// }

// CONSOLE MESSAGE FOR EACH TOY
// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//     console.log(`${toy.name} is a ${toy.type} that costs $${toy.price}.`)
//     }
// }

//CONSOLE NAMES IN TOYS ARRAY
// for (const toy of toys) {
//     console.log(toy.name)
// }

// console.log(toys)



//EXPLORER: THE PERRY SCOPE
const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        let availableForPurchase = false
        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
        if (availableForPurchase) {
            console.log("Enjoy your new Perry Scope")
        }
    }
}

// sellPerryScope()

//--PIONEER: DATA STRUCTURE: MAP
//ADDING NEW TOY OBJECTS AND MAPPING PRICE 
const toyPrices = new Map()
const addToyToInventoryMap = (toyObject, price) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy

    toyPrices.set(toyObject, price)

    toys.push(toyObject)
}

// addToyToInventoryMap(bopIt, 14.92)
// addToyToInventoryMap(trashPandas, 9.89)
// console.log(toyPrices)

//---CONSOLE LOG THE NAME AND PRICE OF EACH TOY IN MAP
// toyPrices.forEach((priceValue, toyObjKey) => {
//     console.log(`The ${toyObjKey.name} is $${priceValue}`)
// })

// console.log(toys) //TESTING EVERYTHIG IS FINE UP TO THIS POINT

//--PIONEER: DATA STRUCTURES: SETS
const toyInventorySet = new Set()

toyInventorySet.add(elmo)
toyInventorySet.add(bopIt)
toyInventorySet.add(trashPandas)
toyInventorySet.add(trashPandas) //CONFIRMING DUPLICATION FAILSAFE
console.log(toyInventorySet)



