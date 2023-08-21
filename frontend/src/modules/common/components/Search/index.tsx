import Search from "antd/es/input/Search";
import { FC } from "react";
import styles from "./index.module.css"

type Props = {
  onSearch: (value: string) => void;
  placeholder: string;
  searchValue: string;
  onChange: any
}

const DefaultSearch: FC<Props> = ({ onSearch, placeholder, searchValue, onChange }) => {
  return (
    <div className={`${styles.searchContainer} mb`}>
      <Search
        value={searchValue}
        onChange={onChange}
        placeholder={placeholder}
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
  </div>
  )
};

export default DefaultSearch;
