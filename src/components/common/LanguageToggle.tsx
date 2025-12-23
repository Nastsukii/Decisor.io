import { Globe } from 'lucide-react';
import { Language } from '@/types';

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export const LanguageToggle = ({ lang, onToggle }: LanguageToggleProps) => (
  <button 
    onClick={onToggle}
    className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-900 transition-all text-slate-600 hover:text-slate-900"
  >
    <Globe size={14} />
    <span>{lang === 'en' ? 'PT-BR' : 'EN'}</span>
  </button>
);
