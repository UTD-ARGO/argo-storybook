import * as React from 'react';
import { Tab as MUITab, Tabs as MUITabs, Box } from '@mui/material';
import './tab.css';

export interface CustomTabProps {
    labels?: string[];
    fontSize?: string;
    hoverColor?: string;
    borderRadius?: string;
    fontColor?: string;
    hoverFontColor?: string;
    height?: string;
  }
  
  export default function CustomTab({ 
    labels, 
    fontSize = '16px', 
    hoverColor = '#ccc', 
    borderRadius = '8px 8px 0 0', 
    fontColor = '#000', 
    hoverFontColor = "#000",
    height = '48px',
    ...props 
  }: CustomTabProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <MUITabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: hoverColor
          }
        }}
        sx={{
          borderColor: 'divider',
          display: 'inline-flex',
          color: fontColor,
          indicatorColor: hoverColor,
          '& .MuiTab-root': {
            fontSize: fontSize,
            color: fontColor,
            borderRadius: '4px 4px 0 0',
            height: height,
            '&:hover': {
              backgroundColor: hoverColor,
              color: hoverFontColor,
            },
          },
        }}
        {...props}
      >
        {labels &&
          labels.length > 0 &&
          labels.map((label, index) => (
            <MUITab key={label} value={index} label={label} sx={{ textTransform: 'none'}} />
          ))}
      </MUITabs>
    );
  }
  