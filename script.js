window.onscroll = function () { myFunction() }

let header = document.getElementById('header')
let sticky = header.offsetTop + header.offsetHeight
function myFunction () {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}

let icons = document.querySelectorAll('.social a i')
console.log(icons)

for (let icon of icons) {
  icon.addEventListener('mouseover', function (e) {
    e.target.style.color = '#0bceaf'
  })

  icon.addEventListener('mouseout', function (e) {
    e.target.style.color = '#ffffff'
  })
}
