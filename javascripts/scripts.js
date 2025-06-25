document.addEventListener('DOMContentLoaded', () => {
  showOverlay()
  showPropusk()
  beuys1()
  showArticlesAndExhibitions()
  showOtherImage()
  mondrianScale()
})

function mondrianScale() {
  const images = document.querySelectorAll('#mondrian img')
  images.forEach((img) => {
    img.addEventListener('click', () => {
      img.classList.toggle('active')
    })
  })
}

function showOtherImage() {
  const images = document.querySelectorAll('.ch-b-img')
  images.forEach((img) => {
    const className = img.classList[1]
    img.addEventListener('mouseover', () => {
      document.querySelector(`.${className} + img`).classList.add('visible')
    })

    document
      .querySelector(`.${className} + img`)
      .addEventListener('mouseover', () => {
        document.querySelector(`.${className} + img`).classList.add('visible')
      })

    document
      .querySelector(`.${className} + img`)
      .addEventListener('mouseout', () => {
        document
          .querySelector(`.${className} + img`)
          .classList.remove('visible')
      })

    img.addEventListener('mouseout', () => {
      document.querySelector(`.${className} + img`).classList.remove('visible')
    })
  })
}

function showArticlesAndExhibitions() {
  const articlesNav = document.querySelector('#articles')
  const articles = document.querySelector('.articles')
  const exhibitionsNav = document.querySelector('#exhibitions')
  const exhibitions = document.querySelector('.exhibitions')

  articlesNav.addEventListener('click', () => {
    articles.classList.remove('none')
    exhibitions.classList.add('none')
    exhibitionsNav.classList.add('visible')
    articlesNav.classList.remove('visible')
  })
  exhibitionsNav.addEventListener('click', () => {
    exhibitions.classList.remove('none')
    articles.classList.add('none')
    exhibitionsNav.classList.remove('visible')
    articlesNav.classList.add('visible')
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
      image.style.padding = '2vw 0'
    } else {
      image.style.backgroundImage = 'url("images/arts/beuys1.jpg")'
      image.style.padding = '25vw 0'
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
