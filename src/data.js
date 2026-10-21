import capacete from './assets/capacete.png'
import oculos from './assets/oculos.png'
import luva from './assets/luva.png'
import mascara from './assets/mascara.png'
import cinto from './assets/cinto.png'
import macacao from './assets/macacao.png'

// ATENÇÃO: os preços abaixo são EXEMPLOS. Troque pelos valores reais da empresa (em reais).
export const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const produtos = [
  { id: 'capacete', preco: 24.9, cat: 'capacetes', nome: 'Capacete PLT CA 31469', img: capacete },
  { id: 'oculos', preco: 39.9, cat: 'ocular', nome: 'Óculos Ampla Visão Univet 620UP', img: oculos },
  { id: 'luva', preco: 12.9, cat: 'protecao', nome: 'Luva Nitrílica Nitrasolv Danny', img: luva },
  { id: 'mascara', preco: 4.5, cat: 'protecao', nome: 'Máscara Respiratória Semifacial Carbografite CG521 PFF2', img: mascara },
  { id: 'cinto', preco: 189.9, cat: 'altura', nome: 'Cinto Paraquedista 3 Pontos de Ancoragem e Acolchoado Lombar Comfort Jo', img: cinto },
  {
    id: 'macacao', preco: 29.9, cat: 'protecao', nome: 'Macacão de Proteção Branco  Danny SteelPro Type 6 ', img: macacao,
    marca: 'Danny SteelPro Type 6 (CA 20.662)',
    ca: 'Certificação comprovada: CA 20.662 válido até 26/04/2028',
    beneficios: ['Microporoso respirável', 'Proteção química comprovada', 'Excelente custo-benefício.', 'Tratamento antiestático'],
  },
]

export const nav = [
  { label: 'Proteção', cat: 'protecao' },
  { label: 'Ocular', cat: 'ocular' },
  { label: 'Capacetes', cat: 'capacetes' },
  { label: 'Altura', cat: 'altura' },
]

export const diferenciais = [
  { icon: '🛡', titulo: '100% Produtos Certificados (CA Ativo)', curto: 'Portfólio com certificação ativa para atender NRs e necessidades operacionais.', nome: 'EPIs certificados' },
  { icon: '🚚', titulo: 'Logística & Entrega Rápida', curto: 'Logística pensada para manter o estoque e a operação sem paradas.', nome: 'Entrega rápida' },
  { icon: '🧾', titulo: 'Faturamento Faturado (CNPJ)', curto: '', nome: '' },
  { icon: '💬', titulo: 'Atendimento Especializado', curto: 'Suporte técnico para escolha de EPI, gestão de pedidos e operação.', nome: 'Atendimento especializado' },
]

export const setores = ['Construção Civil', 'Indústria & Produção', 'Energia & Alta Voltagem', 'Laboratório & Química']
