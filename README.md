# data-table-component-gif

Simple React table component with sorting, searching and pagination.

## Installation

```bash
npm install data-table-component-gif
```

(or yarn add data-table-component-gif)

## Usage

```jsx
import React from "react";
import { DataTable } from "data-table-component-gif";

const columns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
];
const data = [{ firstName: "Alice", lastName: "Smith" }];

function App() {
  return <DataTable data={data} columns={columns} itemsPerPage={5} />;
}
```

> **Style note**
>
> Styling is provided via a CSS file in the package. You can import it anywhere you use the `DataTable` component:
>
> ```js
> import "data-table-component-gif/dist/data-table-component-gif.css";
> ```
>
> **TypeScript users:** the package includes its own `.d.ts` file, so no additional `@types` dependency is required. You'll get full typings when importing `DataTable`.
