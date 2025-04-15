document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('[data-tab-button]')
    let questions = document.querySelectorAll('[data-faq-question]')

    let heroSection = document.querySelector('.hero')
    let alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        let posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader()
        }else {
            exibeElementosDoHeader()
        }
    })
    
    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            let abaAlvo = botao.target.dataset.tabButton
            let aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAsAbas()
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultaElementosDoHeader() {
    let header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader() {
    let header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento) {
    let classe = 'faq__questions__item--is-open'
    let elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
    let buttons = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeAsAbas() {
    let tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}