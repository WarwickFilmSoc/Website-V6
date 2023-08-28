'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

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

export default function Providers({ children }: { children: ReactNode[] }) {
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

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
