var listaLogin = []

listaLogin = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaLogin == null){
listaLogin = []
}
console.log(listaLogin)

function entrar (){
    var email = document.getElementById("email").value 
    var senha = document.getElementById("senha").value
    debugger
    var encontrado = false
    listaLogin.forEach ( item => {
        if (senha == item.senha && email == item.email) {
            alert (`Bem vindo ao sistema, ${item.email}`)
            encontrado = true
            location.href="catalogo.html"
        }
        
    })
    if (encontrado == false) {
        alert ('Usuario não encontrado')
    }
}