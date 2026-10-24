import capacete from './assets/capacete.png'
import oculos from './assets/oculos.png'
import luva from './assets/luva.png'
import mascara from './assets/mascara.png'
import cinto from './assets/cinto.png'
import macacao from './assets/macacao.png'
import protetor_auricular from './assets/protetor-auricular.png'
import abafador from './assets/abafador.png'
import bota from './assets/bota.png'
import protetor_facial from './assets/protetor-facial.png'
import capacete_jugular from './assets/capacete-jugular.png'
import talabarte from './assets/talabarte.png'
import oculos_incolor from './assets/oculos-incolor.png'
import colete from './assets/colete.png'

// ATENÇÃO: os preços abaixo são EXEMPLOS. Troque pelos valores reais da empresa (em reais).
export const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const produtos = [
  { id: 'capacete', preco: 24.9, cat: 'capacetes', nome: 'Capacete PLT CA 31469', img: capacete },
  { id: 'oculos', preco: 39.9, cat: 'ocular', nome: 'Óculos Ampla Visão Univet 620UP', img: oculos },
  { id: 'luva', preco: 12.9, cat: 'protecao', nome: 'Luva Nitrílica Nitrasolv Danny', img: luva },
  { id: 'mascara', preco: 4.5, cat: 'protecao', nome: 'Máscara Respiratória Semifacial Carbografite CG521 PFF2', img: mascara },
  { id: 'cinto', preco: 189.9, cat: 'altura', nome: 'Cinto Paraquedista 3 Pontos de Ancoragem e Acolchoado Lombar Comfort Jo', img: cinto },
  {
    id: 'macacao', preco: 29.9, cat: 'protecao', nome: 'Macacão de Proteção Branco', img: macacao,
    marca: 'Danny SteelPro Type 6 (CA 20.662)',
    ca: 'Certificação comprovada: CA 20.662 válido até 26/04/2028',
    beneficios: ['Microporoso respirável', 'Proteção química comprovada', 'Excelente custo-benefício.', 'Tratamento antiestático'],
  },
  // ----- Novos produtos (preços e imagens são EXEMPLOS: troque pelos reais) -----
  { id: 'protetor-auricular', preco: 2.9, cat: 'protecao', nome: 'Protetor Auricular Tipo Plug', img: protetor_auricular },
  { id: 'abafador', preco: 45.9, cat: 'protecao', nome: 'Abafador de Ruído', img: abafador },
  { id: 'bota', preco: 89.9, cat: 'protecao', nome: 'Bota de Segurança', img: bota },
  { id: 'colete', preco: 34.9, cat: 'protecao', nome: 'Colete Refletivo', img: colete },
  { id: 'protetor-facial', preco: 22.9, cat: 'ocular', nome: 'Protetor Facial Incolor', img: protetor_facial },
  { id: 'oculos-incolor', preco: 9.9, cat: 'ocular', nome: 'Óculos de Segurança Incolor', img: oculos_incolor },
  { id: 'capacete-jugular', preco: 32.9, cat: 'capacetes', nome: 'Capacete com Jugular', img: capacete_jugular },
  { id: 'talabarte', preco: 129.9, cat: 'altura', nome: 'Talabarte Duplo com Absorvedor', img: talabarte },
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

// Contatos da empresa (usados na tela de Soluções)
export const contato = {
  telefone: '+55 41 8516-6977',
  whatsapp: '554185166977', // só números, com DDI e DDD
  email: 'brunolorenzet02@gmail.com',
}

export const linkWhatsapp = (msg = 'Olá! Vim pelo site da Salvação EPIs e gostaria de falar sobre EPIs.') =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`

export const linkEmail = (
  assunto = 'Contato pelo site – Salvação EPIs',
  msg = 'Olá! Vim pelo site da Salvação EPIs e gostaria de falar sobre EPIs.',
) => `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(msg)}`
