// Função que valida os campos nome e emal
function validarNome() {
  var nome = document.getElementById("uNome").value;
  var email = document.getElementById("uEmail").value;
  console.log(nome, email);
  validarEmail(email);
}

function validarEmail (emailCapturadoDoFormulario) {
  let validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailCapturadoDoFormulario.match(validarRegExNoEmail)) {
    console.log("RegEx válido!");
    document.getElementById("uEmail").style.backgroundColor = "white";
    document.getElementById("uEmail").style.color = "black";
    document.getElementById("aviso-erro").style.display = "none";
    return true;
  } else {
    console.log("RegEx Inválido");
    document.getElementById("uEmail").style.backgroundColor = "red";
    document.getElementById("uEmail").style.color = "white";
    document.getElementById("aviso-erro").style.display = "block";
    return false;
  }
}