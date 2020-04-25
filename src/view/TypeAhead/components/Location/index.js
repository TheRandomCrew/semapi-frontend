import React, { useState, useCallback } from "react";

import { useLocations } from "../../hooks/locations";
import { Container, Input, Options, Option } from "./styles";

const Location = ({ value, onChange, placeholder }) => {
  const [searchString, setSearchString] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const { locations, isLoading } = useLocations(searchString);

  const handleInputChange = useCallback(
    e => {
      if (!(value.name && e.target.value.length < value.name.length)) {
        // For Clearing Selected Input
        setSearchString(e.target.value);
      }
      onChange({});
    },
    [value]
  );

  return (
    <Container>
      <Input
        value={(value || {}).name || searchString}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 200)}
        placeholder={placeholder}
      />
      {isLoading && <span>Loading...</span>}
      {showOptions && (
        <Options>
          {locations.map((item, id) => (
            <Option key={id} onClick={() => onChange(item)}>
              {item.name}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Location;
