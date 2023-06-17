const inputEmail = document.querySelector('#email')
const inputSubmit = document.querySelector('#sign-submit')
const error = document.querySelector('.error')
const thanksPage = document.querySelector('.thanks')
const signPage = document.querySelector('.sign')
const submit = document.querySelector('#submit')
const emailValue = document.querySelector('.email-value')
const btnThanks = document.querySelector('.btn-thanks')

inputSubmit.addEventListener('click', function() {
    event.preventDefault()
    if (inputEmail.validity.valid === false || inputEmail.value === '') {
        error.innerHTML = 'Insert a valid email'
        inputEmail.style.border = '2px solid hsl(4, 100%, 67%)'
    } else {
        signPage.classList.remove('selecionado')
        thanksPage.classList.add('selecionado')
        emailValue.innerHTML = inputEmail.value
    }
})

btnThanks.addEventListener('click', function () {
    signPage.classList.add('selecionado')
    thanksPage.classList.remove('selecionado')
})