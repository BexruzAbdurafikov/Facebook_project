function profile() {
    const user = JSON.parse(localStorage.getItem('user'))
    const user_obj = document.querySelector('.user_obj')

    user_obj.innerHTML = JSON.stringify(user)
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