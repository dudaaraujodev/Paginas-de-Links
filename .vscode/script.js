function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // tem que pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./asserts/Avatar.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./asserts/Avatar.png")
  }
  // ou
}
