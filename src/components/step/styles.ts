import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
    flexWrap: "wrap",
    marginTop: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4,
    flexWrap: "wrap",
  },
});
