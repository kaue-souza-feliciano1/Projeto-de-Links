function toggleMode(){
  const html = document.documentElement
  var nome = "@kako.xn"
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')){
    img.setAttribute('src',"./assets/avatar-kaue.png")
    document.querySelector('#profile p').innerHTML = nome
  }else{
    img.setAttribute('src','./assets/avatar-kaue.png')
    document.querySelector("#profile p").innerHTML = nome
  }
}
