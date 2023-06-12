import { Rental } from "@/types/rentalSearch";
import Image from "next/image";
import style from "./RentalItem.module.css"

type Props = {
  item: Rental;
}

export default function RentalItem({ item }: Props) {
  return (
    <li className={style.container}>
      <Image width={150} height={100} className={style.image} src={item.attributes.primary_image_url} alt={item.attributes.name} />
      <h3 className={style.name}>{item.attributes.name}</h3>
    </li>
  );
}
