import { Link } from 'react-router-dom'
import { contato, linkWhatsapp, linkEmail } from '../data.js'
import styles from '../App.module.css'

const solucoes = [
  { cat: 'protecao', icone: '', titulo: 'Proteção do corpo e respiratória', texto: 'Luvas, máscaras, macacões, coletes e protetores auriculares para o dia a dia da operação.' },
  { cat: 'ocular', icone: '', titulo: 'Proteção ocular e facial', texto: 'Óculos de ampla visão e protetores faciais contra impactos, respingos e poeira.' },
  { cat: 'capacetes', icone: '', titulo: 'Proteção da cabeça', texto: 'Capacetes de segurança com certificação ativa para obras e indústrias.' },
  { cat: 'altura', icone: '', titulo: 'Trabalho em altura', texto: 'Cintos paraquedista e talabartes com absorvedor para trabalhos com ancoragem.' },
]

const passos = [
  { titulo: 'Conte o que você precisa', texto: 'Fale com a gente pelo WhatsApp, e-mail ou formulário e envie sua lista de EPIs.' },
  { titulo: 'Receba a proposta', texto: 'Enviamos a proposta comercial em até 24 horas, com modelos, condições e disponibilidade.' },
  { titulo: 'Acompanhe seus pedidos', texto: 'Acompanhe solicitações, orçamentos e pedidos na sua área do cliente.' },
]

const setores = [
  { nome: 'Construção Civil', texto: 'Capacetes, botas, coletes e proteção para canteiros de obra.' },
  { nome: 'Indústria & Produção', texto: 'Luvas, óculos e proteção auditiva para a linha de produção.' },
  { nome: 'Energia & Alta Voltagem', texto: 'Equipamentos para trabalhos em altura e áreas de risco.' },
  { nome: 'Laboratório & Química', texto: 'Luvas, máscaras, macacões e proteção facial contra agentes químicos.' },
]

export default function Solucoes() {
  return (
    <section className={styles.pagina}>
      {/* 1. Apresentação */}
      <header className={styles.solHero}>
        <p className={styles.solSelo}>Soluções em EPIs</p>
        <h1>Proteção certificada para cada risco da sua operação</h1>
        <p className={styles.solHeroTexto}>
          Atendimento consultivo para escolher os EPIs certos, com entrega rápida e faturamento para empresas.
        </p>
        <div className={styles.solBotoes}>
          <a className={[styles.solBtn, styles.solBtnWhats].join(' ')} href={linkWhatsapp()} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
          <a className={[styles.solBtn, styles.solBtnClaro].join(' ')} href={linkEmail()}>
            Enviar e-mail
          </a>
        </div>
      </header>

      
      <h2 className={styles.solTitulo}>O que protegemos</h2>
      <div className={styles.solGrade}>
        {solucoes.map((s) => (
          <article key={s.cat} className={styles.solCard}>
            
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
            <Link to={`/?cat=${s.cat}`}>Ver produtos →</Link>
          </article>
        ))}
      </div>

      
      <h2 className={styles.solTitulo}>Como funciona</h2>
      <ol className={styles.solPassos}>
        {passos.map((p, i) => (
          <li key={p.titulo}>
            <span className={styles.solNumero}>{i + 1}</span>
            <div><h3>{p.titulo}</h3><p>{p.texto}</p></div>
          </li>
        ))}
      </ol>

      <h2 className={styles.solTitulo}>Setores atendidos</h2>
      <div className={styles.solGrade}>
        {setores.map((s) => (
          <article key={s.nome} className={styles.solCard}>
            <h3>{s.nome}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>

      <section className={styles.solContato} aria-labelledby="contato-titulo">
        <h2 id="contato-titulo">Fale com a gente</h2>
        <p>Conte o que sua equipe precisa e receba a proposta em até 24 horas.</p>
        <div className={styles.solContatos}>
          <a className={styles.solContatoItem} href={linkWhatsapp()} target="_blank" rel="noopener noreferrer">
            <span className={styles.solIcone} aria-hidden="true">💬</span>
            <span><b>WhatsApp</b><small>{contato.telefone}</small></span>
          </a>
          <a className={styles.solContatoItem} href={linkEmail()}>
            <span className={styles.solIcone} aria-hidden="true">✉️</span>
            <span><b>E-mail</b><small>{contato.email}</small></span>
          </a>
        </div>
        <Link className={styles.solLinkForm} to="/solicitar-orcamento">Prefere o formulário? Solicitar orçamento pelo site →</Link>
      </section>
    </section>
  )
}
