export interface Doctor {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    company: Company;
    phone: string;
    website: string;
}

interface Address {
    city: string;
    geo: Geo;
    street: string,
    suite: string;
    zipcode: string;
}

interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

interface Geo {
    lat: string;
    lng: string;
}

export interface Task {
    
}