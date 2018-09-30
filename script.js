let nome= prompt ("Bem vindo ao Muquiranas qual é o seu nome?");
let idade= prompt("Qual a sua idade?");
let renda= prompt("Quanto é a sua renda mensal?");

if((idade>=18 && idade<=80) && (renda>=1000)){
    alert("Parabéns " +nome+ ", você está liberado para investir!");
}
else{
    alert("Sua renda mendsal está abaixo da média ou sua idade não foi aprovada");
}