import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Copy, 
  Download, 
  FileText, 
  Layout, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import MathRenderer from './MathRenderer';

interface ManualTyperProps {
  onBack: () => void;
  onSave?: (content: string) => void;
}

export default function ManualTyper({ onBack, onSave }: ManualTyperProps) {
  const [input, setInput] = useState<string>('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
    alert("Content copied!");
  };

  const downloadAsWord = () => {
    const content = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'></head>
      <body>
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; white-space: pre-wrap;">
          ${input.replace(/\n/g, '<br/>')}
        </div>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Formatted_Paper.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white rounded-xl transition-colors text-slate-500"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2 text-blue-600 font-bold">
          <Layout size={20} />
          <span>PASTE & FORMAT (PRO TYPER)</span>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Editor Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 italic">1. Paste your text here</h3>
            <button 
              onClick={() => setInput('')}
              className="text-xs font-bold text-slate-400 hover:text-red-500 flex items-center gap-1"
            >
              <RotateCcw size={12} /> Clear
            </button>
          </div>

          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste your questions here... 
Example: Solve $x^2 + 5x + 6 = 0$
یا یہاں اردو ٹائپ کریں۔"
            className="flex-1 min-h-[400px] p-6 rounded-2xl border-2 border-slate-100 focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700 resize-none bg-slate-50/30"
            dir={input.match(/[\u0600-\u06FF]/) ? 'rtl' : 'ltr'}
          />
          
          <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <p className="text-xs text-blue-600 font-medium">
              <strong>Tip:</strong> Use {'$'} math symbols {'$'} for equations. 
              Example: {'$\\frac{a}{b}$, $x^2$, $\\sqrt{4}$'}.
            </p>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/2 flex flex-col bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <FileText size={18} className="text-blue-500" />
              2. Live Beautiful Preview
            </h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={copyToClipboard}
                disabled={!input}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600 disabled:opacity-30"
              >
                <Copy size={18} />
              </button>
              {onSave && (
                <button 
                  onClick={() => onSave(input)}
                  disabled={!input}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 disabled:opacity-30"
                >
                  <Sparkles size={14} />
                  Add to Paper
                </button>
              )}
              <button 
                onClick={downloadAsWord}
                disabled={!input}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-black transition-all flex items-center gap-2 disabled:opacity-30"
              >
                <Download size={14} />
                Word
              </button>
            </div>
          </div>

          <div className="flex-1 p-8 overflow-y-auto max-h-[500px] bg-white m-4 rounded-2xl shadow-inner border border-slate-100">
            {input ? (
              <div 
                className="text-slate-800 font-medium whitespace-pre-wrap leading-relaxed text-lg"
                dir={input.match(/[\u0600-\u06FF]/) ? 'rtl' : 'ltr'}
              >
                <MathRenderer content={input} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-300 text-center space-y-4">
                <Sparkles size={64} opacity={0.2} strokeWidth={1} />
                <p className="font-bold max-w-xs">Your beautifully formatted content will appear here instantly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
