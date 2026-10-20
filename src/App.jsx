import { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { nav } from './data.js'
import { useAuth } from './auth.jsx'
import logo from './assets/logo.png'
import Home from './pages/Home.jsx'
import Produto from './pages/Produto.jsx'
import Login from './pages/Login.jsx'
import Sobre from './pages/Sobre.jsx'
import Empresa from './pages/Empresa.jsx'
import Solucoes from './pages/Solucoes.jsx'
import Conta from './pages/Conta.jsx'
import Solicitar from './pages/Solicitar.jsx'
import styles from './App.module.css'

function Header() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { usuario } = useAuth()
  const [q, setQ] = useState(params.get('q') || '')
  const buscar = (e) => { e.preventDefault(); navigate(q ? `/?q=${encodeURIComponent(q)}` : '/') }
  return (
    <header>
      <div className={styles.topo}>
        <Link to="/"><img className={styles.logo} src={logo} alt="Salvação EPIs" /></Link>
        <form className={styles.busca} onSubmit={buscar} role="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="pesquise aqui" aria-label="Pesquisar produtos" />
        </form>
        <Link to={usuario ? '/conta' : '/entrar'} className={styles.usuario} aria-label="Minha conta">
          {usuario && <span>{usuario.nome.split(' ')[0]}</span>}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7" r="5" /><path d="M2 22c0-6 4-9 10-9s10 3 10 9z" /></svg>
        </Link>
      </div>
      <nav className={styles.menu}>
        {nav.map((n) => <NavLink key={n.cat} to={`/?cat=${n.cat}`}>{n.label}</NavLink>)}
      </nav>
    </header>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/solicitar-orcamento" element={<Solicitar />} />
        </Routes>
      </main>
      <footer className={styles.rodape}>
        <Link to="/sobre">Sobre nós</Link><Link to="/empresa">Para empresas</Link>
        <Link to="/solucoes">Soluções</Link><Link to="/solicitar-orcamento">Solicitar orçamento</Link>
      </footer>
    </>
  )
}
