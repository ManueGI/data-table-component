import React from "react";
import ReactDOM from "react-dom/client";
import { DataTable } from "./lib";

// Example data to test the component
const sampleData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    startDate: "2020-01-15",
    department: "Sales",
    dateOfBirth: "1985-06-12",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    startDate: "2019-03-22",
    department: "Engineering",
    dateOfBirth: "1990-08-25",
    street: "456 Oak Ave",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    startDate: "2021-07-10",
    department: "Marketing",
    dateOfBirth: "1988-02-18",
    street: "789 Pine Rd",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Williams",
    startDate: "2018-11-05",
    department: "HR",
    dateOfBirth: "1992-04-30",
    street: "321 Elm St",
    city: "Boston",
    state: "MA",
    zipCode: "02101",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Brown",
    startDate: "2022-02-14",
    department: "Engineering",
    dateOfBirth: "1987-12-03",
    street: "654 Maple Dr",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
  },
];

const columns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "startDate", label: "Start Date" },
  { key: "department", label: "Department" },
  { key: "dateOfBirth", label: "Date of Birth" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ padding: "20px" }}>
      <h1>DataTable Component Demo</h1>
      <DataTable data={sampleData} columns={columns} itemsPerPage={5} />
    </div>
  </React.StrictMode>,
);
