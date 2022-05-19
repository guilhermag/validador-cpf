const $ = (element) => document.getElementById(element);

function validarCpf(cpfDigitado) {
  if (cpfDigitado.length != 11) {
    return false;
  } else {
    let numeros = cpfDigitado.substring(0, 9);
    let digitos = cpfDigitado.substring(9);

    // Validação digito 1
    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) {
      return false;
    }

    // Validação digito 2
    soma = 0;
    numeros = cpfDigitado.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }
    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validar() {
  let cpfDigitado = $("cpf").value;

  if (validarCpf(cpfDigitado)) {
    $("success").style.display = "flex";
    $("error").style.display = "none";
  } else {
    $("success").style.display = "none";
    $("error").style.display = "flex";
  }
}
