import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import { brl } from '../data.js'
import styles from '../App.module.css'

const menu = ['Visão geral', 'Solicitações', 'Orçamentos', 'Pedidos', 'Meus dados']
const dataBR = (iso) => new Date(iso).toLocaleDateString('pt-BR')

function Lista({ itens, vazio }) {
  const { cancelar } = useAuth()
  if (!itens.length) return <p className={styles.peq}>{vazio}</p>
  return (
    <ul className={styles.lista}>
      {itens.map((p) => (
        <li key={p.id}>
          <div><b>{p.produtoNome}</b><small>Qtd. {p.quantidade}{p.precoUnitario ? ` · ${brl(p.precoUnitario * p.quantidade)}` : ''} · {dataBR(p.data)}</small></div>
          <span className={`${styles.status} ${p.status === 'Cancelada' ? styles.off : ''}`}>{p.status}</span>
          {p.status === 'Em análise' && <button className={styles.link} onClick={() => cancelar(p.id)}>Cancelar</button>}
        </li>
      ))}
    </ul>
  )
}

function MeusDados() {
  const { usuario, atualizar } = useAuth()
  const [ok, setOk] = useState(false)
  return (
    <form className={styles.dados} onSubmit={(e) => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)); atualizar(d); setOk(true) }} onChange={() => setOk(false)}>
      <label>Nome completo<input name="nome" required defaultValue={usuario.nome} /></label>
      <label>Empresa<input name="empresa" defaultValue={usuario.empresa || ''} /></label>
      <label>Telefone<input name="telefone" defaultValue={usuario.telefone || ''} /></label>
      <label>E-mail<input value={usuario.email} readOnly /></label>
      <button className={[styles.btn, styles.btnSm].join(' ')}>Salvar dados</button>
      {ok && <p className={styles.ok} role="status">Dados salvos.</p>}
    </form>
  )
}

export default function Conta() {
  const { usuario, minhas, sair } = useAuth()
  const navigate = useNavigate()
  const [ativo, setAtivo] = useState('Visão geral')
  if (!usuario) return <Navigate to="/entrar" replace />

  const sols = minhas.filter((p) => p.tipo === 'solicitacao')
  const orcs = minhas.filter((p) => p.tipo !== 'solicitacao')
  const abertas = (l) => l.filter((p) => p.status === 'Em análise').length
  const resumo = [
    ['Solicitações', abertas(sols), 'Em análise', 'Solicitações'],
    ['Orçamentos', abertas(orcs), 'Aguardando proposta', 'Orçamentos'],
    ['Pedidos', 0, 'Nenhum pedido', 'Pedidos'],
  ]

  return (
    <section className={styles.conta}>
      <aside>
        <small>MINHA CONTA</small>
        {menu.map((m) => <button key={m} className={m === ativo ? styles.on : ''} onClick={() => setAtivo(m)}>{m}</button>)}
        <button className={styles.sair} onClick={() => { sair(); navigate('/entrar') }}>Sair da conta</button>
      </aside>
      <div>
        <h1>Olá, {usuario.nome.split(' ')[0]}.</h1>
        <p className={styles.peq}>{usuario.empresa ? `${usuario.empresa} · ` : ''}Acompanhe o andamento da sua empresa.</p>

        {ativo === 'Visão geral' && (<>
          <div className={styles.resumo}>
            {resumo.map(([t, n, s, aba]) => (
              <button key={t} onClick={() => setAtivo(aba)}><span>{t}</span><b>{String(n).padStart(2, '0')}</b><em>{n ? s : 'Nenhum'}</em></button>
            ))}
          </div>
          <div className={styles.atalhos}>
            <Link to="/solicitar-orcamento?tipo=orcamento">Novo orçamento</Link>
            <Link to="/solicitar-orcamento?tipo=solicitacao">Nova solicitação</Link>
            <button onClick={() => setAtivo('Solicitações')}>Cancelamento</button>
          </div>
        </>)}
        {ativo === 'Solicitações' && <Lista itens={sols} vazio="Você ainda não fez solicitações. Use “Nova solicitação” na visão geral." />}
        {ativo === 'Orçamentos' && <Lista itens={orcs} vazio="Você ainda não pediu orçamentos. Use “Novo orçamento” na visão geral." />}
        {ativo === 'Pedidos' && <p className={styles.peq}>Nenhum pedido por enquanto. Eles aparecem aqui depois que uma proposta for aprovada.</p>}
        {ativo === 'Meus dados' && <MeusDados />}
      </div>
    </section>
  )
}
