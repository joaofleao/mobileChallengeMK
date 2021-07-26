import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  title: {
    fontFamily: "WorkSansBold",
    fontSize: 40,
    color: colors.text,
  },
  postTitle: {
    fontFamily: "WorkSansBold",
    fontSize: 30,
    color: colors.text,
  },
  subTitle: {
    fontFamily: "WorkSansSemiBold",
    fontSize: 25,
    marginBottom: 20,
    color: colors.primary,
  },
  description: {
    fontFamily: "WorkSansLight",
    fontSize: 20,
    color: colors.text,
    marginBottom: 30,
  },
  emptyStateContainer: {
    flex: 1,
    marginBottom: 100,
    justifyContent: "center",
  },
  emptyState: {
    fontSize: 15,
    fontFamily: "WorkSansLight",
    textAlign: "center",
    color: colors.textDisabled,
  },
});

export default styles;
