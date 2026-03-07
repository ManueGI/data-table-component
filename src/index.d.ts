import * as React from "react";

/**
 * Column definition for the table.
 */
export interface Column {
  /**
   * Key of the object property to show in this column.
   */
  key: string;
  /**
   * Header label for the column.
   */
  label: string;
}

/**
 * Props accepted by the DataTable component.
 */
export interface DataTableProps {
  /**
   * Array of data objects to render.
   */
  data?: Array<Record<string, any>>;
  /**
   * Array of column definitions.
   */
  columns?: Column[];
  /**
   * Number of items to show per page (pagination).
   */
  itemsPerPage?: number;
}

/**
 * Simple data table with sorting, filtering and pagination.
 */
export function DataTable(props: DataTableProps): React.JSX.Element;
