import * as React from 'react';
import { Tab as MUITab, Tabs as MUITabs } from '@mui/material';
import './tab.css';

export interface CustomTabProps {
  labels?: string[];
  fontSize?: string;
  hoverColor?: string;
  borderRadius?: string;
  fontColor?: string;
  hoverFontColor?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
  value?: number;
}

export default function CustomTab({
  labels,
  fontSize = '16px',
  hoverColor = '#ccc',
  borderRadius = '8px 8px 0 0',
  fontColor = '#000',
  hoverFontColor = '#000',
  height = '48px',
  onClick,
  value,
  ...props
}: CustomTabProps) {
  const handleTabClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (onClick) {
      onClick(event, index);
    }
  };

  return (
    <MUITabs
        value={value}
        aria-label="custom tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: hoverColor
          }
        }}
        sx={{
          borderColor: 'divider',
          display: 'inline-flex',
          '& .MuiTab-root': {
            fontSize: fontSize,
            color: fontColor,
            borderRadius: '4px 4px 0 0',
            height: height,
            '&.Mui-selected': {
              color: fontColor,
            },
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
              <MUITab
                key={label}
                value={index}
                label={label}
                sx={{ textTransform: 'none' }}
                onClick={(event) => handleTabClick(event, index)}
              />
          ))}
    </MUITabs>
  );
}
