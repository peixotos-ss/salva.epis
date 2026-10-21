import { Link, useSearchParams } from 'react-router-dom'
import { produtos, brl } from '../data.js'
import banner from '../assets/banner.png'
import styles from '../App.module.css'

export default function Home() {
  const [params] = useSearchParams()
  const cat = params.get('cat'), q = (params.get('q') || '').toLowerCase()
  const lista = produtos.filter((p) => (!cat || p.cat === cat) && p.nome.toLowerCase().includes(q))
  return (
    <div className={styles.fundoCinza}>
      <Link to="/?cat=protecao" className={styles.banner}><img src={banner} alt="Proteja suas mãos no trabalho. Confira os modelos de luvas." /></Link>
      {lista.length === 0 && <p className={styles.vazio}>Nenhum produto encontrado. Tente outra busca ou categoria.</p>}
      <div className={styles.gridProdutos}>
        {lista.map((p) => (
          <article key={p.id} className={styles.cardProduto}>
            <Link to={`/produto/${p.id}`}><div className={styles.foto}><img src={p.img} alt={p.nome} /></div></Link>
            <div className={styles.info}><h2>{p.nome}</h2>
              <p className={styles.preco}>{brl(p.preco)}</p>
              <Link className={[styles.btn, styles.btnSm].join(' ')} to={`/solicitar-orcamento?produto=${p.id}`}>Solicitar orçamento</Link></div>
          </article>
        ))}
      </div>
    </div>
  )
}
