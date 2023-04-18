import { Icon, IconButton, InputBase } from "@mui/material";
import { useContext, useState } from "react";
import { data } from "../data";
import { ThemeStyles } from "../App";
import { SearchOutlined } from "@mui/icons-material";
import styles from "../styles";

interface SearchProps {
  isSearch: boolean;
  search: string;
}

const Search = () => {
  const theme: any = useContext(ThemeStyles);

  const [isSearch, setIsSearch] = useState<SearchProps["isSearch"]>(false);
  const [search, setSearch] = useState<SearchProps["search"]>("");

  return (
    <div className={`${styles.flexCenter} ${theme.font} w-[100%] h-[100%] py-[0.7em] relative`}>
      <InputBase
        placeholder="Search ..."
        type="text"
        sx={{
          color: `${theme.mode === "light" ? "#0c0d0d" : "#0c0d0d"}`,
          width: "100%",
          height: "100%",
          borderRadius: "2em",
          background: "#dceaf3",
          padding: "0 1rem"
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setIsSearch(true)}
      />

      <div className={`absolute top-[0.95em] right-[1rem]`}>
        <IconButton>
          <SearchOutlined
            sx={{ color: "#17181a" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Search;
