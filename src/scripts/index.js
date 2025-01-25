document.addEventListener('DOMContentLoaded', function() {
    // Informaçoes 
    const modal = document.querySelector('.dialog')
    const dialogBtn = document.querySelector('.btn__dialog')
    const dialogClose = document.querySelector('.close__dialog')

    dialogBtn.onclick = () => {
        modal.showModal();
    }
    dialogClose.onclick = () => {
        modal.close();
    }

    document.querySelectorAll('.info__item').forEach(e => {
        const btnHeader = e.querySelector('.info__item__header');
        const itemBody = e.querySelector('.info__item__body');
        btnHeader.addEventListener('click', () => {
            itemBody.classList.toggle('info__item__body--is-open')
        })
    })
    

    // Seção Personagens 

    document.querySelectorAll('.personagem').forEach(elemento => {
        const botao = elemento.querySelector('.personagem__btn');
        const modal = elemento.querySelector('.personagem__dialog');
        const closeModal = elemento.querySelector('.personagem--close');
        botao.addEventListener('click', () => {
            modal.showModal();
        })
        closeModal.addEventListener('click', () => {
            modal.close();
        })
    })
})

