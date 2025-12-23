import { ArrowRight, ShieldCheck } from 'lucide-react';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { Footer } from '@/components/common/Footer';
import { Language } from '@/types';

interface LandingViewProps {
  t: any;
  lang: Language;
  onToggleLanguage: () => void;
  onStart: () => void;
}

export const LandingView = ({ t, lang, onToggleLanguage, onStart }: LandingViewProps) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col">
      <nav className="max-w-5xl mx-auto p-6 flex justify-between items-center w-full">
        <div className="font-bold text-xl tracking-tighter">{t.nav.title}</div>
        <div className="flex items-center gap-4">
          <LanguageToggle lang={lang} onToggle={onToggleLanguage} />
          <button onClick={onStart} className="text-sm font-medium hover:underline hidden sm:block">
            {t.nav.start}
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 flex-1 flex flex-col justify-center items-center text-center w-full py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-8">
          <ShieldCheck size={14} /> {t.landing.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-slate-900 leading-[1.1]">
          {t.landing.heroTitle} <span className="text-slate-400">{t.landing.heroHighlight}</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
          {t.landing.heroDesc}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            {t.landing.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-100 pt-12">
          <div>
            <h3 className="font-semibold mb-2">{t.landing.features.fast.title}</h3>
            <p className="text-sm text-slate-500">{t.landing.features.fast.desc}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t.landing.features.private.title}</h3>
            <p className="text-sm text-slate-500">{t.landing.features.private.desc}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t.landing.features.direct.title}</h3>
            <p className="text-sm text-slate-500">{t.landing.features.direct.desc}</p>
          </div>
        </div>
      </main>
      
      <Footer t={t} />
    </div>
  );
};
