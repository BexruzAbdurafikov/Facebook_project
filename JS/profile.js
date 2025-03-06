function profile() {
    const user_obj = document.querySelector('.user_obj')
    const param = parseSearchParam(window.location.search);
    const URL = `https://jsonplaceholder.typicode.com/users/${param.id}`;

    fetch(URL)
        .then((r) => r.json())
        .then((r) => {
            updateUserInfo(r)
            user_obj.innerHTML = JSON.stringify(r)
        })
}

profile()

const aboutBtn = document.querySelector('.about')
aboutBtn.onclick = () => {
    window.location.href = 'about.html'
}

const mainBtn = document.querySelector('.main');
mainBtn.onclick = () => {
    window.location.href = 'index.html'
}

function parseSearchParam(search) {
    const params = search.slice(1).split('&');
    const result = {};

    for (let param of params) {
        const [key, value] = param.split('=');

        result[key] = value;
    }

    return result;
}

function updateUserInfo(user) {
    const title = document.querySelector('h1')
    title.textContent = `User: ${user.id} - ${user.name}`
}