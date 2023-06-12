import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants";

type PaginationProps = {
  offset?: number,
  limit?: number,
  total: number,
  next: () => void,
  prev: () => void,
}

export default function({offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT, total, prev, next}: PaginationProps) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  return (<div>
    {currentPage > 1 && <button onClick={prev}>prev</button>}
    <p>page { currentPage } of {totalPages}</p>
    {currentPage < totalPages && <button onClick={next}>next</button>}
  </div>)

}