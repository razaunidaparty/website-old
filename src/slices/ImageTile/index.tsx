import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageTile`.
 */
export type ImageTileProps = SliceComponentProps<Content.ImageTileSlice>;

/**
 * Component for "ImageTile" Slices.
 */
const ImageTile = ({ slice }: ImageTileProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_tile (variation: {slice.variation}) Slices
    </section>
  );
};

export default ImageTile;
