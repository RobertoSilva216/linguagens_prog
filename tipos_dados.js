

//TIPOS DE DADOS PRIMITIVOS
function dados_primitivos(){
    var nome="Roberto";
    var ra=59715;
    var ativo=true;
    var nulo=null;
    var indefinido=undefined;
    var symbol = Symbol("foo");

    alert("Tipo: " + typeof(nome) + " Valor: "+nome
        + "\nTipo: " + typeof(ra) + " Valor: "+ra
        + "\nTipo: " + typeof(ativo) + " Valor: "+ativo
        + "\nTipo: " + typeof(nulo) + " Valor: "+nulo
        + "\nTipo: " + typeof(indefinido) + " Valor: "+indefinido
        + "\nTipo: " + typeof(symbol)
    );
}
//TIPOS DE DADOS PRIMITIVOS


// ENUMERAÇÃO (COM OBJETOS)
function enumeracao(){
    const estacoes = {
        VERAO: "verao",
        INVERNO: "inverno",
        PRIMAVERA: "primavera",
        OUTONO: "outono",
    }

    let estacao = estacoes.PRIMAVERA;

    if (!estacao) {
        alert("Estação não definida!");
        throw new Error("Estação não definida!")
    }

    switch (estacao) {
        case estacoes.VERAO:
            //funcoes
            break;
        case estacoes.INVERNO:
            //funcoes
            break;
        case estacoes.PRIMAVERA:
            //funcoes
            break;
        case estacoes.OUTONO:
            //funcoes
            break;
    }
    alert(estacao);
}
// ENUMERAÇÃO (COM OBJETOS)

//MATRIZ
function matriz(){
    var matriz= [[1,2,3],
                [4,5,6],
                [7,8,9]];

    alert("Conteúdo do elemento linha 1 e coluna 1: " + matriz[1][1]); //NUMERO 5
    var txt="";
    for(let lin=0 ; lin<3 ; lin++){
        for(let col=0; col<3 ; col++){
            txt+=matriz[lin][col] + "  ";
        }
        txt+="\n";
    }
    alert(txt);
}
//MATRIZ


//REGISTROS

function Aluno(nome, idade, ra, media) {
    this.nome = nome;
    this.idade = idade;
    this.ra = ra;
    this.media = media;
}
function registros(){
    var aluno = new Aluno('Roberto',18, 59715, 9.5);
    dados=
        "Nome: " + aluno.nome +
        "\nIdade: " + aluno.idade + 
        "\nRA: " + aluno.ra + 
        "\nMédia: " + aluno.media
    ;
    alert(dados);
}
//REGISTROS




