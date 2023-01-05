
class Register {
    constructor(id,email,password) {
        this.id = id
        this.email = email;
        this.password = password;
    }
}

function registrar(){
    const inputUser = document.querySelector(".user table td input").value
    const inputPass = document.querySelector(".password table td input").value
    const inputEmail = document.querySelector(".email table td input").value
    const inputRepeatPass = document.querySelector(".repeatPassword table td input").value
    let newUser = new Register(inputUser,inputEmail,inputPass)
   
    if (inputPass !== inputRepeatPass ){
       
        alert("Senhas diferentes por favor reveja os itens abaixo")
       
    }else if (inputPass == "" && inputRepeatPass == ""){
        alert("Campos de senhas estão em branco") 
    }else if (inputUser === "" || inputEmail === ""){
        alert("Usuario ou email em branco rever os itens abaixo")
    }else {
        console.log(newUser)
    }
}
