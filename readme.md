1 - nomes estranhos
  dist, ds, calc, moveArray, mov, result
  renomear variáveis
  renomear métodos
  renomear arquivos / pastas

2 - números mágicos
  3.90, 2,,90, 2.1, 0, 10, -1,-2, 22, 6
  extrair constantes
  extrair variáveis explicativas

3 - comentários - (é uma espécie de compensação que existe, pra tentar trazer contexto pra algo que vc não conseguiu fazer com o próprio código)
  extrair método ou variável explicativa

5 - linhas em branco dentro de método
6 - condições confusas
  remover condições aninhadas por cláusulas guarda
  consolidar condições
  introduzir ternários

7 Falta de tratamento por exception
  substituir codigo de erro por exception

8 - Método longo
9 - "Classe grande"
10 - quebrando o OCP (Open/Closed Principle) - continue no for
11 - inveja de dados
  mover métodos e ocultar delegações


anotations
2 possibilidades receber segment ou distance e date
  melhor opção => receber distance e date porque quanto mais eu omitir de implementação é melhor, se eu exponho que vou receber um segment o cliente da minha classe Ride sabe da existencia de segment, quando eu recebo distance e date eu restrinjo o uso de segment pra dentro dessa classe

na Classe ride se observar os métodos isOvernight, isSunday e os demais, estão sempre usando segment, isso resulta em uma inveja de dados

chain of responsibility
