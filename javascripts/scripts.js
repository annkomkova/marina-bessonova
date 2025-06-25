document.addEventListener('DOMContentLoaded', () => {
  showOverlay()
  showPropusk()
  beuys1()
  showArticlesAndExhibitions()
})

function showArticlesAndExhibitions() {
  const articlesNav = document.querySelector('#articles')
  const articles = document.querySelector('.articles')
  const exhibitionsNav = document.querySelector('#exhibitions')
  const exhibitions = document.querySelector('.exhibitions')

  articlesNav.addEventListener('click', () => {
    articles.classList.remove('none')
    exhibitions.classList.add('none')
  })
  exhibitionsNav.addEventListener('click', () => {
    exhibitions.classList.remove('none')
    articles.classList.add('none')
  })
}

function beuys1() {
  const image = document.querySelector('.beuys1')
  const text = document.querySelector('.beuys1 > div')
  let clck = 1

  image.addEventListener('click', () => {
    clck++
    text.classList.toggle('none')

    if (clck % 2 == 0) {
      image.style.backgroundImage = 'none'
    } else {
      image.style.backgroundImage = 'url("images/arts/beuys1.jpg")'
    }
  })
}

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
