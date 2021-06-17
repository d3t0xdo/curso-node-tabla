const fs = require('fs');

const crearArchivo = async ( base, hasta, listar ) => {
		
	let salida = '';

	for (let i = 0; i <= hasta; i++) {
		
		salida += `${ base } x ${ i } = ${ base * i }\n`;
		
	}
	
	if (listar) {
		console.log('====================');
		console.log(`TABLA DEL ${ base }`);
		console.log('====================');
		console.log(salida)
	}

	fs.writeFileSync(`././salida/tabla-${ base }.txt`, salida );

	return `tabla-${ base }.txt creado.`

}

module.exports = {
	crearArchivo
}