import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/SearchBar/searchForm.module.css";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: { query: searchTerm },
    });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
      <button type="submit" aria-label="Search">
        <BsSearch />
      </button>
    </form>
  );
}
