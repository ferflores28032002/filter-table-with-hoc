import React from "react";

import { withFilter } from "./hoc/withFilter";

import PersonTable from "./components/PersonTable";

// Datos de ejemplo para la tabla
const data = [
  { name: "John Doe", age: 28, category: "Category1", status: "Active" },
  { name: "Jane Smith", age: 34, category: "Category2", status: "Inactive" },
  { name: "Alice Johnson", age: 22, category: "Category3", status: "Active" },
  { name: "Michael Brown", age: 45, category: "Category1", status: "Pending" },
  { name: "Emily Davis", age: 30, category: "Category2", status: "Active" },
  { name: "William Wilson", age: 55, category: "Category3", status: "Inactive" },
  { name: "Olivia Miller", age: 27, category: "Category1", status: "Active" },
  { name: "James Taylor", age: 38, category: "Category2", status: "Pending" },
  { name: "Sophia Anderson", age: 24, category: "Category3", status: "Inactive" },
  { name: "Daniel Thomas", age: 42, category: "Category1", status: "Active" },
  { name: "Isabella Jackson", age: 33, category: "Category2", status: "Inactive" },
  { name: "David White", age: 29, category: "Category3", status: "Pending" },
  { name: "Mia Harris", age: 36, category: "Category1", status: "Active" },
  { name: "Christopher Martin", age: 48, category: "Category2", status: "Inactive" },
  { name: "Charlotte Garcia", age: 26, category: "Category3", status: "Active" },
];

// Listas de categorías y estados para los filtros
const categories = ["Category1", "Category2", "Category3"];
const statuses = ["Active", "Inactive", "Pending"];

// Creando una versión filtrable de la tabla de personas
const FilterablePersonTable = withFilter(PersonTable);

const App: React.FC = () => {
  return (
    <FilterablePersonTable
      data={data}
      categories={categories}
      statuses={statuses}
    />
  );
};

export default App;
