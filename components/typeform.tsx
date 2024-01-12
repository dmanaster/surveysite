'use client';
import { Widget } from '@typeform/embed-react';
import type { TypeformProps } from '@/lib/types';

export default function TypeForm({ typeformId }: TypeformProps): JSX.Element {
  return <Widget id={typeformId} className="h-192 w-full lg:w-3/4" />;
}
