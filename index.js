var setadireita = window.document.getElementById("setadireita")
var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    leo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style = "display:flex; margin-top:55px"
}

function rolaparaesquerda() {
    leo.style = "display: flex"
    bruna.style = "display: none"
    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display :none"
}

