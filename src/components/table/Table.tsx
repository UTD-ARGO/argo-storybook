import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';

export interface TableProps {
  columns: Column[];
  data: any[];
  enableColumnActions?: boolean;
  enableColumnFilters?: boolean;
  enablePagination?: boolean;
  enableSorting?: boolean;
  enableBottomToolbar?: boolean;
  enableTopToolbar?: boolean;
  enableRowHover?: boolean;
}

export interface Column {
    accessorKey: string;
    header: string;
}

const Table = ({ 
  columns = [],
  data = [],
  enableColumnActions = true,
  enableColumnFilters = true,
  enablePagination = true,
  enableSorting = true,
  enableBottomToolbar = true,
  enableTopToolbar = true,
  enableRowHover = true,
  ...props }: TableProps) => {

    const renderedColumns = useMemo<MRT_ColumnDef<any>[]>(
        () => columns.map(({ accessorKey, header }) => ({ accessorKey, header })),
        [columns],
      );
      
      return (
        <MaterialReactTable
          columns={renderedColumns}
          data={data}
          enableColumnActions={enableColumnActions}
          enableColumnFilters={enableColumnFilters}
          enablePagination={enablePagination}
          enableSorting={enableSorting}
          enableBottomToolbar={enableBottomToolbar}
          enableTopToolbar={enableTopToolbar}
          muiTableBodyRowProps={{ hover: enableRowHover }}
        />
      );
};

export default Table;
