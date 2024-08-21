import React from "react";

interface NameFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const NameFilter: React.FC<NameFilterProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by Name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="filter-input"
    />
  );
};

export default NameFilter;
