import { useState, useEffect } from 'react';
import { QUESTIONS_DATA, CONTENT } from '@/data/content';
import { ViewState, Language } from '@/types';

export function useDecisionLogic() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<ViewState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [paymentStatus, setPaymentStatus] = useState<string>('');

  const t = CONTENT[lang];
  const questions = QUESTIONS_DATA[lang];

  useEffect(() => {
    // Check for window to avoid SSR errors
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('status') === 'success') {
        const savedScore = localStorage.getItem('decision_app_score');
        if (savedScore) {
          setFinalScore(parseInt(savedScore, 10));
          setView('result');
        }
      }
    }
  }, []);

  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setView('quiz');
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setView('landing');
    }
  };

  const saveAnswerAndProceed = (value: number) => {
    const currentQ = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 250);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, number>) => {
    setLoading(true);

    let score = 0;
    questions.forEach((q) => {
      const val = finalAnswers[q.id];
      if (q.type === 'radio') {
        score += val;
      } else if (q.type === 'number') {
        if (val > 8) score += 3;
        else if (val > 4) score += 2;
        else score += 1;
      }
    });

    setFinalScore(score);
    if (typeof window !== 'undefined') {
        localStorage.setItem('decision_app_score', score.toString());
    }

    setTimeout(() => {
      setLoading(false);
      setView('paywall');
    }, 1500);
  };

  const handlePayment = () => {
    setLoading(true);
    setPaymentStatus(t.redirect);
    window.location.href = 'https://buy.stripe.com/test_6oUdR9e0l1qLf1Q44ldwc00';
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'pt' : 'en');
  };

  return {
    lang,
    view, 
    setView,
    currentQuestionIndex,
    answers,
    loading,
    finalScore,
    paymentStatus,
    t,
    questions,
    handleStart,
    handleBack,
    saveAnswerAndProceed,
    handlePayment,
    toggleLanguage
  };
}
