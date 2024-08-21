import React from "react";

interface Person {
  name: string;
  age: number;
  category: string;
  status: string;
}

interface PersonTableProps {
  data: Person[];
}

// Componente de tabla para mostrar la lista de personas
const PersonTable: React.FC<PersonTableProps> = ({ data }) => {
  return (
    <table className="person-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.category}</td>
            <td>{person.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonTable;
