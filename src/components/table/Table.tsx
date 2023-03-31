import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import {Box, Typography} from '@mui/material';

export interface TableProps {
  columns: Column[];
  data: any[];
  title?: string;
  enableColumnActions?: boolean;
  enableColumnFilters?: boolean;
  enablePagination?: boolean;
  enableSorting?: boolean;
  enableBottomToolbar?: boolean;
  enableTopToolbar?: boolean;
  enableRowHover?: boolean;
  enableColumnResizing?: boolean;
}

export interface Column {
    accessorKey: string;
    header: string;
    size: number;
}

const Table = ({ 
  columns = [],
  data = [],
  title = '',
  enableColumnActions = true,
  enableColumnFilters = true,
  enablePagination = true,
  enableSorting = true,
  enableBottomToolbar = true,
  enableTopToolbar = true,
  enableRowHover = true,
  enableColumnResizing = false,
  ...props }: TableProps) => {

  const renderedColumns = useMemo<MRT_ColumnDef<any>[]>(
    () => columns.map(({ accessorKey, header, size }) => ({ accessorKey, header, size })),
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
          enableColumnResizing={enableColumnResizing}
          columnResizeMode="onChange"
          muiTableProps={{
            sx: {
              tableLayout: 'fixed',
            },
          }}
          renderTopToolbarCustomActions={({ table }) => {
            return (
              <Box>
                  <Typography
                        variant="h4"
                        color="black"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      >
                        {title}
                  </Typography>
              </Box>
            );
          }}
        />    
      );
};

export default Table;
