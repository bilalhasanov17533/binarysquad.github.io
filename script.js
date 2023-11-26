const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const form = document.getElementById('form')
const suggestions = document.getElementById('suggestions')

form.addEventListener('submit', (e) => {

    let messages = []

    if (suggestions.value.length <= 50) {
        messages.push('Make sure your message contains atleast 50 characters!')
    }
})