// Step 1
const ages = [3, 9, 23, 64, 2, 8, 28 , 93]

console.log('last minus first:', ages[ages.length - 1] - ages[0])
ages.push(13)
console.log('last minus first with added age:', ages[ages.length - 1] - ages[0])

/**
 * Gets the average age of ages[]
 * @returns The average age of ages[]
 */
const getAverageAge = () => {
    let total = 0
    for(let age of ages){
        total += age
    }
    return total / ages.length
}

console.log('average age:', getAverageAge())

// Step 2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

/**
 * Gets the average number of letters of the names array.
 * @returns the average number of letters of each name in names[].
 */
const getAverageNumberOfLetters = () => {
    let totalNumberOfLetters = 0
    for(let name of names){
        totalNumberOfLetters += name.length
    }
    return totalNumberOfLetters / names.length
}

console.log('average number of letters:', getAverageNumberOfLetters())

let allNames = ''
for(let name of names){
    allNames += name + ' '
}
console.log('all names concatenated:', allNames)

// Step 5
let namesLengths = []
for(let name of names){
    namesLengths.push(name.length)
}
console.log('names lengths:', namesLengths)

// Step 6
let sum = 0
for(let length of namesLengths){
    sum += length
}
console.log('sum:', sum)

// Step 7
/**
 * Concatenates a word with itself a number of times.
 * @param {string} word 
 * @param {number} n 
 * @returns a string of each word in the array added together.
 */
const concat = (word, n) => {
    let concatWord = ''
    for(let i = 0; i < n; i++){
        concatWord += word
    }
    return concatWord
}
console.log('contatenated words:', concat('cody', 6))

// Step 8
/**
 * Gets the full name.
 * @param {string} firstName the first name
 * @param {string} lastName the last name
 * @returns the full name separated by a space.
 */
const getFullName = (firstName, lastName) => {
    return firstName + " " + lastName
}
console.log('full name:', getFullName('Cody','Landrum'))

// Step 9
/**
 * Adds all numbers of the array and checks if it's greater than 100.
 * @param {number[]} numArray An array of numbers.
 * @returns true if sum is greater than 100.
 */
const isGreaterThan100 = (numArray) => {
    let sum = 0
    for(let num of numArray){
        sum += num
    }
    return sum > 100 ? true : false
}
console.log('greater than 100:', isGreaterThan100([36,33,33]))

// Step 10
/**
 * Gets the average of each number in an array
 * @param {number[]} numArray 
 * @returns the average of each number in a number array
 */
const getAverage = (numArray) => {
    let total = 0
    for(let num of numArray){
        total += num
    }
    return total / numArray.length
}
console.log('get average:', getAverage([52,123,53,12,46,75,34,23]))

// Step 11
/**
 * Compares the average of two arrays.
 * @param {number[]} numArr1 
 * @param {number[]} numArr2 
 * @returns true if the average of the first array is larger than the average of the second array.
 */
const isFirstAverageGreaterThanSecond = (numArr1, numArr2) => {
    const first = getAverage(numArr1)
    const second = getAverage(numArr2)
    return first > second ? true : false
}
console.log('first average greater than second:', isFirstAverageGreaterThanSecond([4,5,6],[2,3,4]))

// Step 12
/**
 * Determines if you will buy a drink.
 * @param {boolean} isHotOutside 
 * @param {number} moneyInPocket 
 * @returns true if it's hot outside and moneyInPocket is greater than 10.50
 */
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50 ? true : false
}
console.log('will buy drink:', willBuyDrink(true, 10.49))

// Step 13
/**
 * This is my implementation of the popular leetcode problem "twosum"
 * It takes an array of numbers and checks to see if there are two numbers that add up to the target num
 * @param {number[]} nums the array of numbers (with one possible solution)
 * @param {number} target the target number
 * @returns a duplet array with the first index and second index of the numbers found
 */
const twoSum = (nums, target) => {
    let hashMap = {} // create a js object to quickly search
    for(let i = 0; i < nums.length; i++){ // loop through nums checking each number
        let num1 = nums[i] // number being tested
        let num2 = target - num1 // the second number to be searched
        if(hashMap[num2] !== undefined){ // checks if the solution exists in the map
            return [i, hashMap[num2]] // if it does, return the duplet of indexes
        }
        hashMap[nums[i]] = i // otherwise, add the num/index pair to the object
    }
};

console.log('two sum:', twoSum([2,3,4,5], 6))
console.log('two sum:', twoSum([3,3], 6))