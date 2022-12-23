const {transfers,statuses} = require( "./data");

const emailValidation =  (email)=> {
    let re = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
    return re.test(email)
}

const licensePlateFormatvalidation = (licensePlate) => {
    let reg = new RegExp('[a-z,A-Z]{2,4}[0-9]{2,4}')
    return reg.test(licensePlate)
}
// validaciones
const emptyDataValidation = (valor)=>{
    if(valor == null || valor.length == 0 || /^\s+$/.test(valor)) return true
    return false    
}
const statusLicensePlateValidation = (licensePlate) => {
    let transf = transfers.filter( t=> t.licensePlate == licensePlate && t.status == 'PAGADA')
    if(transf.length) return true
    return false
}
const getTranferByEmailAndLicensePlate = (email,licensePlate) =>  !licensePlate ?  transfers.filter(t=> t.email == email) : transferencia.filter(t=> t.email === email && t.licensePlate === licensePlate)

const getStatus = (id) => {
 let status  =   statuses.find(s=> s.id === id )
 let resp = status ? status.name : 'Status desconocida'
 return resp
}

module.exports = {
    emailValidation,
    licensePlateFormatvalidation,
    emptyDataValidation,
    getStatus,
    getTranferByEmailAndLicensePlate,statusLicensePlateValidation}