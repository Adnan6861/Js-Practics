const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lowerEl = document.getElementById('lowerCase')
const UpperCaseEl = document.getElementById('UpperCase')
const numberEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Handle Generate Button Click
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowerEl.checked
    const hasUpper = UpperCaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return 'Please select at least one option'
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    return generatedPassword.slice(0, length)
}

// Clipboard Copy
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

// Random Generators
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]<>?~`'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
