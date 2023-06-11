import { Rental } from "@/types/rentalSearch";

export type RentalResponse = {
    data: Rental[];
}

export const fetchRentals = async (search: string, limit: number = 7, offset: number = 0): Promise<RentalResponse>  => {
    const params = new URLSearchParams({
        'filter[keywords]': search,
        'page[limit]': limit.toString(),
        'page[offset]': offset.toString(),
    }).toString();
    const res = await fetch(`https://search.outdoorsy.com/rentals?${params}`, {
        method: 'GET',
    });
    return res.json();
}
