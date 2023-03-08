import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



export interface AccordionObj {
  header: string,
  details: string
}

export interface AccordionProps {
  accordionList: AccordionObj[];
}

export default function SimpleAccordion({ accordionList }: AccordionProps) {
  return (
    <div>
      {accordionList.map((acc, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{acc.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {acc.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
