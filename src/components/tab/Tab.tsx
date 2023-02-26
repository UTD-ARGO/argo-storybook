import * as React from 'react';
import {Tab as MUITab, Tabs as MUITabs, Box} from '@mui/material';
import './tab.css'

interface TabProps {
  label1: string,
  label2: string,
  label3: string
}

export default function Tab({
  label1, label2, label3, ...props
}: TabProps) {
  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <MUITabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs"
      >
        <MUITab value="one" label={label1} sx={{ textTransform: 'none' }}/>
        <MUITab value="two" label={label2} sx={{ textTransform: 'none' }}/>
        <MUITab value="three" label={label3} sx={{ textTransform: 'none' }}/>
      </MUITabs>
    </Box>
  );
}