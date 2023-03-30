import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface BasicTableProps {
  tableColumns: any[];
  tableRows: any[];
  tableWidth?: number;
  tableHeight?: number;
}

export default function BasicTable({
  tableColumns = [],
  tableRows = [],
  tableWidth = 650,
  tableHeight = 500,
  ...props
}: BasicTableProps) {
  return (
    <TableContainer component={Paper} sx={{ width: tableWidth, height: tableHeight }}>
      <Table aria-label="simple table" sx={{ width: tableWidth, height: tableHeight }}>
        <TableHead>
          <TableRow>
            {tableColumns.map((column: any, index: number) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row: any, index: number) => (
            <TableRow key={index}>
              {Object.keys(row).map((key) => (
                <TableCell align="left" key={key}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}