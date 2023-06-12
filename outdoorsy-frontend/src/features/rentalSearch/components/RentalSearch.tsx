"use client";
import SearchBar from "./searchBar/SearchBar";
import useRentals from "../hooks/useRentals";
import { ChangeEvent } from "react";
import { RentalResponse } from "../api/rentals";
import Results from "./Results";
import PaginationControls from "./paginationControls/PaginationControls";

type RentalSearchProps = {
    initialData: RentalResponse;
}

export default function RentalSearch(props: RentalSearchProps) {
    const {
        search,
        setSearch,
        isLoading,
        data,
        offset,
    } = useRentals(props.initialData);
    return (<>
        <SearchBar value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
        {isLoading && <p>Loading...</p>}
        {(!isLoading && !!data) && (<>
            <Results rentals={data.data} />
            <PaginationControls total={data.meta.total} offset={offset} />
        </>)}
    </>)
}