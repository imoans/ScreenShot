import * as React from "react";
import App from "./App.tsx";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

const longText =
  "veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongtext";
const shortText = "text";

storiesOf("App", module)
  .add("long text", () => <App text={text("text", longText)} />)
  .add("short text", () => <App text={text("text", shortText)} />);
