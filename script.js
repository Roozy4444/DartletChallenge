const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const tiles = document.querySelectorAll('div')
tiles.forEach(tile => {
  tile.addEventListener('click', e => {
    lightbox.classList.add('active')
    const div = document.createElement('img')
    div.src = 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/170835240_2815451785436261_2768474589637533676_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=rvuu8v-IIm4AX8UpOQj&_nc_ht=scontent-bos3-1.xx&oh=fd1fffe36f2d0b53fc1d817f315597fc&oe=6098EB0D'
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    } 
    lightbox.appendChild(div)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})