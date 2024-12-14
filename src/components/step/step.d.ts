import { IconProps } from "@tabler/icons-react-native";

export type StepProps = {
  icon?: React.ComponentType<IconProps>;
  title: string;
  description: string;
};
