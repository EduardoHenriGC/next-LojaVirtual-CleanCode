import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  return <div>Query: {query}</div>;
};

export default Search;
