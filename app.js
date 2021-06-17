const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

crearArchivo( argv.base, argv.hasta, argv.listar )
	.then( creado => console.log(`tabla-${ argv.base }.txt creado.`) )
	.catch( err => console.log(err) )
;