import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion, { AccordionObj } from "./Accordion";

export default {
  title: "Inputs/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

const accordionOne = {
  header: "Title1",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe fugit ratione beatae excepturi harum velit rerum illo enim itaque.",
};

const accordionTwo = {
  header: "Title2",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste sint fugit, ipsam quia quod optio obcaecati dolores recusandae eius?",
};

const accordionList: AccordionObj[] = [accordionOne, accordionTwo];
export const Primary = Template.bind({});
Primary.args = {
  accordionList: accordionList
};
