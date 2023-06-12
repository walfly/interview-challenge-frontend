import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/constants";
import style from "./PaginationControl.module.css"
import { MouseEvent } from "react";

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
  const onPreviousClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    prev();
  }
  const onNextClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    next();
  }
  return (<div className={style.container}>
    {currentPage > 1 && <a className={style.link} onClick={onPreviousClick}>
      prev
    </a>}
    <p>page { currentPage } of {totalPages}</p>
    {currentPage < totalPages && <a className={style.link} onClick={onNextClick}>next</a>}
  </div>)

}