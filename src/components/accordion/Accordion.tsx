import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PropsWithChildren } from "react";

export interface AccordionProps {
  header: string,
  children: React.ReactNode
}

export default function SimpleAccordion(props: PropsWithChildren<AccordionProps>) {
  return (
        <Accordion sx={{width: '374px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${props.header}-content`}
            id={`panel${props.header}-header`}
          >
            <Typography>{props.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {props.children}
          </AccordionDetails>
        </Accordion>
  );
}
