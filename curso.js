// CTD - Turma 9
//CheckPoint 3 - Programação Imperativa - Prof. Rodrigo Sarri - Aluna: Rayssa Drumond de Barros Alcantara



//Passo 3 - Objeto curso, lista de estudantes

const alunos = require('./aluno');
const estudantes = require('./estudantes'); //Passo 7 - Importação da lista

//Passo 4 - Método para adicionar alunos

const curso = {
    nomeDoCurso: 'Sociologia para Desenvolvedores',
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaDeEstudantes: [estudantes],
        addNovosAlunos: function(nome, quantidadeFaltas, notas) {
        this.listaDeEstudantes.push(new alunos(nome, quantidadeFaltas, notas));
    }, 
 
    //Passo 5 - Método para estabelecer aprovações e reprovações

    resultado: function(estudante) {
    
        const resultadoFinal = [];
        
            if ((estudante.media >= this.notaDeAprovacao && estudante.quantidadeFaltas < this.faltasMaximas) ||
            (estudante.media >= this.notaDeAprovacao * 1.1 && estudante.quantidadeFaltas === this.faltasMaximas)) {
                 resultadoFinal.push(`${estudante.nome} está APROVADO?`, true);
            }
            if ((estudante.media < this.notaDeAprovacao) || (estudante.quantidadeFaltas > this.faltasMaximas)) {
                resultadoFinal.push(`${estudante.nome} está APROVADO`, false);
            };
           
            console.log(resultadoFinal);
    },

    //Passo 6 - Percorrendo a lista para definir os aprovados e reprovados

    alunosAprovados: function() {
       let todos = [];

       this.listaDeEstudantes.forEach(estudante => {
        for( let i = 0; i < estudante.length; i++ ) {
            curso.resultado(estudante[i]);                    
        }
       });

      return todos;
    } 
        
};

curso.addNovosAlunos('Luana', 4, [9,7,8]);

curso.alunosAprovados();
