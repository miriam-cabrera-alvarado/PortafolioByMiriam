function problema1(){

    var p1_input = document.querySelector('#p1-input').value;

    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array
    
    var p1_array = p1_input.split(' ').reverse();
    
      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var p1_res = '';
    
    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    
    document.querySelector('#p1-output').textContent = p1_res;
    
    }
    
    
    
    
    function problema3(){
        var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var p3_input = document.querySelector('#p3-input').value;
    
        // Validar que la entrada solo contenga letras mayúsculas y comas
        if (!/^[A-Z,]+$/.test(p3_input)) {
            document.querySelector('#p3-output').textContent = 'Error: Solo se permiten letras mayúsculas y comas.';
            return; // Detener la ejecución si la entrada es inválida
        }
    
        var p3_palabras = p3_input.split(',');
    
        p3_palabras = p3_palabras.map(function (palabra){
            return palabra.replace(/\s/g, '').toUpperCase();
        });
    
        var p3_res = '';
    
        p3_palabras.forEach(function(palabra, i){
            var letras_unicas = [];
            var palabra_array = palabra.split('');
    
            alfabeto.forEach(function(letra, j){
                palabra_array.forEach(function(letras_palabras, k){
                    if(letras_palabras == letra){
                        if(letras_unicas.indexOf(letra) < 0){
                            letras_unicas.push(letra);
                        }
                    }
                });
            });
    
            p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
        });
    
        document.querySelector('#p3-output').textContent = p3_res;
    }