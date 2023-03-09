import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Surfaces/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  header: "Title1",
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, mollitia?
      Nobis voluptates officiis aperiam ab itaque reiciendis aliquid inventore
      sunt!
    </div>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  header: "Title2",
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, mollitia?
      Nobis voluptates officiis aperiam ab itaque reiciendis aliquid inventore
      sunt!
    </div>
  ),
  backgroundColor: "#ECF1FF"
};
