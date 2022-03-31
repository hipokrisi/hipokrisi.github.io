
const calculatorScreen = document.querySelector('.calculator-screen')

const upadateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        upadateScreen(event.target.value)
    })
})

let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }   else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        upadateScreen(currentNumber)
    })
})


const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
        calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result =  parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result =  prevNumber - currentNumber
            break
        case '*':
            result =  prevNumber * currentNumber
            break
        case '/':
            result =  prevNumber / currentNumber
            break
        default:
            return        
    }
    currentNumber =  result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    upadateScreen(currentNumber)
})



const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'

}
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    upadateScreen(currentNumber)
})



inputDecimal = (dot) => {
    if (currentNumber.includes ('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    upadateScreen(currentNumber)
})


