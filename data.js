// Lista de estados posibles para una transferencia.
const statuses = [
    {
        id: 1,
        name: 'CREADA'
    },
    {
        id: 2,
        name: 'PAGADA'
    },
    {
        id: 3,
        name: 'ABORTADA'
    },
    {
        id: 4,
        name: 'FINALIZADA'
    }
];

// Lista de transferencias inicial
const transfers = [
    {
        id: 1,
        licensePlate: 'LFTS34',
        email: 'usuario1@autored.cl',
        status: 'CREADA',
    },
    {
        id: 2,
        licensePlate: 'LFTS35',
        email: 'usuario1@autored.cl',
        status: 'ABORTADA',
    },
    {
        id: 3,
        licensePlate: 'BDLS99',
        email: 'usuario3@autored.cl',
        status: 'CREADA',
    },
    {
        id: 4,
        licensePlate: 'LFTS34',
        email: 'usuario4@autored.cl',
        status: 'CREADA',
    },
    {
        id: 5,
        licensePlate: 'BDLS99',
        email: 'usuario5@autored.cl',
        status: 'FINALIZADA',
    }
];

module.exports = {
    statuses,
    transfers
}