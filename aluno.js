// CTD - Turma 9
//CheckPoint 3 - Programação Imperativa - Prof. Rodrigo Sarri - Aluna: Rayssa Drumond de Barros Alcantara

//Passo 1 - Objeto aluno, construtor e importação

class Alunos {
    listaDeEstudantes = [];
    nome = '';
    quantidadeFaltas = 0;
    notas = 0;
    media = 0;

    constructor(nome, quantidadeFaltas, notas){
        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.notas = notas
    }

    construtorAlunos(nome, quantidadeFaltas, notas){
        this.listaDeEstudantes.push({
            nome: nome,
            quantidadeFaltas: quantidadeFaltas,
            notas: notas,
            media: 0,
        });
    }
    
    //Passo 2: Médias e Faltas

    calcularMedia() {
        let total;
        this.listaDeEstudantes.forEach(aluno => {
            total = 0;

            aluno.notas.forEach(notas => {
                total += notas;
            });

            aluno.media = total/aluno.notas.length;
        });
    }
    
    faltas(indice) {
        this.listaDeEstudantes[indice].quantidadeFaltas++;
    }

};


module.exports = Alunos