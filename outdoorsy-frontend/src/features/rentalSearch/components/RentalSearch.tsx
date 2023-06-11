"use client";
import SearchBar from "./SearchBar";
import useRentals from "../hooks/useRentals";
import { ChangeEvent } from "react";
import { RentalResponse } from "../api/rentals";
import Results from "./Results";

type RentalSearchProps = {
    initialData: RentalResponse;
}

export default function RentalSearch(props: RentalSearchProps) {
    const { search, setSearch, data } = useRentals(props.initialData);
    console.log({ data });
    return (<>
        <SearchBar value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
        <Results rentals={data!.data} />
    </>)
}