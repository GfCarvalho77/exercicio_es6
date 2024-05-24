const relacaoDeAlunos = [
    {nome: 'Guilherme', nota: 7.5},
    {nome: 'Silvana', nota: 5.7},
    {nome: 'Antônio', nota: 8.0},
    {nome: 'Carlos', nota: 4.5},
    {nome: 'José', nota: 6.0},
    {nome:'Anelise', nota: 5.0}
]

function filtrarAlunosAprovados(relacaoDeAlunos) {
    return relacaoDeAlunos.filter(aluno => aluno.nota >=6);
}

const alunosAprovados = filtrarAlunosAprovados(relacaoDeAlunos);

console.log(alunosAprovados)