

const material = document.querySelector('.material-icons')
function click() {
    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('material-icons')) {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
                material.innerHTML = 'menu'
                material.style.color = 'black'
                material.style.background = '#e0e0e0'

            } else {
                itens.style.display = 'block'
                material.style.color = '#e0e0e0'
                material.style.background = 'black'
                material.style.border = '1px solid #e0e0e0'
                material.innerHTML = 'close'

            }
        }

        if (el.classList.contains('shop')) {
            alert('Página em desenvolvimento')
        }
    })
}

function tela() {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
        } else {
            material.innerText = 'menu'
            material.style.color = 'black'
            material.style.background = '#e0e0e0'
            itens.style.display = 'none'
        }
    })
}

function preload() {
    window.addEventListener("load", () => {
        document.querySelector(".box-load").style.display = "none"
        document.querySelector(".content").style.display = "block"
    })
}


tela()
click()
preload()
