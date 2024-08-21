import { useEffect, useState } from "react";

import { NameFilter, CategoryFilter, StatusFilter , AgeFilter} from "../components";

interface Person {
  name: string;
  age: number;
  category: string;
  status: string;
}

interface FilterProps {
  categories: string[];
  statuses: string[];
}

const initialValue = {
  name: "",
  category: "",
  status: "",
  minAge: 0,
  maxAge: Infinity,
};

export function withFilter<T extends Person>(Component: React.ComponentType<{ data: T[] }>) {
  return ({ data, categories, statuses }: { data: T[] } & FilterProps) => {
    const [filteredData, setFilteredData] = useState<T[]>(data);
    const [filters, setFilters] = useState(initialValue);

    const handleFilterChange = (key: keyof typeof filters,value: string | number) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleClearFilters = () => {
      setFilters(initialValue);
      setFilteredData(data);
    };

    const filterData = () => {
      let updatedData = data;

      if (filters.name) {
        updatedData = updatedData.filter((person) =>
          person.name.toLowerCase().includes(filters.name.toLowerCase())
        );
      }

      if (filters.category) {
        updatedData = updatedData.filter(
          (person) => person.category === filters.category
        );
      }

      if (filters.status) {
        updatedData = updatedData.filter(
          (person) => person.status === filters.status
        );
      }

      if (filters.minAge || filters.maxAge !== Infinity) {
        updatedData = updatedData.filter(
          (person) =>
            person.age >= filters.minAge && person.age <= filters.maxAge
        );
      }
      setFilteredData(updatedData);
    };

    useEffect(() => {
      filterData();
    }, [filters]);

    return (
      <div>
        <div className="filter-container">
          <NameFilter
            value={filters.name}
            onChange={(value) => handleFilterChange("name", value)}
          />
          <CategoryFilter
            categories={categories}
            value={filters.category}
            onChange={(value) => handleFilterChange("category", value)}
          />
          <StatusFilter
            statuses={statuses}
            value={filters.status}
            onChange={(value) => handleFilterChange("status", value)}
          />
          <AgeFilter
            onChange={(minAge, maxAge) => {
              handleFilterChange("minAge", minAge);
              handleFilterChange("maxAge", maxAge);
            }}
          />
          <button onClick={handleClearFilters} className="clear-button">
            Clear Filters
          </button>
        </div>
        <Component data={filteredData} />
      </div>
    );
  };
}
