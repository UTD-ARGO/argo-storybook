import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import {Column} from './Table';
import Box from '@mui/material/Box';
  
export interface AdvancedTableProps {
  columns: Column[];
  data: Row[];
  enableColumnActions?: boolean;
  enableColumnFilters?: boolean;
  enablePagination?: boolean;
  enableSorting?: boolean;
  enableBottomToolbar?: boolean;
  enableTopToolbar?: boolean;
  enableColumnOrdering?: boolean;
  enableGrouping?: boolean;
  enablePinning?: boolean;
  enableRowHover?: boolean;
  enableRowSelection?: boolean;
  enableColumnResizing?: boolean;
}

export interface Row {
    detailPanelData?: any;
}

const AdvancedTable = ({ 
  columns = [],
  data = [],
  enableColumnActions = true,
  enableColumnFilters = false,
  enablePagination = true,
  enableSorting = true,
  enableBottomToolbar = true,
  enableTopToolbar = true,
  enableColumnOrdering = true,
  enableGrouping = true,
  enablePinning = true,
  enableRowHover = true,
  enableRowSelection = true,
  enableColumnResizing = true,
  ...props }: AdvancedTableProps) => {

    const renderedColumns = useMemo<MRT_ColumnDef<any>[]>(
      () => columns.map(({ accessorKey, header, size }) => ({ accessorKey, header, size })),
      [columns],
    );
      
      return (
        <MaterialReactTable
          columns={renderedColumns}
          data={data}
          enableColumnFilterModes={enableColumnFilters}
          enableColumnOrdering={enableColumnOrdering}
          enableGrouping={enableGrouping}
          enablePinning={enablePinning}
          enableRowSelection={enableRowSelection}
          initialState={{ showColumnFilters: false }}
          positionToolbarAlertBanner="bottom"
          enableColumnResizing={enableColumnResizing}
          columnResizeMode="onChange"
          renderDetailPanel={({ row }) => (
            <Box
              sx={{display: 'flex', alignItems: 'left'}}
            >
                {row.original.detailPanelData}
            </Box>
          )}
          muiTableProps={{
            sx: {
              tableLayout: 'fixed',
            },
          }}
        />
      );
};

export default AdvancedTable;
