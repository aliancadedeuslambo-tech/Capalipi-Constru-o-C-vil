
import React from 'react';
import { 
  Building2, 
  Home, 
  HardHat, 
  ShieldCheck, 
  Star, 
  Heart, 
  Handshake,
  Droplets,
  Timer,
  Thermometer,
  AlertTriangle,
  Zap,
  Calculator,
  Layers,
  CircleDollarSign,
  Maximize2,
  CheckSquare
} from 'lucide-react';
import { Service, Job, QuizQuestion, Tip } from './types';

export const COLORS = {
  primary: '#0a2540', 
  secondary: '#f5a623',
};

export const SERVICES: Service[] = [
  {
    title: 'Construção Civil',
    description: 'Execução completa de obras residenciais e comerciais com qualidade e pontualidade.',
    features: ['Projetos personalizados', 'Materiais premium', 'Garantia total'],
    icon: 'Building2'
  },
  {
    title: 'Obras de Alto Padrão',
    description: 'Residências e empreendimentos de luxo com acabamentos sofisticados e exclusivos.',
    features: ['Design exclusivo', 'Acabamentos finos', 'Detalhes únicos'],
    icon: 'Star'
  },
  {
    title: 'Projetos Habitacionais',
    description: 'Desenvolvimento de projetos habitacionais completos do planeamento à entrega.',
    features: ['Estudo de viabilidade', 'Licenciamento', 'Gestão completa'],
    icon: 'Home'
  },
  {
    title: 'Execução de Obras',
    description: 'Gestão e execução de obras com equipas especializadas e cronograma rigoroso.',
    features: ['Equipas qualificadas', 'Prazos cumpridos', 'Qualidade garantida'],
    icon: 'HardHat'
  },
  {
    title: 'Acompanhamento Técnico',
    description: 'Supervisão técnica especializada em todas as fases do seu projeto.',
    features: ['Fiscalização', 'Relatórios', 'Suporte contínuo'],
    icon: 'ShieldCheck'
  }
];

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'Assistente Administrativo',
    type: 'Tempo Integral',
    description: 'Apoio nas atividades administrativas, gestão de documentos e atendimento a clientes.',
    requirements: ['Experiência em administração', 'Conhecimentos de Office', 'Boa comunicação']
  },
  {
    id: '2',
    title: 'Ajudante de Obra',
    type: 'Tempo Integral',
    description: 'Auxiliar nas atividades diárias do canteiro de obras, preparação de materiais e limpeza.',
    requirements: ['Disponibilidade imediata', 'Força de vontade', 'Trabalho em equipa']
  },
  {
    id: '3',
    title: 'Encarregado de Obra',
    type: 'Tempo Integral',
    description: 'Supervisão da equipa de obra, controle de qualidade e cumprimento de prazos.',
    requirements: ['Experiência comprovada', 'Liderança', 'Conhecimento técnico']
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Qual é o principal componente do cimento Portland?",
    options: ["Areia", "Clínquer", "Brita", "Cal"],
    correctAnswer: 1
  },
  {
    question: "Qual é a função das armaduras em uma estrutura de concreto?",
    options: ["Suportar compressão", "Suportar tração", "Aumentar o peso", "Decorar"],
    correctAnswer: 1
  },
  {
    question: "O que significa 'cura do concreto'?",
    options: ["Secar rápido", "Manter a hidratação", "Remover impurezas", "Pintar"],
    correctAnswer: 1
  }
];

export const TIPS: Tip[] = [
  {
    title: 'Cura do Concreto',
    description: 'Mantenha o concreto húmido por pelo menos 7 dias após a concretagem. Use lona plástica ou molhe regularmente.',
    icon: 'Droplets',
    type: 'info'
  },
  {
    title: 'Tempo de Secagem',
    description: 'Aguarde 28 dias para a cura completa do concreto antes de aplicar cargas máximas ou acabamentos.',
    icon: 'Timer',
    type: 'info'
  },
  {
    title: 'Temperatura Ideal',
    description: 'Evite concretar em temperaturas abaixo de 5°C ou acima de 35°C para garantir a qualidade.',
    icon: 'Thermometer',
    type: 'warning'
  },
  {
    title: 'Erro: Excesso de Água',
    description: 'Adicionar água em excesso ao concreto reduz sua resistência em até 30%. Siga sempre o traço correto.',
    icon: 'AlertTriangle',
    type: 'warning'
  },
  {
    title: 'Erro: Fundações Rasas',
    description: 'Economizar nas fundações pode comprometer toda a estrutura. Siga as especificações do projeto.',
    icon: 'AlertTriangle',
    type: 'warning'
  },
  {
    title: 'Boa Prática: Impermeabilização',
    description: 'Impermeabilize áreas húmidas antes do revestimento. É mais barato prevenir do que remediar.',
    icon: 'ShieldCheck',
    type: 'success'
  }
];

export const ICONS = {
  Building2: <Building2 className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  Maximize2: <Maximize2 className="w-6 h-6" />,
  CircleDollarSign: <CircleDollarSign className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Timer: <Timer className="w-6 h-6" />,
  Thermometer: <Thermometer className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  CheckSquare: <CheckSquare className="w-6 h-6" />
};
