import { configure, addDecorator, addParameters } from "@storybook/react";
import { withScreenshot } from "storycap";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withScreenshot);
addDecorator(withKnobs);
addParameters({
  backgrounds: [
    { name: "default", value: "#f0f0f0", default: true },
    { name: "white", value: "#fff" }
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone5"
  }
});

configure(require.context("../", true, /\.stories\.tsx$/), module);
