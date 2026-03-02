import Card from "../components/Card";

export default {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    flipped: { control: "boolean" },
    value: { control: "text" },
    onClick: { action: "card clicked" },
  },
};

export const Flipped = {
  args: {
    flipped: true,
    value: "A",
  },
};

export const Closed = {
  args: {
    flipped: false,
    value: "K",
  },
};
