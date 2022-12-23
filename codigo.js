import {transfers}from './data';
import {
    getStatus,
    getTranferByEmailAndLicensePlate,
    emailValidation,
    statusLicensePlateValidation,
    emptyDataValidation,
    licensePlateFormatvalidation
} 
    from './tools';

/**
 * Crear la tranferencia
 * @param {string} licensePlate 
 * @param {string} email 
 * @returns Mensaje
 */
const createTransfers = (licensePlate,email) => {
    // validaciones
    // Patente - Requerido
    if(emptyDataValidation(licensePlate)) return  `el Campo patente es requerido`
    if(statusLicensePlateValidation(licensePlate)) return `transferencia con el numero ${licensePlate} ya fue PAGADA`
    if(!licensePlateFormatvalidation(licensePlate)) return 'patente con formato incorrecto'
    // Correo - Requerido
    if(emptyDataValidation(email)) return  `el Campo email es requerido`
    if(emailValidation(email)) return  `Formato de email incorrecto`
    if(getTranferByEmailAndLicensePlate(email,licensePlate).length > 0 ) return 'ya existe una tranferencia creada consulte su estado.'

    // Crear la trenaferencia
    id = transfers.length
    let nuevaTransf = {'id':id,'licensePlate':licensePlate,'email':email,'status':getStatus(1)}
    transfers.push(nuevaTransf)
    return`creado exitosamente ${ nuevaTransf }`
}
/**
 * consultar de tranferencia por correo y patente
 * @param {string} email 
 * @returns 
 */
const getTranferByEmail = (email) =>  {
    if(emptyDataValidation(email)) return  `el Campo email es requerido`
    if(emailValidation(email)) return  `Formato de email incorrecto`
    return transfers.filter(t=> t.email == email) 
}

/**
 * Funcion de pagar la transferencia
 * @param {string} email 
 * @param {String} licensePlate 
 */
const payTranfers = (email,licensePlate) =>{
    if(licensePlateFormatvalidation(licensePlate)){
        let transfUsuario = getTranferByEmailAndLicensePlate(email,licensePlate)
        transfUsuario[0].status = getStatus(2)
        
        transfers.forEach(t=> {
            if(t.licensePlate === transfUsuario[0].licensePlate && t.email !== transfUsuario[0].email ) t.status = getStatus(3);
        })
        console.log(`El pago fue realizado con exito.!!`)
    }
}


