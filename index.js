const questions = [
    'O que eu aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?',
]

const ask = (index = 0) =>{
    process.stdout.write(questions[index] + ' > ');
}

ask();

const respostas = [];

process.stdin.on('data', data =>{
    respostas.push(data.toString().trim() + '\n');
    if(respostas.length < questions.length){
	ask(respostas.length)
    }else{
	console.log(respostas);
	process.exit();
    }
});
