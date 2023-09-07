import SearchResult from "@/components/search/searchResult";

import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import api from "@/data/api";


export default function SearchHooks(){


    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();
    const { query } = router.query;
  
    const fetchResults = async () => {
      const response = await api.get("/search", { params: { buscar: query } });
      const list = response.data;
      setSearchResults(list);
    };
  
    useEffect(() => {
      fetchResults();
    }, [query]);

    return <SearchResult searchResults={searchResults}/>



    
}