import Button from "../components/Button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    type: {
      control: "select",
      options: ["button", "submit"],
    },
    color: {
      control: "color",  
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const SubmitType = {
  args: {
    children: "Submit Button",
    type: "submit",
  },
};