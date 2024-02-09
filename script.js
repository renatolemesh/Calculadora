function calcular(tipo, valor) {

    if(tipo === 'valor') {
      document.getElementById('resultado').value += valor
      //Lógica para coletar os numeros e concatenar
  }

  if(tipo === 'acao') {
    if(valor === 'C') {
      document.getElementById('resultado').value = ""
      //Lógica para limpar a tela
    }

    function obterUltimoCaracter(num) {
        return num.slice(-1);
      } //Essa função serve pra validar se o ultimo número é um operador
      
      function removerUltimoOperador(num) {
        return num.slice(0, -1);
      } //Essa função serve pra retirar o operador
      
      function adicionarOperador(num, operador) {
        return num + operador;
      } 
      
      function validarEAtualizarResultado(num1, operador) {
        if (num1 == null || num1 == undefined || num1 == '') {
          return;
        } //Essa funcao serve pra incluir o operador usado
      
        var ultimo_caracter = obterUltimoCaracter(num1);
      
        if (ultimo_caracter === '*' || ultimo_caracter === '+' || ultimo_caracter === '-' || ultimo_caracter === '/') {
          num1 = removerUltimoOperador(num1);
          document.getElementById('resultado').value = num1;
          //Esse if valida se o ultimo digito é um operador, se for, é excluido, assim adiciona o novo operador sem duplicar.
        } 
        
        if (num1.includes('*') || num1.includes('/') || num1.includes('+') || num1.includes('-')) {
            realizarCalculo();
            var num1 = document.getElementById('resultado').value
            document.getElementById('resultado').value = adicionarOperador(num1, operador)
        } else {
        document.getElementById('resultado').value = adicionarOperador(num1, operador); 
        }
      }
      
      if (valor === '/') {
        operacao = '/';
        num1 = document.getElementById('resultado').value;
        validarEAtualizarResultado(num1, '/');
         //Esse if pega o operador, e deixa a tela com o numero e o operador ao lado, pra poder adicionar o resto da operação.
      } else if (valor === '*') {
        operacao = '*';
        num1 = document.getElementById('resultado').value;
        validarEAtualizarResultado(num1, '*');
      } else if (valor === '+') {
        operacao = '+';
        num1 = document.getElementById('resultado').value;
        validarEAtualizarResultado(num1, '+');
      } else if (valor === '-') {
        operacao = '-';
        num1 = document.getElementById('resultado').value;
        validarEAtualizarResultado(num1, '-');
      }

    function validarNum2(num2) { //Para poder clicar no resultado, o num2 deve ser valido
      return num2 != null && num2 !== '' && !isNaN(num2);
    }

    if (valor === '=') {
        realizarCalculo();
      }
    
      function realizarCalculo() {
        if (document.getElementById('resultado').value=NaN) {

        } else
        console.log(num1);
        num2_string = document.getElementById('resultado').value;
      
        if (operacao === '/') {
          num2 = num2_string.substring(num2_string.indexOf("/") + 1);
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
      
          // Usar a função para validar num2
          if (validarNum2(num2)) {
            document.getElementById('resultado').value = (num1 / num2);
          } else {
            console.error('num2 é inválido');
          }
        } else if (operacao === '*') {
          num2 = num2_string.substring(num2_string.indexOf("*") + 1);
          num1 = parseFloat(num1)
          num2 = parseFloat(num2)
          document.getElementById('resultado').value = (num1 * num2)
        } else if (operacao === '+') {
          num2 = num2_string.substring(num2_string.indexOf("+") + 1);
          num1 = parseFloat(num1)
          num2 = parseFloat(num2)
          document.getElementById('resultado').value = (num1 + num2)
        } else if (operacao === '-') {
          num2 = num2_string.substring(num2_string.indexOf("-") + 1);
          num1 = parseFloat(num1)
          num2 = parseFloat(num2)
          document.getElementById('resultado').value = (num1 - num2)
        }
      
        num1 = undefined
        num2 = undefined
      }
} 
}