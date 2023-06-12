import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants";
import style from "./PaginationControl.module.css"
import { MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type PaginationProps = {
  offset?: number,
  limit?: number,
  total: number,
}

export default function({offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT, total}: PaginationProps) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  const searchParams = useSearchParams();
  const prevSearchParams = new URLSearchParams(searchParams.toString());
  prevSearchParams.set("offset", (offset - limit).toString());
  const nextSearchParams = new URLSearchParams(searchParams.toString());
  nextSearchParams.set("offset", (offset + limit).toString());
  

  return (<div className={style.container}>
    {currentPage > 1 && (
      <Link
        href={'/?' + prevSearchParams.toString()}
        className={style.link}
      >
        prev
      </Link>
    )}
    <p>page { currentPage } of {totalPages}</p>
    {currentPage < totalPages && (
      <Link
        href={'/?' + nextSearchParams.toString()}
        className={style.link}
      >
        next
      </Link>
    )}
  </div>)

}