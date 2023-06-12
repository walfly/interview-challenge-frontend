import { Rental } from "@/types/rentalSearch";
import RentalItem from "./rentalItem/RentalItem";

type ResultsProps = {
  rentals: Rental[];
}

export default function Results({ rentals }: ResultsProps) {
  const noResults = rentals.length === 0;
  console.log(rentals.length);
  return (<>
    {noResults && (<p>Uh oh! We don&apos;t have anything that matches that search</p>)}
    <ul>
      {rentals.map(rental => (
        <RentalItem key={rental.id} item={rental} />
      ))}
    </ul>
  </>);
}
