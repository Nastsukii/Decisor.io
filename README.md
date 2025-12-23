# Decisor.io

**Decisor.io** is a minimalist decision-making tool designed for entrepreneurs and leaders. It helps remove emotion from the equation, transforming uncertainty into logical decisions in under 2 minutes.

## 🚀 About the Project

Decisor.io guides users through a structured 6-question framework to assess risks, financial impact, reversibility, and intuition. Based on the answers, an algorithm calculates a risk score and provides a clear "Green Light," "Yellow Light," or "Red Light" recommendation.

### Key Features
*   **Speed**: 6 objective questions designed for immediate clarity.
*   **Privacy**: No database. Your answers are not saved on our servers.
*   **Direct Results**: Binary output (Go / Caution / Stop).
*   **Bilingual**: Full support for English (EN) and Portuguese (PT-BR).
*   **MVC Architecture**: Built with a clean separation of concerns (Model-View-Controller).

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Architecture**: MVC (Model-View-Controller) pattern adapted for React.

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/decisor.io.git
    cd decisor.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

The project follows a strict MVC pattern for better maintainability:

```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── common/          # Shared components (Footer, LanguageToggle)
│   ├── views/           # View components (Landing, Quiz, Result)
│   └── MainApp.tsx      # Main application controller/orchestrator
├── data/                # Static content and translations (Model)
├── hooks/               # Business logic and state management (Controller)
└── types/               # TypeScript definitions
```

## 🔒 Logic & Privacy

*   **Scoring Algorithm**: Answers are weighted based on risk and impact.
*   **Local Storage**: Results are temporarily cached in the browser's `localStorage` for the session but persist nowhere else.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
