import React, { useMemo } from 'react';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import {Column} from './Table';
import {Box, Typography} from '@mui/material';
  
export interface AdvancedTableProps {
  columns: Column[];
  data: Row[];
  title?: string;
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
  density?: 'comfortable' | 'compact' | 'spacious';
}

export interface Row {
    detailPanelData?: any;
}

const AdvancedTable = ({ 
  columns = [],
  data = [],
  title = '',
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
  density = 'comfortable',
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
          initialState={{ showColumnFilters: false, density: density }}
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
          renderTopToolbarCustomActions={({ table }) => {
            return (
              <Box>
                  <Typography
                        variant="h5"
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

export default AdvancedTable;
