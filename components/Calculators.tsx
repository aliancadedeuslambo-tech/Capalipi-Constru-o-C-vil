
import React, { useState } from 'react';
import { Layers, RefreshCw, Calculator, Maximize2, CircleDollarSign } from 'lucide-react';

const Calculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cimento' | 'areia' | 'blocos' | 'custo' | 'area'>('cimento');
  const [result, setResult] = useState<string | null>(null);
  const [inputs, setInputs] = useState({ area: '', espessura: '', volume: '', comprimento: '', altura: '', padrao: 'Médio' });

  const handleCalculate = () => {
    let res = "";
    const a = parseFloat(inputs.area) || 0;
    const e = parseFloat(inputs.espessura) || 0;
    const v = parseFloat(inputs.volume) || 0;
    const l = parseFloat(inputs.comprimento) || 0;
    const h = parseFloat(inputs.altura) || 0;

    switch (activeTab) {
      case 'cimento':
        const totalBags = Math.ceil((a * (e / 100)) * 7);
        res = `Necessário aproximadamente ${totalBags} sacos de cimento (50kg).`;
        break;
      case 'areia':
        res = `Para ${v}m³ de concreto: ~${(v * 0.44).toFixed(2)}m³ de areia e ${(v * 0.88).toFixed(2)}m³ de brita.`;
        break;
      case 'blocos':
        const totalBlocks = Math.ceil(l * h * 12.5);
        res = `Necessário aproximadamente ${totalBlocks} blocos.`;
        break;
      case 'custo':
        const price = inputs.padrao === 'Luxo' ? 120000 : (inputs.padrao === 'Médio' ? 60000 : 30000);
        res = `Estimativa de custo: ${(a * price).toLocaleString('pt-PT')} AKZ.`;
        break;
      case 'area':
        res = `Recomendação: ${(a*0.6).toFixed(0)}m² construção, ${(a*0.2).toFixed(0)}m² lazer, ${(a*0.2).toFixed(0)}m² verde.`;
        break;
    }
    setResult(res);
  };

  const tabs = [
    { id: 'cimento', label: 'Cimento', icon: <Layers className="w-4 h-4" /> },
    { id: 'areia', label: 'Areia/Brita', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'blocos', label: 'Blocos', icon: <Layers className="w-4 h-4" /> },
    { id: 'custo', label: 'Custo', icon: <CircleDollarSign className="w-4 h-4" /> },
    { id: 'area', label: 'Área', icon: <Maximize2 className="w-4 h-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id as any); setResult(null); }}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${
              activeTab === tab.id ? 'bg-[#f5a623] text-white shadow-xl' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[40px] shadow-2xl border border-gray-50 p-12">
        <div className="mb-10">
          <h3 className="text-2xl font-black text-[#0a2540] flex items-center gap-3 mb-2">
            {activeTab === 'area' ? <Maximize2 className="text-[#f5a623]" /> : (activeTab === 'areia' ? <RefreshCw className="text-[#f5a623]" /> : (activeTab === 'custo' ? <CircleDollarSign className="text-[#f5a623]" /> : <Layers className="text-[#f5a623]" />))} 
            {tabs.find(t => t.id === activeTab)?.label === 'Cimento' ? 'Calculadora de Cimento' : (tabs.find(t => t.id === activeTab)?.label === 'Areia/Brita' ? 'Calculadora de Areia e Brita' : (tabs.find(t => t.id === activeTab)?.label === 'Blocos' ? 'Calculadora de Blocos' : (tabs.find(t => t.id === activeTab)?.label === 'Custo' ? 'Estimativa de Custo' : 'Calculadora de Área e Ocupação')))}
          </h3>
          <p className="text-gray-400 font-medium">
             {activeTab === 'area' ? 'Insira a área total do terreno e veja a distribuição recomendada.' : (activeTab === 'areia' ? 'Calcule a quantidade de areia e brita para seu concreto.' : (activeTab === 'custo' ? 'Obtenha uma estimativa básica do custo da sua obra.' : (activeTab === 'blocos' ? 'Calcule quantos blocos são necessários para sua parede.' : 'Calcule a quantidade de sacos de cimento necessários para sua laje ou piso.')))}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {(activeTab === 'cimento' || activeTab === 'custo' || activeTab === 'area') && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{activeTab === 'area' ? 'Área total do terreno (m²)' : 'Área (m²)'}</label>
              <input type="number" value={inputs.area} onChange={e => setInputs({...inputs, area: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none" placeholder="Ex: 50" />
            </div>
          )}
          {activeTab === 'cimento' && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Espessura (cm)</label>
              <input type="number" value={inputs.espessura} onChange={e => setInputs({...inputs, espessura: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none" placeholder="Ex: 10" />
            </div>
          )}
          {activeTab === 'areia' && (
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Volume de concreto (m³)</label>
              <input type="number" value={inputs.volume} onChange={e => setInputs({...inputs, volume: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none" placeholder="Ex: 5" />
            </div>
          )}
          {activeTab === 'blocos' && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Comprimento da parede (m)</label>
                <input type="number" value={inputs.comprimento} onChange={e => setInputs({...inputs, comprimento: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none" placeholder="Ex: 10" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Altura da parede (m)</label>
                <input type="number" value={inputs.altura} onChange={e => setInputs({...inputs, altura: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none" placeholder="Ex: 3" />
              </div>
            </>
          )}
          {activeTab === 'custo' && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Padrão da obra</label>
              <select value={inputs.padrao} onChange={e => setInputs({...inputs, padrao: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none">
                <option>Simples</option>
                <option>Médio</option>
                <option>Luxo</option>
              </select>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handleCalculate} className="flex-grow bg-[#f5a623] hover:bg-[#d98c1d] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
            <Calculator className="w-5 h-5" /> Calcular
          </button>
          <button onClick={() => { setInputs({ area: '', espessura: '', volume: '', comprimento: '', altura: '', padrao: 'Médio' }); setResult(null); }} className="p-4 rounded-xl border-2 border-gray-200 text-gray-400 hover:text-gray-600 transition-all">
            <RefreshCw className="w-6 h-6" />
          </button>
        </div>

        {result && (
          <div className="mt-8 p-6 bg-orange-50 rounded-2xl border-l-8 border-[#f5a623] animate-in slide-in-from-top-4 duration-300">
            <p className="text-[#0a2540] font-bold text-xl">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculators;
