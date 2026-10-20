import { Link } from 'react-router-dom'
import { diferenciais, setores } from '../data.js'
import styles from '../App.module.css'

export default function Solucoes() {
  return (
    <section className={[styles.pagina, styles.solucoes].join(' ')}>
      <div className={styles.heroVerde}>
        <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=70" alt="Estoque de armazém com prateleiras industriais" />
        <div>
          <h1>Soluções</h1>
          <p>Apresentação das soluções oferecidas para diferentes necessidades industriais.</p>
          <div className={styles.acoes}>
            <Link className={[styles.btn, styles.btnSm].join(' ')} to="/solicitar-orcamento">Solicitar orçamento</Link>
            <Link className={[styles.btn, styles.btnEscuro, styles.btnSm].join(' ')} to="/">Ver produtos</Link>
          </div>
        </div>
      </div>
      <h2 className={styles.verde}>Tipos de solução</h2>
      <div className={styles.cards3}>
        {diferenciais.filter((d) => d.nome).map((d) => (
          <article key={d.nome}><span className={styles.ico}>{d.icon}</span><h3>{d.nome}</h3><p>{d.curto}</p></article>
        ))}
      </div>
      <h2 className={styles.verde}>Setores atendidos</h2>
      <div className={styles.cards4}>{setores.map((s) => <div key={s}><span className={styles.ico}>▣</span>{s}</div>)}</div>
    </section>
  )
}
