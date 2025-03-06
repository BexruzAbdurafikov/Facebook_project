function drawUser(r) {
    const users = document.querySelector('.users')
    for (let item of r) {
        const userDiv = document.createElement('div')
        const name = document.createElement('h3')
        const company = document.createElement('p')
        const website = document.createElement('p')
        const phone = document.createElement('p')
        const button = document.createElement('button')

        button.classList.add('button', 'profile')
        userDiv.classList.add('user')

        button.textContent = 'Подробнее'
        name.textContent = item.name
        company.textContent = item.company?.name
        website.textContent = item.website
        phone.textContent = item.phone

        button.onclick = () => {
            window.location.href = `./profile.html?id=${item.id}`
        }

        userDiv.append(name, company, website, phone, button)
        users.append(userDiv)
    }
}

const aboutBtn = document.querySelector('.about')
aboutBtn.onclick = () => {
    window.location.href = 'about.html'
}

const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(URL)
    .then((r) => r.json())
    .then((r) => drawUser(r))