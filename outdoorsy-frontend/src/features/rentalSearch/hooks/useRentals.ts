import { useQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';
import { RentalResponse, fetchRentals } from '../api/rentals';
import { useRouter, useSearchParams } from 'next/navigation';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants';
import resolveQueryParamToNumberOrUndefined from '@/util/resolveQueryParamToNumberOrUndefined';
import { useCallback } from 'react';

export default function useRentals(initialData: RentalResponse) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const setSearch = useDebouncedCallback((value) => {
        const query = new URLSearchParams({
            'search': value,
        });
        router.replace('/?' + query.toString());
    }, 300);

    const search = searchParams.get('search') || '';
    const offset = resolveQueryParamToNumberOrUndefined(searchParams.get('offset'));

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching
    } = useQuery(['rentals', search, offset], () => fetchRentals(search, offset), { initialData });

    const goToNextPage = useCallback(() => {
        const newOffset = (offset || DEFAULT_OFFSET) + DEFAULT_LIMIT;
        const query = new URLSearchParams({
            'offset': newOffset.toString(),
            'search': search,
        });
        router.replace('/?' + query.toString());
    }, [offset, search]);

    const goToPrevPage = useCallback(() => {
        const newOffset = (offset || DEFAULT_OFFSET) - DEFAULT_LIMIT;
        const query = new URLSearchParams({
            'offset': newOffset.toString(),
            'search': search,
        });
        router.replace('/?' + query.toString());
    }, [offset, search]);

    return {
        isLoading,
        isError,
        error,
        isFetching,
        data,
        setSearch,
        search,
        offset,
        goToNextPage,
        goToPrevPage,
    }
}