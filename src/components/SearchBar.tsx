import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { Displayable } from "../models/interfaces/Displayable";

export default function SearchBar({
  onSearch,
  results,
}: {
  onSearch: (query: string) => void;
  results: Displayable[];
}) {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setOptions([]);
      return;
    }

    if (!results) {
      return;
    }

    const filteredOptions: string[] = results
      .filter((item) =>
        item.displayName.toLowerCase().includes(query.toLowerCase())
      )
      .map((item) => item.displayName);

    setOptions(filteredOptions);
  }, [query, results]);

  const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Star Wars"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
