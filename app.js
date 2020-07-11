const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//Aqui se aplica destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { config } = require('yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(process.argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1] //Como se envia un vector, solo quiero tomar la posicion 2 del vector. Y en node empieza con 0. Despues 1, 2...

// crearArchivo(base).then(archivo => console.log(`Archivo crado: ${archivo}`))
//     .catch(err => console.log(err));