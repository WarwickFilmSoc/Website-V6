'use client';

import { ReactNode, useState } from 'react';
import Header from '@/components/layout/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function selectQueryData<DataType>(response: any): DataType {
  return response.data;
}

async function queryFunction({
  queryKey,
}: {
  queryKey: readonly any[];
}): Promise<Response> {
  const response = await fetch(queryKey[0]);
  return response.json();
}

export function Main({ children }: { children: ReactNode[] }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: queryFunction,
            select: selectQueryData,
          },
        },
      }),
  );

  const [showHeaderDropdownMenu, setShowHeaderDropdownMenu] = useState(false);

  return (
    <body
      className={`flex flex-col min-h-screen ${
        showHeaderDropdownMenu ? 'overflow-y-hidden xs:overflow-y-auto' : ''
      }`}
    >
      <QueryClientProvider client={queryClient}>
        <Header
          showHeaderDropdownMenu={showHeaderDropdownMenu}
          setShowHeaderDropdownMenu={setShowHeaderDropdownMenu}
        />
        {children}
      </QueryClientProvider>
    </body>
  );
}
