import { PaperProps } from '@mui/material';
import { Paper as MuiPaper } from '@mui/material'; 

const Paper = (props: PaperProps) => { 
  const paperStyle = {
    width: '100px', 
    height: '100px', 
    padding: '16px'
  };
  return (
    <MuiPaper {...props} style={paperStyle}/>);
  };
  
  export default Paper;
