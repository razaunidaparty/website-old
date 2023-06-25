import Button from "@components/atoms/Button";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./TopBar.module.scss";

/**
 * Props for `TopBar`.
 */
export type TopBarProps = SliceComponentProps<Content.TopBarSlice>;

/**
 * Component for "TopBar" Slices.
 */
const TopBar = ({ slice }: TopBarProps): JSX.Element => {
  const { primary } = slice;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.label}>{primary.label}</span>
        <PrismicNextLink field={primary.link} className={styles.button}>
          <Button>{primary.button_text}</Button>
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default TopBar;
