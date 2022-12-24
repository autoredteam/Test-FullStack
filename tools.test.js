const { getStatus,
    licensePlateFormatvalidation,
    statusLicensePlateValidation,
    emailValidation
} = require('./tools');

describe('Solicita el estado',()=>{
    test('regresa el estado solicitado atravez del ID',()=>{
        expect(getStatus(1)).toBe('CREADA')
    });
    test('ingresa id incorrecto enviar un mensaje de infomacion',()=>{
        expect(getStatus(8)).toBe('Status desconocida')
    });
})
describe('LicensePlate prueba',()=>{
    test('Validar la patente tengo el formato correcto',()=>{
        expect(licensePlateFormatvalidation('LFTS34')).toBeTruthy()
    });
    test('verificar el estado de tranferencia por patente no este pagada',()=>{
        expect( statusLicensePlateValidation('LFTS34')).toBe(false)
    });
})

describe('Validaciones',()=>{
    test('validacion del formato de email',()=>{
        expect(emailValidation('admin@admin.com')).toBeTruthy()
    })
})