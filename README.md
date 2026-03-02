# data-table-component

Simple React table component with sorting, searching and pagination.

## Installation

```bash
npm install data-table-component
```

(or yarn add data-table-component)

## Usage

```jsx
import React from 'react';
import { DataTable } from 'data-table-component';

const columns = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' }
];
const data = [
  { firstName: 'Alice', lastName: 'Smith' }
];

function App() {
  return (
    <DataTable data={data} columns={columns} itemsPerPage={5} />
  );
}
```

