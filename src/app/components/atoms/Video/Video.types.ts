import { BaseReactPlayerProps } from "react-player/base";

export interface VideoProps {
  /**
   * Video Platform
   */
  platform?: "vimeo" | "youtube";
  id: string | number;
  className?: string;
  settings?: BaseReactPlayerProps;
}
