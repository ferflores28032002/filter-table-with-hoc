import React from "react";

interface StatusFilterProps {
  statuses: string[];
  value: string;
  onChange: (value: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = (props) => {
  const { statuses, value, onChange } = props;

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="filter-select"
    >
      <option value="">All Statuses</option>
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
