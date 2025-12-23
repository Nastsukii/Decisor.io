import { Question } from '@/types';

export const CONTENT = {
  en: {
    nav: {
      title: "Decisor.io",
      start: "Start Now"
    },
    landing: {
      badge: "Neutral & Private",
      heroTitle: "Turn uncertainty into",
      heroHighlight: "logical decision.",
      heroDesc: "A minimalist tool for entrepreneurs and leaders. Remove emotion from the equation in under 2 minutes.",
      cta: "Start Analysis",
      features: {
        fast: { title: "Fast", desc: "6 objective questions designed for immediate clarity." },
        private: { title: "Private", desc: "No database. Your answers are not saved on our servers." },
        direct: { title: "Direct", desc: "Binary result: go ahead or back off." }
      }
    },
    quiz: {
      question: "Question",
      of: "of",
      cancel: "Cancel",
      cancelConfirm: "Do you want to cancel the analysis and return to start?",
      backStart: "Back to Start",
      prevQuestion: "Previous Question",
      confirm: "Confirm",
      inputPlaceholder: "0 - 10"
    },
    paywall: {
      title: "Analysis Complete",
      desc: "We processed your 6 answers. The algorithm has generated a recommendation based on the risks and intuition provided.",
      paymentType: "One-time Payment",
      cta: "Unlock Result",
      secure: "Payment via Stripe"
    },
    result: {
      techSummary: "Technical Summary",
      riskScore: "Risk Score",
      date: "Date",
      share: "Share on WhatsApp",
      shareText: "My result on Decisor:",
      newAnalysis: "Start New Analysis",
      results: {
        green: {
          title: "Green Light: Proceed",
          desc: "Your analysis indicates a favorable scenario. Risks are low and clarity is high. It is a good time to act."
        },
        yellow: {
          title: "Yellow Light: Caution",
          desc: "There are points of concern. The decision is not prohibitive, but requires a mitigation plan for the identified risks."
        },
        red: {
          title: "Red Light: Stop",
          desc: "The level of risk and uncertainty is too high. We recommend not proceeding with this decision at this time."
        }
      }
    },
    footer: {
      rights: "All rights reserved.",
      slogan: "Clarity through logic."
    },
    loading: "Processing data...",
    redirect: "Redirecting to Stripe..."
  },
  pt: {
    nav: {
      title: "Decisor.io",
      start: "Iniciar"
    },
    landing: {
      badge: "Neutro & Privado",
      heroTitle: "Transforme incerteza em",
      heroHighlight: "decisão lógica.",
      heroDesc: "Uma ferramenta minimalista para empreendedores. Remova a emoção da equação em menos de 2 minutos.",
      cta: "Começar Análise",
      features: {
        fast: { title: "Rápido", desc: "6 perguntas objetivas desenhadas para clareza imediata." },
        private: { title: "Privado", desc: "Sem banco de dados. Suas respostas não são salvas." },
        direct: { title: "Direto", desc: "Resultado binário: vá em frente ou recue." }
      }
    },
    quiz: {
      question: "Questão",
      of: "de",
      cancel: "Cancelar",
      cancelConfirm: "Deseja cancelar a análise e voltar ao início?",
      backStart: "Voltar ao Início",
      prevQuestion: "Pergunta Anterior",
      confirm: "Confirmar",
      inputPlaceholder: "0 - 10"
    },
    paywall: {
      title: "Análise Concluída",
      desc: "Processamos suas 6 respostas. O algoritmo gerou uma recomendação baseada nos riscos e intuição fornecidos.",
      paymentType: "Pagamento Único",
      cta: "Desbloquear Resultado",
      secure: "Pagamento via Stripe"
    },
    result: {
      techSummary: "Resumo Técnico",
      riskScore: "Score de Risco",
      date: "Data",
      share: "Compartilhar no WhatsApp",
      shareText: "Meu resultado no Decisor:",
      newAnalysis: "Iniciar Nova Análise",
      results: {
        green: {
          title: "Luz Verde: Prossiga",
          desc: "Sua análise indica um cenário favorável. Os riscos são baixos e a clareza é alta. É um bom momento para agir."
        },
        yellow: {
          title: "Luz Amarela: Cautela",
          desc: "Existem pontos de atenção. A decisão não é proibitiva, mas exige um plano de mitigação para os riscos identificados."
        },
        red: {
          title: "Luz Vermelha: Pare",
          desc: "O nível de risco e incerteza é muito alto. Recomendamos não prosseguir com esta decisão no momento atual."
        }
      }
    },
    footer: {
      rights: "Todos os direitos reservados.",
      slogan: "Clareza através da lógica."
    },
    loading: "Processando dados...",
    redirect: "Redirecionando para o Stripe..."
  }
};

