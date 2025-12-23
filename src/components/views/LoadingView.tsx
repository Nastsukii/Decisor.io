import { Loader2 } from 'lucide-react';

interface LoadingViewProps {
  message: string;
}

export const LoadingView = ({ message }: LoadingViewProps) => (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
    <Loader2 className="w-10 h-10 text-slate-900 animate-spin mb-4" />
    <p className="text-slate-500 font-medium animate-pulse">
      {message}
    </p>
  </div>
);
