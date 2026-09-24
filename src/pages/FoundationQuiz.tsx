import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, ChevronRight } from 'lucide-react';
import Seo from '../components/Seo';

const questions = [
  'Do you see cracks in your interior walls or ceilings?',
  'Do doors or windows stick or fail to close properly?',
  'Do you notice uneven or sloping floors?',
  'Is there visible water pooling near your foundation?',
  'Have you noticed gaps between walls and floors or ceilings?',
];

function getResult(score: number) {
  if (score === 0) return {
    icon: <CheckCircle size={48} className="text-green-400" />,
    headline: 'No Immediate Red Flags',
    body: 'Your answers don\'t indicate obvious foundation problems right now. However, annual inspections are still recommended — especially in Baton Rouge\'s clay soil environment. Get a free baseline assessment to document your home\'s current condition.',
    urgency: 'low',
  };
  if (score <= 2) return {
    icon: <AlertTriangle size={48} className="text-yellow-400" />,
    headline: 'Some Warning Signs Detected',
    body: 'You\'re showing a few signs that warrant a professional foundation assessment. These may be early-stage issues that are far less expensive to address now than later. A free estimate will give you a clear picture.',
    urgency: 'medium',
  };
  return {
    icon: <XCircle size={48} className="text-red-400" />,
    headline: 'Multiple Warning Signs — Act Now',
    body: 'Multiple foundation warning signs are present. In Baton Rouge\'s clay soil conditions, these symptoms can progress quickly. We strongly recommend scheduling a free professional assessment before conditions worsen and costs increase significantly.',
    urgency: 'high',
  };
}

export default function FoundationQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (yes: boolean) => {
    const newAnswers = [...answers, yes];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
  };

  const score = answers.filter(Boolean).length;
  const progress = done ? 100 : (current / questions.length) * 100;
  const result = getResult(score);

  return (
    <>
      <Seo
        title="Foundation Damage Quiz"
        description="Answer a few questions about cracks, sticking doors, and sloping floors to gauge whether your Baton Rouge home needs a professional foundation assessment."
      />

      <section className="min-h-screen bg-charcoal py-16 px-4 flex flex-col items-center justify-start">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-royal mb-2 flex items-center justify-center gap-3">
              <span className="flex-1 border-t border-royal/50 max-w-[60px]" />
              FOUNDATION DAMAGE QUIZ
              <span className="flex-1 border-t border-royal/50 max-w-[60px]" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl text-white tracking-wider">
              IS YOUR FOUNDATION AT RISK?
            </h1>
            <p className="text-white/60 font-subheading mt-3 text-sm">
              Answer 5 quick questions to assess your foundation health.
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-navy/60 rounded-full h-2 mb-8 border border-steel/20">
            <div
              className="bg-royal h-2 rounded-full transition-all duration-500"
              style={{ width: `${done ? 100 : ((current) / questions.length) * 100}%` }}
            />
          </div>
          {!done && (
            <div className="text-right text-xs text-white/50 font-subheading -mt-6 mb-8">
              Question {current + 1} of {questions.length}
            </div>
          )}

          {/* Question / Result card */}
          {!done ? (
            <div className="bg-navy border border-steel/20 rounded-xl p-8 shadow-2xl">
              <div
                key={current}
                className="animate-pulse-once"
                style={{ animation: 'fadeSlide 0.35s ease' }}
              >
                <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center font-headline text-xl text-royal mb-6 mx-auto">
                  {current + 1}
                </div>
                <h2 className="font-subheading font-semibold text-white text-xl text-center mb-8 leading-snug">
                  {questions[current]}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 text-white py-4 rounded-lg font-subheading font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <XCircle size={18} className="text-red-400" /> Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-white py-4 rounded-lg font-subheading font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={18} className="text-green-400" /> No
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="bg-navy border border-steel/20 rounded-xl p-8 shadow-2xl text-center"
              style={{ animation: 'fadeSlide 0.4s ease' }}
            >
              <div className="flex justify-center mb-4">{result.icon}</div>
              <div className="text-sm font-subheading text-white/50 mb-2">
                {score} of {questions.length} warning signs present
              </div>
              <h2 className="font-headline text-3xl text-white tracking-wider mb-4">{result.headline}</h2>
              <p className="text-white/70 font-subheading text-sm leading-relaxed mb-8">{result.body}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/free-estimate"
                  className="bg-royal hover:bg-royal/90 text-white px-8 py-4 rounded font-subheading font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Get Free Estimate <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:2254358289"
                  className="bg-charcoal border border-steel/40 hover:border-white text-white px-8 py-4 rounded font-subheading font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Call (225) 435-8289
                </a>
              </div>

              <button
                onClick={restart}
                className="mt-6 text-white/40 hover:text-white text-sm font-subheading transition-colors"
              >
                Take the quiz again
              </button>
            </div>
          )}

          {/* Answer history */}
          {answers.length > 0 && !done && (
            <div className="mt-6 flex gap-2 justify-center flex-wrap">
              {answers.map((a, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${a ? 'bg-red-500/30 text-red-300' : 'bg-green-500/20 text-green-300'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
