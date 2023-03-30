import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

export interface EnhancedTableProps {
    tableColumns: readonly HeadCell[];
    tableRows: RowData[];
    title?: string; 
    densePadding?: boolean;
    tableWidth?: number;
    tableHeight?: number;
    rowsPerPageOptions?: number[];
  }

export interface HeadCell {
    disablePadding: boolean;
    headCellId: any;
    label: string;
    numeric: boolean;
}

export interface RowData {
  name: string;
}

interface LocalEnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof RowData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

interface EnhancedTableToolbarProps {
    numSelected: number;
    title: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'name';

function EnhancedTableHead({
    tableColumns = [],
    tableRows = [],
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  }: LocalEnhancedTableProps & EnhancedTableProps) {
    const createSortHandler =
      (newOrderBy: keyof RowData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, newOrderBy);
      };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all',
              }}
            />
          </TableCell>
          {tableColumns?.map((headCell) => (
            <TableCell
              key={headCell.headCellId ?? ''}
              align={'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.headCellId ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.headCellId}
                direction={orderBy === headCell.headCellId ? order : 'asc'}
                onClick={createSortHandler(headCell.headCellId)}
              >
                {headCell.label}
                {orderBy === headCell.headCellId ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {props.title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function EnhancedTable({ 
    tableColumns = [],
    tableRows = [],
    title = 'Title',
    densePadding = false,
    rowsPerPageOptions = [5, 10, 25],
    tableWidth = 1000,
    tableHeight = 400,
    ...props }: 
    EnhancedTableProps) {
    const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
    const [orderBy, setOrderBy] = React.useState<keyof RowData>(DEFAULT_ORDER_BY);
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [visibleRows, setVisibleRows] = React.useState<RowData[] | null>(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
    const [paddingHeight, setPaddingHeight] = React.useState(0);

    React.useEffect(() => {
        let rowsOnMount = stableSort(
        tableRows,
        getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
        );
        rowsOnMount = rowsOnMount.slice(
        0 * rowsPerPageOptions[0],
        0 * rowsPerPageOptions[0] + rowsPerPageOptions[0],
        );

        setVisibleRows(rowsOnMount);
    }, []);

    const handleRequestSort = React.useCallback(
        (event: React.MouseEvent<unknown>, newOrderBy: keyof RowData) => {
        const isAsc = orderBy === newOrderBy && order === 'asc';
        const toggledOrder = isAsc ? 'desc' : 'asc';
        setOrder(toggledOrder);
        setOrderBy(newOrderBy);

        const sortedRows = stableSort(tableRows, getComparator(toggledOrder, newOrderBy));
        const updatedRows = sortedRows.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
        );
        setVisibleRows(updatedRows);
        },
        [order, orderBy, page, rowsPerPage],
    );

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
        const newSelected = tableRows.map((n) => n.name);
        setSelected(newSelected);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }

    setSelected(newSelected);
  };

    const handleChangePage = React.useCallback(
        (event: unknown, newPage: number) => {
        setPage(newPage);

        const sortedRows = stableSort(tableRows, getComparator(order, orderBy));
        const updatedRows = sortedRows.slice(
            newPage * rowsPerPage,
            newPage * rowsPerPage + rowsPerPage,
        );
        setVisibleRows(updatedRows);

        const numEmptyRows =
            newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - tableRows.length) : 0;

        const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
        setPaddingHeight(newPaddingHeight);
        },
        [order, orderBy, dense, rowsPerPage],
    );

    const handleChangeRowsPerPage = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(updatedRowsPerPage);

        setPage(0);

        const sortedRows = stableSort(tableRows, getComparator(order, orderBy));
        const updatedRows = sortedRows.slice(
            0 * updatedRowsPerPage,
            0 * updatedRowsPerPage + updatedRowsPerPage,
        );
        setVisibleRows(updatedRows);

        setPaddingHeight(0);
        },
        [order, orderBy],
    );

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{width: tableWidth, mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} title={title}/>
            <TableContainer sx={{width: tableWidth, height: tableHeight}}>
                  <Table
                    sx={{width: tableWidth, height: tableHeight}}
                    aria-labelledby="tableTitle"
                    size={densePadding ? 'small' : 'medium'}
                  >
                    <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={tableRows.length}
                    tableColumns={tableColumns}
                    tableRows={tableRows}
                    rowsPerPageOptions={rowsPerPageOptions}
                    />
                    <TableBody>
                      {visibleRows
                        ? visibleRows.map((row, index) => {
                          const isItemSelected = isSelected(row.name);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.name)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.name}
                              selected={isItemSelected}
                              sx={{ cursor: 'pointer' }}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    'aria-labelledby': labelId,
                                  }}
                                />
                              </TableCell>
                              {Object.keys(row)
                                    .filter(key => key !== 'id' && key !== 'collapseData')
                                    .map((key) => (
                                      <TableCell key={key} align="left">
                                        {row[key as keyof typeof row]}
                                      </TableCell>
                                    ))
                                }
                            </TableRow>
                        );
                        })
                      : null}
                      {paddingHeight > 0 && (
                        <TableRow
                          style={{
                            height: paddingHeight}}
                        >
                            <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
            </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}