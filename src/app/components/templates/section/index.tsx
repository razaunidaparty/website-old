import classNames from "classnames";
import styles from "./Section.module.scss";

interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  const sectionClass = classNames(styles.container, className);
  return (
    <section className={sectionClass} {...props}>
      {children}
    </section>
  );
}
