import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  FileText, 
  ArrowLeft, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Download,
  Copy,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import MathRenderer from './MathRenderer';

interface AITranscriberProps {
  onBack: () => void;
  onSave?: (content: string) => void;
}

export default function AITranscriber({ onBack, onSave }: AITranscriberProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [transcribing, setTranscribing] = useState(false);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size too large. Please select a file under 10MB.");
        return;
      }
      setFile(selectedFile);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  };

  const transcribePaper = async () => {
    if (!file) return;

    setTranscribing(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const base64Data = await fileToBase64(file);
      const mimeType = file.type;

      const prompt = `
        You are a professional academic typist. Your task is to accurately transcribe the handwritten content from the provided file.
        The content could be in Urdu, English, or Mathematics (or a mix).
        
        CRITICAL MATH RULE:
        - ALWAYS wrap EVERY mathematical symbol, variable, or equation in single dollar signs (e.g., $x$, $\\frac{a}{b}$, $x^2 + y^2 = r^2$).
        - Use standard LaTeX for complex formulas.
        
        Instructions:
        1. For English text, return clean properly formatted English.
        2. For Urdu text, return clean properly formatted Urdu (Unicode).
        3. Maintain the structure of the document (headings, questions, sub-parts).
        4. If there is a diagram, describe it briefly in brackets like [Diagram: Circuit showing battery and resistor].
        5. Do not add any conversational filler. Just return the transcribed content.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Data
                }
              }
            ]
          }
        ]
      });

      const text = response.text;
      if (text) {
        setResult(text);
      } else {
        throw new Error("No text content generated.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong during transcription.");
    } finally {
      setTranscribing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  const downloadAsWord = () => {
    // Generate a simple HTML structure that Word can read as a .doc file
    const content = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'></head>
      <body>
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; white-space: pre-wrap;">
          ${result.replace(/\n/g, '<br/>')}
        </div>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', content], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Transcribed_Paper.doc';
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
        <div className="flex items-center gap-2 text-purple-600 font-bold">
          <Sparkles size={20} />
          <span>AI PAPER TRANSCRIBER</span>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        {/* Upload Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2 italic">1. Upload handwritten file</h3>
            <p className="text-sm text-slate-500 font-medium">Upload a clear photo or PDF of your handwritten paper.</p>
          </div>

          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`flex-1 min-h-[300px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 transition-all cursor-pointer ${
              file ? 'border-purple-200 bg-purple-50/30' : 'border-slate-200 hover:border-purple-400 hover:bg-slate-50'
            }`}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,application/pdf"
            />

            {preview ? (
              <div className="w-full h-full flex flex-col items-center">
                {file?.type.includes('image') ? (
                  <img src={preview} alt="Preview" className="max-h-64 rounded-xl shadow-lg mb-4 object-contain" />
                ) : (
                  <div className="w-24 h-24 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
                    <FileText size={48} />
                  </div>
                )}
                <p className="font-bold text-slate-700 truncate max-w-xs">{file?.name}</p>
                <p className="text-xs text-slate-400">{(file!.size / 1024 / 1024).toFixed(2)} MB</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); setPreview(null); setFile(null); }}
                  className="mt-4 text-xs font-bold text-red-500 hover:underline"
                >
                  Remove & Choose Another
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <p className="font-bold text-slate-700 mb-1">Click to browse or Drag & Drop</p>
                <p className="text-xs text-slate-400 italic">Supports PNG, JPG, PDF (Handwritten notes)</p>
              </div>
            )}
          </div>

          <button 
            onClick={transcribePaper}
            disabled={!file || transcribing}
            className={`mt-6 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
              !file || transcribing 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-purple-600 text-white shadow-lg shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1'
            }`}
          >
            {transcribing ? (
              <>
                <Loader2 size={24} className="animate-spin" />
                <span>Transcribing with AI...</span>
              </>
            ) : (
              <>
                <Sparkles size={24} />
                <span>Type my Paper Now!</span>
              </>
            )}
          </button>
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm animate-pulse">
              <AlertCircle size={20} className="shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Result Section */}
        <div className="w-full lg:w-1/2 flex flex-col bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              2. Transcribed Text
            </h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={copyToClipboard}
                disabled={!result}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600 disabled:opacity-30"
                title="Copy to Clipboard"
              >
                <Copy size={18} />
              </button>
              {onSave && (
                <button 
                  onClick={() => onSave(result)}
                  disabled={!result}
                  className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2 disabled:opacity-30"
                >
                  <Sparkles size={14} />
                  Add to Paper
                </button>
              )}
              <button 
                onClick={downloadAsWord}
                disabled={!result}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-black transition-all flex items-center gap-2 disabled:opacity-30"
              >
                <Download size={14} />
                Word
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto max-h-[500px]">
            {result ? (
              <div 
                className="text-slate-800 font-medium whitespace-pre-wrap leading-relaxed italic"
                dir={result.match(/[\u0600-\u06FF]/) ? 'rtl' : 'ltr'}
              >
                <MathRenderer content={result} />
              </div>
            ) : transcribing ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-pulse text-center space-y-4">
                <Loader2 size={48} className="animate-spin text-purple-600" />
                <p className="font-bold">Magic is happening...<br/><span className="text-xs font-normal">Analyzing handwriting, Urdu, and Math symbols</span></p>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-300 text-center space-y-4">
                <FileText size={64} opacity={0.3} />
                <p className="font-bold max-w-xs">Your typed content will appear here after clicking "Type my Paper Now!"</p>
              </div>
            )}
          </div>

          {result && (
            <div className="p-4 bg-purple-50 text-purple-600 text-[10px] uppercase font-bold tracking-widest text-center border-t border-purple-100">
              Generated by Google Gemini AI • High Accuracy OCR
              <button onClick={() => { setFile(null); setPreview(null); setResult(''); }} className="ml-4 hover:underline flex items-center gap-1 inline-flex">
                <RefreshCw size={10} /> Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