export const QUESTIONS_DATA: Record<string, Question[]> = {
  en: [
    {
      id: 1,
      text: "What is the perceived risk level of this decision?",
      type: "radio",
      options: [
        { label: "Low risk (Safe)", value: 1 },
        { label: "Moderate risk (Manageable)", value: 2 },
        { label: "High risk (Dangerous)", value: 3 }
      ]
    },
    {
      id: 2,
      text: "What is the potential financial impact?",
      type: "radio",
      options: [
        { label: "Insignificant (< €100)", value: 1 },
        { label: "Considerable (€100 - €1000)", value: 2 },
        { label: "Significant (> €1000)", value: 3 }
      ]
    },
    {
      id: 3,
      text: "Do you have all the necessary information?",
      type: "radio",
      options: [
        { label: "Yes, I have total clarity", value: 1 },
        { label: "Missing some details", value: 2 },
        { label: "No, it's a shot in the dark", value: 3 }
      ]
    },
    {
      id: 4,
      text: "Is this decision reversible?",
      type: "radio",
      options: [
        { label: "Easily reversible", value: 1 },
        { label: "Hard to reverse", value: 2 },
        { label: "Irreversible", value: 3 }
      ]
    },
    {
      id: 5,
      text: "What is your gut feeling?",
      type: "radio",
      options: [
        { label: "I feel peace / It's right", value: 1 },
        { label: "Neutral / Indifferent", value: 2 },
        { label: "Anxiety / Knot in stomach", value: 3 }
      ]
    },
    {
      id: 6,
      text: "From 0 to 10, how urgent is this decision?",
      type: "number",
      min: 0,
      max: 10
    }
  ],
  pt: [
    {
      id: 1,
      text: "Qual é o nível de risco percebido nesta decisão?",
      type: "radio",
      options: [
        { label: "Baixo risco (Seguro)", value: 1 },
        { label: "Risco moderado (Gerenciável)", value: 2 },
        { label: "Alto risco (Perigoso)", value: 3 }
      ]
    },
    {
      id: 2,
      text: "Qual é o impacto financeiro potencial?",
      type: "radio",
      options: [
        { label: "Insignificante (< 100€)", value: 1 },
        { label: "Considerável (100€ - 1000€)", value: 2 },
        { label: "Significativo (> 1000€)", value: 3 }
      ]
    },
    {
      id: 3,
      text: "Você possui todas as informações necessárias?",
      type: "radio",
      options: [
        { label: "Sim, tenho clareza total", value: 1 },
        { label: "Faltam alguns detalhes", value: 2 },
        { label: "Não, é um tiro no escuro", value: 3 }
      ]
    },
    {
      id: 4,
      text: "Esta decisão é reversível?",
      type: "radio",
      options: [
        { label: "Facilmente reversível", value: 1 },
        { label: "Difícil de reverter", value: 2 },
        { label: "Irreversível", value: 3 }
      ]
    },
    {
      id: 5,
      text: "Qual o seu nível de intuição (gut feeling)?",
      type: "radio",
      options: [
        { label: "Sinto paz / É o certo", value: 1 },
        { label: "Neutro / Indiferente", value: 2 },
        { label: "Ansiedade / Aperto no estômago", value: 3 }
      ]
    },
    {
      id: 6,
      text: "De 0 a 10, qual a urgência desta decisão?",
      type: "number",
      min: 0,
      max: 10
    }
  ]
};
