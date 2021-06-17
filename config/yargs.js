const argv = require('yargs')
	.options({
		'b': {
			alias: 'base',
			default: 5,
			describe: 'Base a multiplicar',
			type: 'number'
		},
		'h': {
			alias: 'hasta',
			default: 12,
			describe: 'Limite de la tabla de multiplicar',
			type: 'number'
		},
		'l': {
			alias: 'listar',
			default: false,
			describe: 'Listar la tabla de multiplicacion',
			type: 'boolean'	
		}

	})
	.check( (argv, options) => {
		
		if ( isNaN(argv.base) ) { 
			throw 'la base tiene que ser un número'
		} 
		
		if ( isNaN(argv.hasta) ) {
			throw 'El limite tiene que ser un numero'
		}

		return true;

	})
	.argv
;

module.exports = {
	argv
}