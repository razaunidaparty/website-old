"use client";

import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

interface GridProps extends SimpleGridProps {
  children: React.ReactNode;
}

const Grid = ({ children, ...props }: GridProps) => {
  return <SimpleGrid {...props}>{children}</SimpleGrid>;
};

export default Grid;
