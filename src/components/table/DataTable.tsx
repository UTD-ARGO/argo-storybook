import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface DataTableProps {
  tableColumns: GridColDef[];
  tableRows: any[];
  tableWidth?: number;
  tableHeight?: number;
  rowsPerPage?: number[];
}

const columns: GridColDef[] = [];

export default function DataTable({
  tableColumns = columns,
  tableRows = [],
  tableWidth = 1500,
  tableHeight = 500,
  rowsPerPage = [25, 50, 100],
  ...props
}: DataTableProps) {
  return (
    <div style={{ height: tableHeight, width: tableWidth }}>
      <DataGrid
        rows={tableRows}
        columns={tableColumns}
        checkboxSelection
        initialState={{
          pagination: { paginationModel: { pageSize: rowsPerPage[0] } },
        }}
        pageSizeOptions={rowsPerPage}
      />
    </div>
  );
}
