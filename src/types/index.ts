import { ReactNode } from 'react';

export type ViewState = 'landing' | 'quiz' | 'paywall' | 'result';
export type Language = 'en' | 'pt';

export interface Option {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  type: 'radio' | 'number';
  options?: Option[];
  min?: number;
  max?: number;
}

export interface ResultContent {
  title: string;
  desc: string;
  color: string;
  bg: string;
  borderColor: string;
  icon: ReactNode;
}
