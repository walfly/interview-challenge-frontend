import { ChangeEvent, FC } from "react";
import styles from "./SearchBarStyle.module.css"

type SearchBarProps = {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
};

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
    return (<>
        <input
            className={styles.input}
            defaultValue={value}
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="Search"
        />
    </>);
}

export default SearchBar;