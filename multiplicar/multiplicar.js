//requireds
const colors = require('colors/safe');
const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    console.log(colors.green('=================='));
    console.log(colors.green(`=== Tabla de ${base} ===`));
    console.log(colors.green('=================='));


    for (i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor introdujcido "${base}" no es un numero.`)
                return;
            }

            let data = '';

            for (i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            };

            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(colors.green(`tabla-${base}-al-${limite}.txt`));
            });

        });
    }
    //Para trabajar funciones de forma global
module.exports = {
    crearArchivo,
    listarTabla
};