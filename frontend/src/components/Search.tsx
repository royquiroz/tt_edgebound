import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface IPSearchBar {
  setSearch: (param: string | number) => void;
}

function SearchBar({ setSearch }: IPSearchBar) {
  const [value, setValue] = useState("");

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        id="searchBar"
        placeholder="Search your favorite pokemon for id or name"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => value !== "" && setSearch(value)}
      >
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
