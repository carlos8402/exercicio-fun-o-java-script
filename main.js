/* 
1- Crie uma classe para repressentar carros.
Os carros possuem uma marca ,uma cor e um gasto médio de combustivel por km rodado.
Crie um método que dado a quantidade de km e o preço do combustivel nos dê o valor gasto em reais para realizar este percuso.
*/



class Carro {
   marca;
   cor;
   fazPorLitro;
 
   constructor(marca, cor, fazPorLitro) {
       this.marca = marca;
       this.cor = cor;
       this.fazPorLitro = fazPorLitro;
 
   }
 
   calcularGastoDoPercurso(distancia, precoCombustivel) {
       return  distancia * this.fazPorLitro * precoCombustivel;
   }
 }
 const logan = new Carro('renalt','prata', 1 / 14);
 console.log(logan.calcularGastoDoPercurso(70, 5));
 
 const civic = new Carro('honda','preto', 1 / 10);
console.log(civic.calcularGastoDoPercurso(70, 5));
 
 
