const ICONS = document.querySelectorAll('.section-1-icons i')
let i = 1
setInterval(()=> {
    i++

    const ICON = document.querySelector('.section-1-icons .change')
    
    ICON.classList.remove('change')
    if(i > ICONS.length) {
        ICONS[0].classList.add('change')
        i = 1
    }else {
        ICON.nextElementSibling.classList.add('change')
    }
}, 1000)

