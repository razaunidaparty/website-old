interface ButtonProps extends ButtonElementProps {
  className?: string;
  theme?: ButtonThemes;
  children: React.ReactNode;
}

// Custom Props
type ButtonThemes = "primary" | "outline" | "dark";

// Native Button Element Props
type ButtonElementProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "classNames"
>;
