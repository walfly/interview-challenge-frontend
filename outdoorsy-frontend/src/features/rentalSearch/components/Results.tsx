import { Rental } from "@/types/rentalSearch";
import RentalItem from "./rentalItem/RentalItem";

 type ResultsProps = {
    rentals: Rental[];
 }

 export default function Results({ rentals }: ResultsProps) {
    return (
        <ul>
            {rentals.map(rental => (
                <RentalItem key={rental.id} item={rental} />
            ))}
        </ul>
    );
 }
