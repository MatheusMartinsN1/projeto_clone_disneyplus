document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('[data-tab-button]')
    
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
})

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