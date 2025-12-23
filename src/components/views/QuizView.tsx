import { useState } from 'react';
import { X, ChevronRight, ArrowLeft } from 'lucide-react';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { Language, Question } from '@/types';

interface QuizViewProps {
  t: any;
  lang: Language;
  onToggleLanguage: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, number>;
  onAnswer: (value: number) => void;
  onBack: () => void;
  onCancel: () => void;
}

export const QuizView = ({
  t,
  lang,
  onToggleLanguage,
  questions,
  currentQuestionIndex,
  answers,
  onAnswer,
  onBack,
  onCancel
}: QuizViewProps) => {
  const [numericInput, setNumericInput] = useState<string>('');
  
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNumericSubmit = () => {
    const val = parseInt(numericInput, 10);
    if (!isNaN(val) && val >= 0 && val <= 10) {
      onAnswer(val);
      setNumericInput('');
    }
  };

  const handleCancelClick = () => {
    if (confirm(t.quiz.cancelConfirm)) {
      onCancel();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6">
      <div className="max-w-xl w-full mx-auto">
        {/* Header with Navigation */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
               {t.quiz.question} {currentQuestionIndex + 1} {t.quiz.of} {questions.length}
            </div>
            <div className="flex items-center gap-3">
              <LanguageToggle lang={lang} onToggle={onToggleLanguage} />
              <button 
                onClick={handleCancelClick}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2"
                title={t.quiz.cancel}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-900 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 leading-tight">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.type === 'radio' && question.options?.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onAnswer(opt.value)}
                className={`w-full text-left px-6 py-5 rounded-xl border transition-all duration-200 flex items-center justify-between group
                  ${answers[question.id] === opt.value 
                    ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' 
                    : 'border-slate-200 hover:border-slate-900 hover:bg-slate-50'
                  }`}
              >
                <span className={`font-medium group-hover:text-slate-900 ${answers[question.id] === opt.value ? 'text-slate-900' : 'text-slate-700'}`}>
                  {opt.label}
                </span>
                <ChevronRight className={`w-5 h-5 transition-all ${answers[question.id] === opt.value ? 'text-slate-900 opacity-100' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}

            {question.type === 'number' && (
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="number"
                    min={question.min}
                    max={question.max}
                    value={numericInput}
                    onChange={(e) => setNumericInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNumericSubmit()}
                    placeholder="0"
                    className="w-full px-6 py-5 text-3xl font-bold border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 placeholder:text-slate-200"
                    autoFocus
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    ({t.quiz.inputPlaceholder})
                  </div>
                </div>
                <button
                  onClick={handleNumericSubmit}
                  disabled={!numericInput}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {t.quiz.confirm}
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Controls */}
        <div className="flex justify-start">
           <button 
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium px-2 py-3 transition-colors"
            >
              <ArrowLeft size={16} />
              {currentQuestionIndex === 0 ? t.quiz.backStart : t.quiz.prevQuestion}
            </button>
        </div>
      </div>
    </div>
  );
};
