



document.querySelector("#botaoEnviar").addEventListener("click", validarFormulario)

function validarFormulario() {

    if (
        document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" && 
        document.getElementById("telefone").valeu != ""
    ) {
        var nome= document.getElementById("nome")
        var email= document.getElementById("email")
        var telefone= document.getElementById("telefone")

        alert("Prontinho! Você receberá as novidades.")
    } else {



        alert("Por favor, preencha os campos nome, email e telefone!")
    }
    
}

