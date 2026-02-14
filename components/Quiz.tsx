
import React, { useState } from 'react';
import { Trophy, Zap } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../constants';

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx: number) => {
    if (idx === QUIZ_QUESTIONS[current].correctAnswer) setScore(score + 1);
    if (current + 1 < QUIZ_QUESTIONS.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  return (
    <div className="bg-[#0a2540] py-24 text-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit mx-auto text-sm font-medium mb-6">
          <Zap className="w-4 h-4 text-[#f5a623]" /> Teste Seus Conhecimentos
        </span>
        <h2 className="text-5xl font-black mb-6">Quiz de Construção Civil</h2>
        <p className="text-white/60 max-w-2xl mx-auto font-medium">
          Divirta-se testando seus conhecimentos sobre construção civil. Aprenda enquanto joga!
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-12 text-gray-800 shadow-2xl">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400 font-bold">Pergunta {current + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="flex items-center gap-2 text-[#f5a623] font-bold">
                  <Trophy className="w-5 h-5" /> {score} pontos
                </span>
              </div>
              
              <div className="w-full bg-gray-100 h-2 rounded-full mb-12">
                <div 
                  className="bg-[#f5a623] h-full rounded-full transition-all duration-500"
                  style={{ width: `${((current + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              <h3 className="text-3xl font-black mb-12 leading-tight">
                {QUIZ_QUESTIONS[current].question}
              </h3>

              <div className="grid gap-4">
                {QUIZ_QUESTIONS[current].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="flex items-center gap-6 w-full p-6 text-left border-2 border-gray-100 rounded-3xl hover:border-[#0a2540] hover:bg-gray-50 transition-all group"
                  >
                    <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-100 rounded-full font-black text-lg group-hover:bg-[#0a2540] group-hover:text-white transition-all">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-bold text-xl">{opt}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <Trophy className="w-20 h-20 text-[#f5a623] mx-auto mb-8" />
              <h3 className="text-4xl font-black mb-4">Quiz Finalizado!</h3>
              <p className="text-gray-500 text-lg mb-12 font-medium">
                Você acertou {score} de {QUIZ_QUESTIONS.length} questões.
              </p>
              <button onClick={() => { setCurrent(0); setScore(0); setShowResult(false); }} className="bg-[#0a2540] text-white px-12 py-5 rounded-2xl font-black hover:bg-black transition-all">
                Tentar Novamente
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
