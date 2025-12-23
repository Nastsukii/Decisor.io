
interface FooterProps {
  t: any; // Using any for simplicity with the nested content object, or could define a type
}

export const Footer = ({ t }: FooterProps) => (
  <footer className="bg-slate-900 border-t border-slate-800 w-full mt-auto">
    <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <div className="font-bold text-white text-2xl tracking-tight mb-2">Lacb</div>
        <div className="h-0.5 w-8 bg-slate-800 mx-auto mb-3" />
        <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">{t.footer.slogan}</p>
      </div>
      
      <div className="flex flex-col gap-4 text-sm text-slate-500">
        <div className="flex items-center justify-center gap-6">
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms</span>
          <span className="w-1 h-1 bg-slate-800 rounded-full" />
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy</span>
          <span className="w-1 h-1 bg-slate-800 rounded-full" />
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Contact</span>
        </div>
        
        <div className="pt-4 mt-4 border-t border-slate-800/50 w-full">
          <p className="opacity-60">&copy; {new Date().getFullYear()} Lacb. {t.footer.rights}</p>
        </div>
      </div>
    </div>
  </footer>
);
