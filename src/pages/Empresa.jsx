import { Link } from 'react-router-dom'
import { diferenciais, setores } from '../data.js'
import styles from '../App.module.css'

export default function Empresa() {
  return (
    <section className={[styles.pagina, styles.centro].join(' ')}>
      <div className={styles.heroClaro}>
        <h1>A Solução Completa em Proteção Individual para a Sua Empresa.</h1>
        <p className={styles.peq}>EPIs certificados com entrega rápida, suporte técnico especializado.</p>
        <div className={styles.acoes}>
          <Link className={[styles.btn, styles.btnLaranja, styles.btnSm].join(' ')} to="/solicitar-orcamento">Solicitar Orçamento</Link>
          <Link className={[styles.btn, styles.btnEscuro, styles.btnSm].join(' ')} to="/sobre">Sobre nós</Link>
        </div>
      </div>
      <ul className={styles.faixa}>{diferenciais.map((d) => <li key={d.titulo}><span>{d.icon}</span>{d.titulo}</li>)}</ul>
      <h2 className={styles.sub}>Somos especializados em</h2>
      <ul className={styles.chips}>{setores.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className={styles.como}>
        <h2>Como funciona</h2>
        <ol>
          <li>Selecione ou Envie sua Lista de EPIs</li>
          <li>Receba uma Proposta Comercial em até 24h</li>
          <li>Faça a Gestão e Acompanhe seus Pedidos no Portal</li>
        </ol>
      </div>
    </section>
  )
}
