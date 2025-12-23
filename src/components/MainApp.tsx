'use client';

import { useDecisionLogic } from '@/hooks/useDecisionLogic';
import { LandingView } from './views/LandingView';
import { QuizView } from './views/QuizView';
import { PaywallView } from './views/PaywallView';
import { ResultView } from './views/ResultView';
import { LoadingView } from './views/LoadingView';

export default function MainApp() {
  const {
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
  } = useDecisionLogic();

  if (loading) {
    return <LoadingView message={paymentStatus || t.loading} />;
  }

  if (view === 'landing') {
    return (
      <LandingView 
        t={t} 
        lang={lang} 
        onToggleLanguage={toggleLanguage} 
        onStart={handleStart} 
      />
    );
  }

  if (view === 'quiz') {
    return (
      <QuizView 
        t={t}
        lang={lang}
        onToggleLanguage={toggleLanguage}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        onAnswer={saveAnswerAndProceed}
        onBack={handleBack}
        onCancel={() => setView('landing')}
      />
    );
  }

  if (view === 'paywall') {
    return (
      <PaywallView
        t={t}
        lang={lang}
        onToggleLanguage={toggleLanguage}
        onPayment={handlePayment}
      />
    );
  }

  if (view === 'result') {
    return (
      <ResultView
        t={t}
        lang={lang}
        onToggleLanguage={toggleLanguage}
        finalScore={finalScore}
      />
    );
  }

  return null;
}
