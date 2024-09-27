export const tree = [
    {
        title: 'ALL',
        value: 'all',
    },
    {
        title: 'BRAND',
        value: 'brand',
        children: [
            {
                title: 'TOYOTA',
                value: 'Toyota',
            },
            {
                title: 'FORD',
                value: 'Ford',
            },
            {
                title: 'CHEVROLET',
                value: 'Chevrolet',
            },
            {
                title: 'TESLA',
                value: 'Tesla',
            },
            {
                title: 'HONDA',
                value: 'Honda',
            },
            {
                title: 'FERRARI',
                value: 'Ferrari',
            },
            {
                title: 'BMW',
                value: 'BMW',
            },
            {
                title: 'AUDI',
                value: 'Audi',
            },
            {
                title: 'MERCEDES',
                value: 'Mercedes',
            },
            {
                title: 'NISSAN',
                value: 'Nissan',
            },
            {
                title: 'LAND ROVER',
                value: 'Land Rover',
            },
            {
                title: 'JEEP',
                value: 'Jeep',
            },
            {
                title: 'KIA',
                value: 'Kia',
            },
            {
                title: 'HYUNDAI',
                value: 'Hyundai',
            },
            {
                title: 'SUBARU',
                value: 'Subaru',
            },
            {
                title: 'MAZDA',
                value: 'Mazda',
            },
            {
                title: 'VOLVO',
                value: 'Volvo',
            },
            {
                title: 'PORSCHE',
                value: 'Porsche',
            },
            {
                title: 'LEXUS',
                value: 'Lexus',
            },
            {
                title: 'JAGUAR',
                value: 'Jaguar',
            },
        ],
    },
    {
        title: 'YEAR',
        value: 'year',
        children: [
            {
                title: '2018',
                value: '2018',
            },
            {
                title: '2019',
                value: '2019',
            },
            {
                title: '2020',
                value: '2020',
            },
            {
                title: '2021',
                value: '2021',
            },
            {
                title: '2022',
                value: '2022',
            },
        ],
    },
    {
        title: 'CATEGORY',
        value: 'category',
        children: [
            {
                title: 'SPORTS',
                value: 'Sports',
            },
            {
                title: 'ELECTRIC',
                value: 'Electric',
            },
            {
                title: 'SEDAN',
                value: 'Sedan',
            },
            {
                title: 'SUV',
                value: 'SUV',
            },
        ],
    },
    {
        title: 'MODEL',
        value: 'model',
        children: [
            {
                title: 'COROLLA',
                value: 'Corolla',
            },
            {
                title: 'MUSTANG',
                value: 'Mustang',
            },
            {
                title: 'CAMARO',
                value: 'Camaro',
            },
            {
                title: 'MODEL S',
                value: 'Model S',
            },
            {
                title: 'CIVIC',
                value: 'Civic',
            },
            {
                title: 'X5',
                value: 'X5',
            },
            {
                title: 'A4',
                value: 'A4',
            },
            {
                title: 'C-CLASS',
                value: 'C-Class',
            },
            {
                title: 'ALTIMA',
                value: 'Altima',
            },
            {
                title: 'WRANGLER',
                value: 'Wrangler',
            },
            {
                title: 'SORENTO',
                value: 'Sorento',
            },
            {
                title: 'ELANTRA',
                value: 'Elantra',
            },
            {
                title: 'CX-5',
                value: 'CX-5',
            },
            {
                title: 'OUTBACK',
                value: 'Outback',
            },
            {
                title: 'XC90',
                value: 'XC90',
            },
            {
                title: '911',
                value: '911',
            },
            {
                title: 'RX',
                value: 'RX',
            },
            {
                title: 'F-Pace',
                value: 'F-Pace',
            },
            {
                title: 'DISCOVERY',
                value: 'Discovery',
            },
            {
                title: '488',
                value: '488',
            },
        ],
    },
    {
        title: 'PRICE',
        value: 'pricePerDay',
        children: [
            {
                title: 'Below 200',
                value: '200',
            },
            {
                title: 'Below 300',
                value: '300',
            },
            {
                title: 'Below 400',
                value: '400',
            },
            {
                title: 'Below 500',
                value: '500',
            },
        ],
    },
];

export function brand(value) {
    const values = value === "Toyota" || value === "Ford" || value === "Chevrolet" || value === "Tesla" || value === "Honda" || value === "BMW" || value === "Audi" || value === "Mercedes" || value === "Nissan" || value === "Jeep" || value === "Kia" || value === "Hyundai" || value === "Subaru" || value === "Mazda" || value === "Volvo" || value === "Porsche" || value === "Lexus" || value === "Jaguar" || value === "Land Rover" || value === "Ferrari";
    return values;
}

export function model(value) {
    const values = value === "Corolla" || value === "Mustang" || value === "Camaro" || value === "Model S" || value === "Civic" || value === "X5" || value === "A4" || value === "C-Class" || value === "Altima" || value === "Wrangler" || value === "Sorento" || value === "Elantra" || value === "Outback" || value === "CX-5" || value === "XC90" || value === "911" || value === "RX" || value === "F-Pace" || value === "Discovery" || value === "488";
    return values;
}

export function year(value) {
    const values = value === "2018" || value === "2019" || value === "2020" || value === "2021" || value === "2022";
    return values;
}

export function category(value) {
    const values = value === "Sports" || value === "SUV" || value === "Electric" || value === "Sedan";
    return values;
}

export function price(value) {
    const values = value;
    return values;
}
