//Union Types

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "string") return value + padding;
    else return value + padding.toString();
}

//intersetion Types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

function cust(business: BusinessPartner, contact: Contact): Customer {
    return {...business, ...contact};
}