"use client";

import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider>{children}</ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
