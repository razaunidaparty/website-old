import { IconType } from "react-icons";
import { FaFistRaised, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";

export interface INavItem extends NavBase {
  children?: TNavChild;
}

export type NavBase = {
  id: number;
  label: string;
  href: string;
  icon?: IconType;
};

export type TNavChild = Exclude<INavItem[], { children: undefined }>;
export type TNavChildItem = Exclude<INavItem, { children: undefined }>;

export default [
  {
    id: 1,
    label: "Learn",
    href: "/learn",
    children: [
      {
        id: 1,
        label: "About Us",
        href: "/about",
      },
      {
        id: 2,
        label: "Media",
        href: "/media",
      },
    ],
  },
  {
    id: 2,
    label: "Platform",
    href: "/platform",
    children: [
      {
        id: 3,
        label: "Constitution",
        href: "platform/constitution",
      },
    ],
  },
  {
    id: 3,
    label: "Community",
    href: "/community",
    children: [
      {
        id: 4,
        label: "Study Group",
        href: "/studygroup/signup",
      },
      {
        id: 5,
        label: "Become a Member",
        href: "/membership",
      },
    ],
  },
] satisfies INavItem[];

export const headerNav = [
  {
    id: 0,
    label: "Members",
    href: "/membership",
    icon: FaUserAlt,
  },

  {
    id: 1,
    label: "Study Group",
    href: "/studygroup/signup",
    icon: BsBookmarkFill,
  },
  {
    id: 2,
    label: "Shop",
    href: "https://chicanx.shop",
    icon: FaShoppingCart,
  },
  {
    id: 3,
    label: "El Sembrador",
    href: "/elSembrador",
    icon: RiFilePaper2Fill,
  },
  {
    id: 4,
    label: "El Congreso",
    href: "/congreso",
    icon: FaFistRaised,
  },
] satisfies NavBase[];
