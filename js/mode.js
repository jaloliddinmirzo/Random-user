const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


// Theme
const local = localStorage.getItem("mode")

const Dark = () => {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

if (local) {
    Dark()
}


darkBtn.addEventListener('click', () => {
    Dark()
    localStorage.setItem("mode", "dark")
})

lightBtn.addEventListener('click', () => {
    Dark()
    localStorage.setItem("mode", "")
})