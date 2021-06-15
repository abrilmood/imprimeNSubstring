function imprimeNSubstring(input, n) {
    var resultado = [];
    for(let x=0; x<input.length; x++){
      for(let y=0; y<input.length; y++){
        if(x!=y+1 && x<y+1){
            resultado.push(input.substring(x, y+1));
        }
      }
    }
    resultado.sort();
    var resultadoString = resultado.join('');
    var posicion = resultadoString.charAt(n-1);
    return posicion;
  }
    
   let input="dbac";
   let output = imprimeNSubstring(input, 3);
   console.log(output);
  
