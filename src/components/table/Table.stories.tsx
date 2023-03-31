import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { Column } from './Table';
import AdvancedTable, {Row} from './AdvancedTable';
import Alert from '@mui/material/Alert'
import PersonIcon from '@mui/icons-material/Person';

export default {
  title: 'Data Display/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const TemplateBasic: ComponentStory<typeof Table> = (args) => <Table {...args}></Table>;

const columns: Column[] = [
  { accessorKey: 'name.firstName', header: 'First Name' },
  { accessorKey: 'name.lastName', header: 'Last Name' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'state', header: 'State' },
];
const data = [
  { name: { firstName: 'John', lastName: 'Doe' }, address: '261 Erdman Ford', city: 'East Daphne', state: 'Kentucky' },
  { name: { firstName: 'Jane', lastName: 'Doe' }, address: '769 Dominic Grove', city: 'Columbus', state: 'Ohio' },
  { name: { firstName: 'Joe', lastName: 'Doe' }, address: '566 Brakus Inlet', city: 'South Linda', state: 'West Virginia' },
  { name: { firstName: 'Kevin', lastName: 'Vandy' }, address: '722 Emie Stream', city: 'Lincoln', state: 'Nebraska' },
  { name: { firstName: 'Joshua', lastName: 'Rolluffs' }, address: '32188 Larkin Turnpike', city: 'Omaha', state: 'Nebraska' }
];
  
export const Basic = TemplateBasic.bind({});
Basic.args = {
  columns: columns,
  data: data,
  enableColumnActions: false,
  enableColumnFilters: false,
  enablePagination: false,
  enableSorting: false,
  enableBottomToolbar: false,
  enableTopToolbar: false,
  enableRowHover: false
};

export const Sorting = TemplateBasic.bind({});
Sorting.args = {
  columns: columns,
  data: data,
};


const advancedColumns: (Column & { size: number})[] = [
  { accessorKey: 'name.firstName', header: 'First Name', size: 100},
  { accessorKey: 'name.lastName', header: 'Last Name', size: 100},
  { accessorKey: 'address', header: 'Address', size: 200},
  { accessorKey: 'city', header: 'City', size: 100},
  { accessorKey: 'state', header: 'State', size: 100},
  { accessorKey: 'icon', header: 'Icon', size: 50},

];

const advancedData: (Row & { 
  name: {firstName: string, lastName: string}, 
  address: string, 
  city: string, 
  state: string,
  icon: JSX.Element,
})[] = [
  {
    name: { firstName: 'John', lastName: 'Doe' },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    icon: <PersonIcon />,
    detailPanelData: <Alert severity="info">This is John Doe's information.</Alert>,
  },
  {
    name: { firstName: 'Jane', lastName: 'Doe' },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
    icon: <PersonIcon />,
    detailPanelData: <Alert severity="info">This is Jane Doe's information.</Alert>,
  },
  {
    name: { firstName: 'Joe', lastName: 'Doe' },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
    icon: <PersonIcon />,
    detailPanelData: <Alert severity="info">This is Joe Doe's information.</Alert>,
  },
  {
    name: { firstName: 'Kevin', lastName: 'Vandy' },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
    icon: <PersonIcon />,
    detailPanelData: <Alert severity="info">This is Kevin Vandy's information.</Alert>,
  },
  {
    name: { firstName: 'Joshua', lastName: 'Rolluffs' },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
    icon: <PersonIcon />,
    detailPanelData: <Alert severity="info">This is Joshua Rolluffs' information.</Alert>,
  },
];



const TemplateAdvanced: ComponentStory<typeof AdvancedTable> = (args) =>
 <AdvancedTable {...args}></AdvancedTable>;
 export const Advanced = TemplateAdvanced.bind({});
 Advanced.args = {
  columns: advancedColumns,
  data: advancedData,
};

