export type RentalAttributes = {
    name: string;
    primary_image_url: string;
}

export type Rental = {
    id: string;
    attributes: RentalAttributes;
}
