import React, { useState } from "react";

interface AgeFilterProps {
  onChange: (minAge: number, maxAge: number) => void;
}

const AgeFilter: React.FC<AgeFilterProps> = ({ onChange }) => {
  const [minAge, setMinAge] = useState<number | undefined>();
  const [maxAge, setMaxAge] = useState<number | undefined>();

  const handleMinAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMinAge(isNaN(value) ? undefined : value);
    onChange(isNaN(value) ? 0 : value, maxAge || Infinity);
  };

  const handleMaxAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxAge(isNaN(value) ? undefined : value);
    onChange(minAge || 0, isNaN(value) ? Infinity : value);
  };

  return (
    <div className="age-filter">
      <input
        type="number"
        placeholder="Min Age"
        value={minAge ?? ""}
        onChange={handleMinAgeChange}
        className="filter-input"
      />
      <input
        type="number"
        placeholder="Max Age"
        value={maxAge ?? ""}
        onChange={handleMaxAgeChange}
        className="filter-input"
      />
    </div>
  );
};

export default AgeFilter;
