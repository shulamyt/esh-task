import React from "react";
import { useNavigate } from "react-router-dom";
import { Result, searchEntities } from "../services/api";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function HomePage({
  results,
  setResults,
}: {
  results: Result[];
  setResults: (results: Result[]) => void;
}) {
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    if (query.length > 0) {
      const searchResults = await searchEntities(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleViewAll = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        results={results.flatMap((result) => result.entities)}
      />
      <SearchResults results={results} onViewAll={handleViewAll} />
    </>
  );
}
