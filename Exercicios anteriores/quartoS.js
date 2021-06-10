const fs = require('fs');
const data = fs.readFileSync('file.txt');
//a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());

//adicionei por conta uma segunda ação para poder entender claramente a diferença entre o síncorono e o assíncrono.

for (var i=1; i<=10; i++)
console.log("segunda parte="+i);
