import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface BasicTableProps {
	variant?: string;
  tableColumns: any[];
  tableRows:  any[];
}

export default function BasicTable({ 
  variant, 
  tableColumns = [],
  tableRows = [],
  ...props }: 
  BasicTableProps) {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                            <TableCell align="left">{row[key]}</TableCell>
                          ))}
                      </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}