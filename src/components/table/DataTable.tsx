import * as React from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface DataTableProps {
  variant?: string;
  tableColumns?: GridColDef[];
  tableRows?: any[];
}

const columns: GridColDef[] = [];

export default function DataTable({
  variant,
  tableColumns = columns,
  tableRows = [],
  ...props
}: DataTableProps) {

  const [openRow, setOpenRow] = React.useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setOpenRow(openRow === id ? null : id);
  };

  const collapseColumn: GridColDef = {
    field: 'collapse',
    headerName: '',
    sortable: false,
    width: 80,
    renderHeader: () => {
      return (
        <IconButton size="small" sx={{ paddingLeft: '20px' }}>
          <KeyboardArrowDownIcon />
        </IconButton>
      );
    },
    renderCell: (params: GridCellParams) => {
      const id = params.row.id as number;
      const isOpen = id === openRow;
      return (
        <TableRow>
          <TableCell>
              <IconButton
                size="small"
                onClick={() => handleRowClick(id)}
              >
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <Collapse in={isOpen}>
                <Box sx={{ marginTop: 2 }}>
                  {params.row.collapseData}
                </Box>
              </Collapse>
          </TableCell>
        </TableRow>
      );
    },
  };  
  
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={tableRows}
        columns={[collapseColumn, ...tableColumns]}
        checkboxSelection
      />
    </div>
  );
}