import { useQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';
import { RentalResponse, fetchRentals } from '../api/rentals';
import { useRouter, useSearchParams } from 'next/navigation';

export default function useRentals(initialData: RentalResponse) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const setSearch = useDebouncedCallback((value) => {
        const query = new URLSearchParams({
            'search': value,
        });
        router.replace('/?' + query.toString());
    }, 1500);

    const search = searchParams.get('search') || '';

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching
    } = useQuery(['rentals', search], () => fetchRentals(search), { initialData });

    return {
        isLoading,
        isError,
        error,
        isFetching,
        data,
        setSearch,
        search,
    }
}