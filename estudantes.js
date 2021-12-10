// CTD - Turma 9
//CheckPoint 3 - Programação Imperativa - Prof. Rodrigo Sarri - Aluna: Rayssa Drumond de Barros Alcantara


//importação alunos

const Alunos = require('./aluno')

//construtor para alunos

const estudantes = new Alunos();


//atribuição de dados/valores para o objeto


estudantes.construtorAlunos('Rayssa', 0, [10,9,8]);
estudantes.construtorAlunos('Gustavo', 1, [10,9,10]);
estudantes.construtorAlunos('Luciane', 5, [5,7,10]);
estudantes.construtorAlunos('Marcos', 4, [8,7,5]);

//chamando função para calcular as médias

estudantes.calcularMedia();

//chamando função para calcular faltas (individualmente)

estudantes.faltas(0);
estudantes.faltas(0);
estudantes.faltas(0);
estudantes.faltas(1);
estudantes.faltas(2);

//console.log(estudantes.listaDeEstudantes);

module.exports = estudantes.listaDeEstudantes