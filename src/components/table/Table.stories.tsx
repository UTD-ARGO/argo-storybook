import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicTable, { BasicTableProps } from './BasicTable'
import DataTable from './DataTable';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import EnhancedTable, {HeadCell, RowData} from './EnhancedTable';

export default {
	title: 'Data Display/Table',
	component: DataTable
} as ComponentMeta<typeof DataTable>;

const TemplateBasic: ComponentStory<typeof BasicTable> = (args) => <BasicTable {...args} />;
const columns = ["Dessert (100g serving)", "Calories", "Fat", "Carbs", "Protein"];
const rows = [
	{name: 'Frozen yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
	{name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
  	{name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
  	{name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
  	{name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
];

export const Basic = TemplateBasic.bind({});
Basic.args = {
	tableColumns: columns,
	tableRows: rows,
	tableWidth: 1000,
	tableHeight: 400
};

const TemplateEnhanced: ComponentStory<typeof EnhancedTable> = (args) => <EnhancedTable {...args} />;
const columnsEnhanced: readonly HeadCell[] = [
	{ headCellId: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)'},
	{ headCellId: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ headCellId: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ headCellId: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ headCellId: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

const rowsEnhanced: (RowData & { calories: number; fat: number; carbs: number; protein: number })[] = [
	{ name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
	{ name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9},
	{ name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
	{ name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
	{ name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
	{ name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5},
	{ name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
	{ name: 'Jelly Bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0},
	{ name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7.0},
	{ name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0.0},
];

export const Enhanced = TemplateEnhanced.bind({});
Enhanced.args = {
	tableColumns: columnsEnhanced,
	tableRows: rowsEnhanced,
	title: 'Title',
	densePadding: false,
	tableWidth: 1200,
	tableHeight: 400,
	rowsPerPageOptions: [5, 10, 25],
};

const TemplateData: ComponentStory<typeof DataTable> = (args) => <DataTable {...args} />;

const dataColumns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{ field: 'age', headerName: 'Age', width: 90,},
	{
		field: 'icon',
		headerName: 'Icon',
		width: 100,
		renderCell: (params: GridRenderCellParams<Date>) => (
			<PersonIcon />
		),
	},
	{
		field: 'component',
		headerName: 'Component',
		width: 150,
		renderCell: (params: GridRenderCellParams<Date>) => (
			<Chip label="Chip" variant="outlined" color="primary"/>
		),
	},
  ];
  
const dataRows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 75},
	{ id: 6, lastName: 'Melisandre', firstName: 'Trudy', age: 83},
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36}
  ];

export const Data = TemplateData.bind({});
Data.args = {
	tableColumns: dataColumns,
	tableRows: dataRows,
	rowsPerPage: [10, 25, 50],
	tableWidth: 1500,
  	tableHeight: 500,
};