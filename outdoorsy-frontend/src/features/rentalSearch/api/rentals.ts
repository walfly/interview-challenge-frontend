import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants";
import { Rental } from "@/types/rentalSearch";

export type RentalResponse = {
  data: Rental[];
  meta: {
    total: number;
  }
}

export const fetchRentals = async (search: string, offset: number = DEFAULT_OFFSET, limit: number = DEFAULT_LIMIT): Promise<RentalResponse>  => {
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
