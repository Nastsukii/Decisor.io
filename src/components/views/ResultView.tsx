import { CheckCircle, AlertCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { Footer } from '@/components/common/Footer';
import { Language, ResultContent } from '@/types';

interface ResultViewProps {
  t: any;
  lang: Language;
  onToggleLanguage: () => void;
  finalScore: number;
}

export const ResultView = ({ t, lang, onToggleLanguage, finalScore }: ResultViewProps) => {
  const getResultData = (): ResultContent => {
    const r = t.result.results;
    if (finalScore <= 9) {
      return {
        title: r.green.title,
        desc: r.green.desc,
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        icon: <CheckCircle className="w-16 h-16 text-emerald-600 mb-4" />
      };
    } else if (finalScore <= 14) {
      return {
        title: r.yellow.title,
        desc: r.yellow.desc,
        color: "text-amber-700",
        bg: "bg-amber-50",
        borderColor: "border-amber-200",
        icon: <AlertCircle className="w-16 h-16 text-amber-600 mb-4" />
      };
    } else {
      return {
        title: r.red.title,
        desc: r.red.desc,
        color: "text-rose-700",
        bg: "bg-rose-50",
        borderColor: "border-rose-200",
        icon: <ShieldCheck className="w-16 h-16 text-rose-600 mb-4" />
      };
    }
  };

  const result = getResultData();

  const handleShare = () => {
    const text = `${t.result.shareText} ${result.title}.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleNewAnalysis = () => {
    localStorage.removeItem('decision_app_score');
    window.location.href = window.location.pathname;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 sm:p-12">
      <div className="max-w-2xl w-full mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative flex-1 flex flex-col justify-center">
        
        <div className="absolute top-0 right-0 z-20">
           <LanguageToggle lang={lang} onToggle={onToggleLanguage} />
        </div>

        {/* Result Header */}
        <div className={`${result.bg} ${result.borderColor} border p-12 rounded-3xl text-center mb-8 relative overflow-hidden`}>
          <div className="relative z-10 flex flex-col items-center">
            {result.icon}
            <h1 className={`text-4xl md:text-5xl font-bold ${result.color} mb-6 tracking-tight`}>
              {result.title}
            </h1>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-lg">
              {result.desc}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle size={18} className="text-slate-400" />
              {t.result.techSummary}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg border border-slate-100">
                <span className="text-slate-400 block mb-1">{t.result.riskScore}</span>
                <span className="font-medium text-slate-900">{finalScore} / 18</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-100">
                <span className="text-slate-400 block mb-1">{t.result.date}</span>
                <span className="font-medium text-slate-900">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={20} />
            {t.result.share}
          </button>
          
          <button
            onClick={handleNewAnalysis}
            className="w-full py-4 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
          >
            {t.result.newAnalysis}
          </button>
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
};
