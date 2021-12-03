import { LayoutProps } from '@/models';
import * as React from 'react';

export interface IEmptyProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
