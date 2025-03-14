"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const clientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default clientLayout;
