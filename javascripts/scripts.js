document.addEventListener('DOMContentLoaded', () => {
  showOverlay()
  showPropusk()
})

function showPropusk() {
  const block = document.querySelector('.propusk')
  const propusk = document.querySelector('.propusk-image')
  const text = document.querySelector('.propusk-text')

  block.addEventListener('click', () => {
    propusk.classList.toggle('animation')
    text.classList.toggle('animation')
  })
}

function showOverlay() {
  const btns = document.querySelectorAll('.btn')
  const overlay = document.querySelector('#overlay')
  const cross = document.querySelector('#cross')

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.classList[1]

      overlay.style.display = 'flex'
      document.querySelector(`#${type}`).style.display = 'flex'

      cross.addEventListener('click', () => {
        overlay.style.display = 'none'
        document.querySelector(`#${type}`).style.display = 'none'
      })
    })
  })
}
