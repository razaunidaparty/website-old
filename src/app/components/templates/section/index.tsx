import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className={styles.container}>{children}</section>;
}
