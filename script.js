function validateCpf(cpf) {
  if( (cpf.length != 11) || (cpf % 11111111111 == 0) ){
    return false;
  }else{
    let numbers = cpf.substring(0,9);
    let digits = cpf.substring(9);

    let soma = 0;
    for(let i = 10; i > 1; i--){
      soma += numbers.charAt(10 - i) * i;
    }
    let result = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    // Validation of first digit
    if(result != digits.charAt(0)){
      return false;
    }

    numbers = cpf.substring(0,10);
    soma = 0;
    for(let k = 11; k > 1; k--) {
      soma += numbers.charAt(11 - k) * k;
    } 
    result = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    // Validation of second digit
    if(result != digits.charAt(1)) {
      return false;
    }
    return true;
  }
}

function validator() {
  let alerts = document.querySelectorAll('.alert');
  alerts.forEach((alert) => {
    alert.style.display = 'none';
  });
  let inputCpf = document.getElementById('cpf');
  let resultValidation = validateCpf(inputCpf.value);
  let feedbackCpf = document.getElementById('feedbackCpf');

  if(resultValidation) {
    document.getElementById('success').style.display = 'block'
    feedbackCpf.textContent = 'CPF válido.';
    feedbackCpf.classList.remove('text-danger')
    feedbackCpf.classList.add('text-success');
    inputCpf.classList.remove('danger')
    inputCpf.classList.add('success');
  } 
  else{
    document.getElementById('error').style.display = 'block';
    feedbackCpf.textContent = 'CPF inválido.';
    feedbackCpf.classList.remove('text-success');
    feedbackCpf.classList.add('text-danger');
    inputCpf.classList.remove('success')
    inputCpf.classList.add('danger');
  }
}

const btnValidatorCpf = document.getElementById('btnValidatorCpf');

btnValidatorCpf.addEventListener('click', (event) => {
  event.preventDefault();
  validator();
});

const array = [1,2,3,4,5,6,7,8,9,73]; 

function verificaPrimo(n) { for (let i = 2; i < n; i++) if (n % i == 0) return false; return true; }

for(let i=0;i<array.length;i++) {
  if(verificaPrimo(array[i])){
    console.log(array[i] + ' é primo');
  }
}

let numero = 1; 
let soma = 0;

while (numero < 5) { 
  soma = soma + numero 
  numero = numero + 1
}
console.log(soma)