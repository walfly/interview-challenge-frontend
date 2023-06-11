import { fetchRentals } from '@/features/rentalSearch/api/rentals'
import styles from './page.module.css'
import { useSearchParams } from 'next/navigation';
import RentalSearch from '@/features/rentalSearch/components/RentalSearch';

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // get search term from query string or default it to empty string
  // We assume on the first search param matters and don't support multiple searches
  const search: string = Array.isArray(searchParams.search) ? searchParams.search[0] : (searchParams.search || '');
  const initialData = await fetchRentals(search);
  return (
    <main className={styles.main}>
      <RentalSearch initialData={initialData} />
    </main>
  )
}
