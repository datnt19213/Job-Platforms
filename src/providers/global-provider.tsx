// File: providers/GlobalProviders.tsx
'use client'

import { ReactNode } from 'react';

import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: ReactNode
}

export function GlobalProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
