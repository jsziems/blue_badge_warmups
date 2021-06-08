// Day 1 Blue Badge


let foods = ["apple", "orange", "rice", "bread", "tofu"]
for (let i=0; i <= foods.length-1; i++){
    console.log(foods[i])
}

// BRONZE
console.log("Bronze")
for (let i=foods.length-1; i>=0; i--){
    console.log(foods[i])
}

// SILVER
console.log("Silver")
for (let i=foods.length-1; i>=0; i--){
    let word = foods[i]
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)
    console.log(first_letter + rest)
}

// GOLD
console.log("Gold")
for (let i=foods.length-1; i>=0; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let first_letter = word[0].toUpperCase()
        let rest = word.slice(1)
        console.log(first_letter + rest)
    }
}

// GOLD V2
console.log("Gold V2")
for (let i=foods.length-1; i>=0; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let titleCaseWord = titleCase(word)
        console.log(`Foods[${i}]:` + titleCaseWord)
        let first_letter = word[0].toUpperCase()
        let rest = word.slice(1)
        console.log(first_letter + rest)
    }
}

function titleCase(word){
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)
    return first_letter + rest
}

foods = ["apple", "orange", "rice", "bread", "tofu"]
let allergies = ['gluten', 'soy']

let x

console.log ("For of:  BRONZE")
for (x of foods) {
    console.log(x)

    console.log(x + "  " + check_length(x))
}


function check_length(word) {
    return word.length > 4;
}

console.log("For of - SILVER")
for (x of foods) {
    console.log(x)

    console.log(x + "  " + check_length(x) + "  " + foodAllergyCheck(x))
}


function check_length(word) {
    return word.length > 4
}

function foodAllergyCheck(word){
    allergyMap = {
        bread : "gluten",
        tofu : "soy"
    }

    let allergyLookup = allergyMap[word]

    if (allergies.includes(allergyLookup)) {
        return "You can't eat"
    } else
    return "You can eat"
}

console.log("For of - GOLD")
for (x of foods) {
    let longWordResult = check_length(x) ? "" : "not"

    let response = `${x} is ${longWordResult} a long word and ${foodAllergyCheck(x)} it with your allergies.`
    console.log(response)
}


function check_length(word) {
    return word.length > 4
}

function foodAllergyCheck(word){
    allergyMap = {
        bread : "gluten",
        tofu : "soy"
    }

    let allergyLookup = allergyMap[word]

    if (allergies.includes(allergyLookup)) {
        return "you can't eat"
    } else
    return "you can eat"
}

// Array Push -- Bronze

console.log("Array Push - BRONZE")

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberCards = []

for (x of cards) {
    if (typeof(x) == "number") {
        numberCards.push(x)
    } else faceCards.push(x)
}
console.log(faceCards)
console.log(numberCards)

console.log("Array Push - SILVER") 
cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
faceCards = []
numberCards = []

while(cards.length > 0) {
    let card = cards.pop()
    if (typeof(card) == "number") {
        numberCards.push(card)
    } else faceCards.push(card)
}

console.log(faceCards)
console.log(numberCards)
console.log(cards)

console.log("Array Push - GOLD") 
cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
faceCards = []
numberCards = []

while(cards.length > 0) {
    let card = cards.pop()
    if (isFaceCard(card)) {
        faceCards.push(card)
    } else numberCards.push(card)
}

console.log(faceCards)
console.log(numberCards)
console.log(cards)

function isFaceCard(card) {
    switch(card) {
    case "A":
    case "K":
    case "Q":
    case "J":
        return true
    default:
        return false
    }
}