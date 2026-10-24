import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import styles from '../App.module.css'

export default function Login() {
  const { usuario, entrar, cadastrar } = useAuth()
  const navigate = useNavigate()
  const [modo, setModo] = useState('entrar')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)
  if (usuario) return <Navigate to="/conta" replace />

  async function enviar(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    setErro(''); setEnviando(true)
    const r = modo === 'entrar' ? await entrar(d.email, d.senha) : await cadastrar(d)
    setEnviando(false)
    if (r.ok) navigate('/conta'); else setErro(r.erro)
  }

  return (
    <section className={styles.pagina}>
      <h1 className={styles.tituloEsq}>Seu acesso.</h1>
      <p className={styles.peq}>Entre ou crie seu cadastro para acompanhar solicitações, orçamentos e pedidos.</p>
      <form className={styles.loginBox} onSubmit={enviar} key={modo}>
        <div className={styles.abas} role="tablist">
          <button type="button" role="tab" aria-selected={modo === 'entrar'} onClick={() => { setModo('entrar'); setErro('') }}>Já tenho cadastro</button>
          <button type="button" role="tab" aria-selected={modo === 'cadastrar'} onClick={() => { setModo('cadastrar'); setErro('') }}>Quero me cadastrar</button>
        </div>
        {modo === 'cadastrar' && (<>
          <label>Nome completo<input name="nome" required placeholder="Seu nome" autoComplete="name" /></label>
          <label>Empresa<input name="empresa" placeholder="Nome da empresa" autoComplete="organization" /></label>
          <label>Telefone<input name="telefone" placeholder="(DDD) Número de telefone" autoComplete="tel" /></label>
        </>)}
        <label>E-mail<input name="email" type="email" required placeholder="voce@empresa.com.br" autoComplete="email" /></label>
        <label>Senha<input name="senha" type="password" required minLength={modo === 'cadastrar' ? 6 : undefined} placeholder={modo === 'cadastrar' ? 'Crie uma senha (mínimo 6 caracteres)' : 'Digite sua senha'} autoComplete={modo === 'entrar' ? 'current-password' : 'new-password'} /></label>
        {erro && <p className={styles.erro} role="alert">{erro}</p>}
        <button className={[styles.btn, styles.btnBlock].join(' ')} disabled={enviando}>{modo === 'entrar' ? 'Entrar na área do cliente' : 'Criar cadastro e entrar'}</button>
      </form>
    </section>
  )
}
