import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ClipboardCheck, 
  GraduationCap, 
  Printer, 
  RefreshCcw, 
  Trophy,
  Sparkles,
  Play,
  FileText,
  BookOpen,
  Layout
} from 'lucide-react';
import { useState } from 'react';
import MathRenderer from './components/MathRenderer';
import AITranscriber from './components/AITranscriber';
import ManualTyper from './components/ManualTyper';
import { mcqs, shortQuestionsQ2, shortQuestionsQ3, shortQuestionsQ4, longQuestions } from './data/quiz';
import { mcqsPart2, shortQuestionsQ2Part2, shortQuestionsQ3Part2, shortQuestionsQ4Part2, longQuestionsPart2 } from './data/quizPart2';
import { physicsMcqsPart2, physicsShortQ2Part2, physicsShortQ3Part2, physicsShortQ4Part2, physicsLongQuestionsPart2 } from './data/physicsPart2';

type AppState = 'welcome' | 'quiz' | 'results' | 'review' | 'transcriber' | 'manualTyper';
type ClassLevel = 'part-1' | 'part-2';
type Subject = 'math' | 'physics';

export default function App() {
  const [state, setState] = useState<AppState>('welcome');
  const [classLevel, setClassLevel] = useState<ClassLevel>('part-1');
  const [subject, setSubject] = useState<Subject>('math');
  const [customPaperContent, setCustomPaperContent] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  const getScopedData = () => {
    if (subject === 'math') {
      return {
        mcqs: classLevel === 'part-1' ? mcqs : mcqsPart2,
        shortQ2: classLevel === 'part-1' ? shortQuestionsQ2 : shortQuestionsQ2Part2,
        shortQ3: classLevel === 'part-1' ? shortQuestionsQ3 : shortQuestionsQ3Part2,
        shortQ4: classLevel === 'part-1' ? shortQuestionsQ4 : shortQuestionsQ4Part2,
        long: classLevel === 'part-1' ? longQuestions : longQuestionsPart2,
      };
    } else {
      // Physics only has Part-2 for now, fallback to Part-2 if Part-1 is selected for physics
      return {
        mcqs: physicsMcqsPart2,
        shortQ2: physicsShortQ2Part2,
        shortQ3: physicsShortQ3Part2,
        shortQ4: physicsShortQ4Part2,
        long: physicsLongQuestionsPart2,
      };
    }
  };

  const {
    mcqs: selectedMcqs,
    shortQ2: selectedShortQ2,
    shortQ3: selectedShortQ3,
    shortQ4: selectedShortQ4,
    long: selectedLong
  } = getScopedData();

  const startQuiz = () => {
    setState('quiz');
    setCurrentIdx(0);
    setAnswers({});
  };

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [selectedMcqs[currentIdx].id]: optionId }));
    
    // Auto-advance if not the last question
    if (currentIdx < selectedMcqs.length - 1) {
      setTimeout(() => setCurrentIdx(prev => prev + 1), 300);
    }
  };

  const finishQuiz = () => {
    let finalScore = 0;
    selectedMcqs.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setState('results');
    
    if (finalScore > 15) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const printPaper = () => {
    window.print();
  };

  const downloadAsDoc = () => {
    const content = document.getElementById('paper-content')?.innerHTML;
    if (!content) return;

    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Math Exam Paper</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; }
        .text-center { text-align: center; }
        .font-bold { font-weight: bold; }
        .text-xl { font-size: 1.25rem; }
        .text-4xl { font-size: 2.25rem; }
        .border-b-4 { border-bottom: 4px solid #000; }
        .mb-12 { margin-bottom: 3rem; }
        .bg-slate-900 { background-color: #0f172a; color: #ffffff; padding: 5px 10px; }
        .grid { display: block; }
        .space-y-8 > * + * { margin-top: 2rem; }
        table { width: 100%; border-collapse: collapse; }
        td { vertical-align: top; padding: 5px; }
        .math-symbol { font-style: italic; }
      </style>
      </head><body>
    `;
    const footer = "</body></html>";
    const sourceHTML = header + content + footer;
    
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Math_Paper_Wasif_Zahid.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  return (
    <div className="min-h-screen math-grid font-sans text-slate-900">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <GraduationCap size={20} />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-none">
              {subject === 'math' ? 'ICS Math Master' : 'ICS Physics Master'}
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Wasif Zahid • Class {classLevel === 'part-1' ? 'Part-1' : 'Part-2'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {state === 'quiz' && (
            <div className="text-right hidden sm:block">
              <span className="text-sm font-mono font-bold text-blue-600">
                {currentIdx + 1} / {selectedMcqs.length}
              </span>
              <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / selectedMcqs.length) * 100}%` }}
                />
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setState('review')}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <BookOpen size={16} />
            Full Paper
          </button>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {state === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 text-center"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <ClipboardCheck size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 italic">
                {subject === 'math' ? 'Mathematics' : 'Physics'} Final Assessment
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto font-medium">
                Ready for the {classLevel === 'part-1' ? 'ICS/FSc Part-1' : 'ICS/FSc Part-2'} {subject === 'math' ? 'Math' : 'Physics'} challenge? This assessment covers {selectedMcqs.length} MCQs and Subjective Questions prepared by Prof. Wasif Zahid.
              </p>
              
              <div className="flex flex-col gap-6 mb-10 max-w-sm mx-auto">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Select Subject</p>
                  <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
                    <button 
                      onClick={() => setSubject('math')}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${subject === 'math' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Mathematics
                    </button>
                    <button 
                      onClick={() => setSubject('physics')}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${subject === 'physics' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Physics
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Select Class Level</p>
                  <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
                    <button 
                      onClick={() => setClassLevel('part-1')}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${classLevel === 'part-1' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Class Part-1
                    </button>
                    <button 
                      onClick={() => setClassLevel('part-2')}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${classLevel === 'part-2' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Class Part-2
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-sm mx-auto">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Total MCQs</p>
                  <p className="text-xl font-bold text-slate-900">{selectedMcqs.length}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Total Marks</p>
                  <p className="text-xl font-bold text-slate-900">100</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 justify-center">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-left flex items-center gap-2">
                    <BookOpen size={16} /> Existing Assessments
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={startQuiz}
                      className="flex-1 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                    >
                      Start Quiz
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setState('review')}
                      className="flex-1 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all"
                    >
                      View Full Paper
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <p className="text-sm font-bold text-purple-400 uppercase tracking-widest text-left flex items-center gap-2">
                    <Sparkles size={16} /> Advanced AI Tools
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                      onClick={() => setState('transcriber')}
                      className="py-5 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 border-b-4 border-purple-800"
                    >
                      <Sparkles size={20} />
                      <span>Scan Handwriting</span>
                    </button>
                    <button 
                      onClick={() => setState('manualTyper')}
                      className="py-5 bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 border-b-4 border-blue-700"
                    >
                      <Layout size={20} />
                      <span>Paste & Format</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Supports Urdu, English & Math Equations</p>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'transcriber' && (
            <motion.div
              key="transcriber"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <AITranscriber 
                onBack={() => setState('welcome')} 
                onSave={(content) => {
                  setCustomPaperContent(content);
                  setState('review');
                }}
              />
            </motion.div>
          )}

          {state === 'manualTyper' && (
            <motion.div
              key="manualTyper"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ManualTyper 
                onBack={() => setState('welcome')} 
                onSave={(content) => {
                  setCustomPaperContent(content);
                  setState('review');
                }}
              />
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 mb-6">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    {currentIdx + 1}
                  </span>
                  Question
                </div>

                <div className="text-xl md:text-2xl font-semibold text-slate-800 mb-10 leading-relaxed">
                  <MathRenderer content={selectedMcqs[currentIdx].text} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMcqs[currentIdx].options.map((opt) => (
                    <button 
                      key={opt.id}
                      onClick={() => handleAnswer(opt.id)}
                      className={`group relative p-5 rounded-2xl border-2 text-left transition-all ${
                        answers[selectedMcqs[currentIdx].id] === opt.id
                          ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50'
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                          answers[selectedMcqs[currentIdx].id] === opt.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          {opt.id.toUpperCase()}
                        </span>
                        <div className="pt-0.5 text-slate-700 font-medium overflow-x-auto">
                          <MathRenderer content={opt.text} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-2 text-slate-500 font-bold px-4 py-2 rounded-xl hover:bg-slate-100 disabled:opacity-0 transition-all"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>

                {currentIdx === selectedMcqs.length - 1 ? (
                  <button 
                    onClick={finishQuiz}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-black hover:-translate-y-1 transition-all flex items-center gap-2"
                  >
                    Finish Quiz
                    <CheckCircle2 size={20} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setCurrentIdx(p => Math.min(selectedMcqs.length - 1, p + 1))}
                    className="flex items-center gap-2 text-slate-500 font-bold px-4 py-2 rounded-xl hover:bg-slate-100 transition-all"
                  >
                    Skip
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {state === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 text-center"
            >
              <div className="w-24 h-24 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <Trophy size={48} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Quiz Completed!</h2>
              <p className="text-slate-500 font-medium mb-12">Here's how you performed in the MCQs</p>
              
              <div className="flex justify-center items-end gap-2 mb-12">
                <span className="text-8xl font-black text-slate-900 tracking-tighter">{score}</span>
                <span className="text-3xl font-bold text-slate-300 mb-3">/ 20</span>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-12 inline-block">
                <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-widest">Accuracy</p>
                <div className="flex items-center gap-4">
                   <div className="w-48 h-3 bg-slate-200 rounded-full overflow-hidden">
                     <div 
                      className="h-full bg-green-500"
                      style={{ width: `${(score / 20) * 100}%` }}
                     />
                   </div>
                   <span className="font-mono font-bold text-green-600">
                    {Math.round((score / 20) * 100)}%
                   </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={startQuiz}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCcw size={20} />
                  Try Again
                </button>
                <button 
                  onClick={() => setState('review')}
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-black transition-all"
                >
                  Review All Questions
                </button>
              </div>
            </motion.div>
          )}

          {state === 'review' && (
            <motion.div 
              key="review"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 print:shadow-none print:border-none print:p-0"
            >
              <div id="paper-content">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b-4 border-slate-900 pb-8 gap-4 print:mb-8">
                  <div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                      {subject === 'math' ? 'Mathematics' : 'Physics'}
                    </h1>
                    <p className="text-lg font-bold text-blue-600">{classLevel === 'part-1' ? 'ICS/FSc Part-1' : 'ICS/FSc Part-2'} • Session Final</p>
                  </div>
                  <div className="text-right print:text-left">
                    <p className="font-bold text-slate-900">Teacher: Wasif Zahid</p>
                    <p className="text-slate-500 font-medium">Time Allowed: 3 Hours</p>
                    <p className="text-slate-500 font-medium">Total Marks: 100</p>
                  </div>
                </div>

                <div className="space-y-12">
                  {customPaperContent && (
                    <section className="print:mt-12 p-8 border-4 border-double border-purple-200 rounded-3xl bg-purple-50/30 mb-12">
                      <div className="bg-purple-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                        Custom Added Content / Transcription
                      </div>
                      <div className="text-xl font-medium text-slate-800 leading-relaxed whitespace-pre-wrap">
                        <MathRenderer content={customPaperContent} />
                      </div>
                    </section>
                  )}
                  
                  <section>
                    <div className="bg-slate-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                      Part I: Multiple Choice Questions (20 Marks)
                    </div>
                    <div className="space-y-8">
                      {selectedMcqs.map((q, idx) => (
                        <div key={q.id} className="group">
                          <div className="flex gap-4 items-start">
                            <span className="font-bold text-slate-400 pt-1">{idx + 1}.</span>
                            <div className="flex-1">
                              <p className="text-lg font-semibold text-slate-800 mb-4">
                                <MathRenderer content={q.text} />
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {q.options.map(opt => (
                                  <div key={opt.id} className="text-sm">
                                    <span className="font-bold text-slate-400 mr-2">{opt.id})</span>
                                    <MathRenderer content={opt.text} className="text-slate-600" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="print:mt-12">
                    <div className="bg-slate-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                      Part II: Short Answer Questions (Section 1 - Q.2)
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedShortQ2.map((sq) => (
                        <div key={sq.id} className="flex gap-4 items-start p-3 bg-slate-50 rounded-xl border border-slate-100 print:bg-transparent print:border-none print:p-0">
                          <span className="font-bold text-slate-400 pt-1">{sq.id.toLowerCase()})</span>
                          <div className="text-lg font-medium text-slate-800 leading-relaxed">
                            <MathRenderer content={sq.text} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="print:mt-12">
                    <div className="bg-slate-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                      Part II: Short Answer Questions (Section 2 - Q.3)
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedShortQ3.map((sq) => (
                        <div key={sq.id} className="flex gap-4 items-start p-3 bg-slate-50 rounded-xl border border-slate-100 print:bg-transparent print:border-none print:p-0">
                          <span className="font-bold text-slate-400 pt-1">{sq.id.toLowerCase()})</span>
                          <div className="text-lg font-medium text-slate-800 leading-relaxed">
                            <MathRenderer content={sq.text} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="print:mt-12">
                    <div className="bg-slate-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                      Part II: Short Answer Questions (Section 3 - Q.4)
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedShortQ4.map((sq) => (
                        <div key={sq.id} className="flex gap-4 items-start p-3 bg-slate-50 rounded-xl border border-slate-100 print:bg-transparent print:border-none print:p-0">
                          <span className="font-bold text-slate-400 pt-1">{sq.id.toLowerCase()})</span>
                          <div className="text-lg font-medium text-slate-800 leading-relaxed">
                            <MathRenderer content={sq.text} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="print:mt-12">
                    <div className="bg-slate-900 text-white px-4 py-2 inline-block rounded-lg font-bold mb-6 print:bg-slate-200 print:text-black">
                      Part III: Long Questions / Subjective
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {selectedLong.map((lq) => (
                        <div key={lq.id} className="flex gap-4 items-start p-4 bg-blue-50/50 rounded-xl border border-blue-100 print:bg-transparent print:border-none print:p-0">
                          <span className="font-bold text-blue-600 pt-1">Q.{lq.id}</span>
                          <div className="text-lg font-semibold text-slate-800 leading-relaxed italic">
                            <MathRenderer content={lq.text} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center print:hidden">
                <button 
                   onClick={() => setState('welcome')}
                   className="flex items-center gap-2 text-slate-600 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all"
                >
                  <ChevronLeft size={20} />
                  Back to Hub
                </button>
                
                <div className="flex gap-4">
                  <button 
                    onClick={downloadAsDoc}
                    className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    <BookOpen size={20} />
                    Download for MS Word
                  </button>
                  <button 
                    onClick={printPaper}
                    className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg"
                  >
                    <Printer size={20} />
                    Print Exam Paper
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 px-4 text-center text-slate-400 text-xs font-medium uppercase tracking-widest print:hidden">
        © 2026 Crafted for Wasif Zahid Education System
      </footer>
    </div>
  );
}
