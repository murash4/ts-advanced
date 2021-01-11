class Person {
    constructor (private name: string) {}
}

const max = new Person('Maxim')
// Demo comment

const btn = document.querySelector('#btn')!

btn.addEventListener('click', () => {
    console.log(111)
})

let anyFlag

function logInfo (data: string) {
    console.log(data)
    anyFlag = true
    console.log(anyFlag)
    anyFlag = '111'
    console.log(anyFlag)
}

logInfo('tratata')
