import { View, Text } from "react-native";

import { styles } from "./styles";
import { StepProps } from "./step";
import { colors } from "@/styles/colors";

export function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {Icon && <Icon size={32} color={colors.red.base} />}
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
