import styles from "./Button.module.scss";

export const handletheme = (theme: ButtonThemes) => {
  switch (theme) {
    case "primary":
      return styles.primary;
    case "outline":
      return styles.outline;
    case "dark":
      return styles.dark;
    default:
      return styles.primary;
  }
};
