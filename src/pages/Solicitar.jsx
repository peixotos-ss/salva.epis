import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { produtos } from '../data.js'
import { useAuth } from '../auth.jsx'
import styles from '../App.module.css'

export default function Solicitar() {
  const [params] = useSearchParams()
  const { usuario, enviarSolicitacao } = useAuth()
  const [id, setId] = useState(params.get('produto') || 'capacete')
  const [enviado, setEnviado] = useState(false)
  const p = produtos.find((x) => x.id === id) || produtos[0]
  return (
    <section className={styles.solicitar}>
      <div className={styles.lateral}>
        <div className={styles.mini}><img src={p.img} alt={p.nome} /><h3>{p.nome}</h3><Link to={`/produto/${p.id}`}>Abrir produto ↗</Link></div>
        <ul>
          <li>A proposta confirma modelos, condições e disponibilidade.</li>
          <li>Solicite e consulte a ficha técnica/CA do modelo proposto.</li>
        </ul>
        <small>A solicitação não confirma a compra.</small>
      </div>
      {enviado ? (
        <div className={styles.form}><h2>Solicitação enviada</h2><p>Retornamos com a proposta em até 24h. {usuario ? <Link to="/conta">Acompanhar na minha conta</Link> : <Link to="/entrar">Entre ou cadastre-se para acompanhar</Link>}</p></div>
      ) : (
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault()
          const d = Object.fromEntries(new FormData(e.currentTarget))
          enviarSolicitacao({ tipo: params.get('tipo') || 'orcamento', email: d.email.trim().toLowerCase(), nome: d.nome, telefone: d.telefone, produtoId: p.id, produtoNome: p.nome, quantidade: d.quantidade, mensagem: d.mensagem })
          setEnviado(true)
        }}>
          <header><h2>Dados da solicitação</h2><small>* Campos obrigatórios</small></header>
          <label>Nome completo *<input name="nome" required placeholder="Seu nome" defaultValue={usuario?.nome || ''} /></label>
          <div className={styles.duo}>
            <label>E-mail *<input name="email" type="email" required placeholder="voce@empresa.com.br" defaultValue={usuario?.email || ''} /></label>
            <label>Telefone *<input name="telefone" required placeholder="(DDD) Número de telefone" defaultValue={usuario?.telefone || ''} /></label>
          </div>
          <div className={styles.duo}>
            <label>Produto ou serviço *
              <select value={id} onChange={(e) => setId(e.target.value)}>{produtos.map((x) => <option key={x.id} value={x.id}>{x.nome}</option>)}</select></label>
            <label>Quantidade *<input name="quantidade" type="number" min="1" required placeholder="Informe a quantidade" /></label>
          </div>
          <label>Mensagem<textarea name="mensagem" rows="4" placeholder="Descreva a atividade, outros itens e requisitos da sua empresa." /></label>
          <button className={[styles.btn, styles.btnSm].join(' ')}>Enviar solicitação ➤</button>
        </form>
      )}
    </section>
  )
}
