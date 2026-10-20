import { Link, useParams } from 'react-router-dom'
import { produtos } from '../data.js'
import nr6 from '../assets/nr6.png'
import colete from '../assets/colete.png'
import styles from '../App.module.css'

export default function Produto() {
  const p = produtos.find((x) => x.id === useParams().id)
  if (!p) return <p className={styles.vazio}>Produto não encontrado. <Link to="/">Voltar ao catálogo</Link></p>
  return (
    <section className={styles.produto}>
      <img className={styles.produtoImg} src={p.img} alt={p.nome} />
      <div className={styles.produtoInfo}>
        <h1>{p.nome.toUpperCase()}</h1>
        {p.marca && <p className={styles.marca}>{p.marca}</p>}
        <div className={styles.ca}><img src={nr6} alt="NR 6" /><strong>{p.ca || 'Certificação comprovada: CA ativo'}</strong></div>
        <ul className={styles.checks}>{(p.beneficios || ['Certificado com CA ativo']).map((b) => <li key={b}>{b}</li>)}</ul>
        <Link className={[styles.btn, styles.btnLg].join(' ')} to={`/solicitar-orcamento?produto=${p.id}`}>Consultar preço</Link>
      </div>
      <img className={styles.produtoSelo} src={colete} alt="" />
    </section>
  )
}
