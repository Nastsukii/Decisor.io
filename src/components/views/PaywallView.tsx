import { Lock, ShieldCheck } from 'lucide-react';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { Language } from '@/types';

interface PaywallViewProps {
  t: any;
  lang: Language;
  onToggleLanguage: () => void;
  onPayment: () => void;
}

export const PaywallView = ({ t, lang, onToggleLanguage, onPayment }: PaywallViewProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200" />
        
        <div className="p-10 text-center">
          <div className="flex justify-between items-start mb-2">
             <div className="w-8"></div> {/* Spacer */}
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
               <Lock className="w-6 h-6 text-slate-900" />
             </div>
             <div className="w-8 flex justify-end">
               <LanguageToggle lang={lang} onToggle={onToggleLanguage} />
             </div>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.paywall.title}</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {t.paywall.desc}
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-slate-900">€9</span>
              <span className="text-slate-500">,00</span>
            </div>
            <div className="text-xs text-slate-400 mt-2 uppercase tracking-wide font-medium">{t.paywall.paymentType}</div>
          </div>

          <button
            onClick={onPayment}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t.paywall.cta}
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
            <ShieldCheck size={12} /> {t.paywall.secure}
          </div>
        </div>
      </div>
    </div>
  );
};
