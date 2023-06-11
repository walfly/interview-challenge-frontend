import { Rental } from "@/types/rentalSearch";

 type ResultsProps = {
    rentals: Rental[];
 }

 export default function Results({ rentals }: ResultsProps) {
    return (
        <div>
            {rentals.map(rental => (
                <p key={rental.id}>{rental.attributes.name}</p>
            ))}
        </div>
    );
 }
 