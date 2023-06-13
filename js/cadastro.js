var listaLogin = []

listaLogin = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaLogin == null){
    listaLogin = []
}
exibirLogin()


function validarCadastro(nome, cpf, email, senha){
    if (nome != '' && cpf != '' && email != '' && senha != '') {
        return true
    } else {
        return false
    }
}

function botao1() {
    var nomeCadastro = document.getElementById("nome").value
    var cpfCadastro = document.getElementById("cpf").value
    var emailCadastro = document.getElementById("email").value
    var senhaCadastro = document.getElementById("senha").value
    
    var possoCadastrar = validarCadastro(nomeCadastro, cpfCadastro, emailCadastro, senhaCadastro)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var Cadastro = {
        nome: nomeCadastro,
        cpf: cpfCadastro,
        email: emailCadastro,
        senha: senhaCadastro
    }
    listaLogin.push(Cadastro)

    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaLogin) )

    exibirLogin()

    document.getElementById("nome").value = ''
    document.getElementById("cpf").value = ''
    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("nome").focus()
}

function exibirLogin(){
    document.getElementById('resultado').innerHTML = ''
    alert('Bem vindo ao sistema')

    
}
