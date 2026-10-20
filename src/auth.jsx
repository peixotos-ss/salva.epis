import { createContext, useContext, useEffect, useState } from 'react'

const ler = (k, padrao) => { try { return JSON.parse(localStorage.getItem(k)) ?? padrao } catch { return padrao } }
const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* armazenamento indisponível */ } }

async function hash(texto) {
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(texto))
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
  } catch { return btoa(unescape(encodeURIComponent(texto))) }
}

const Ctx = createContext(null)
export const useAuth = () => useContext(Ctx)

export function AuthProvider({ children }) {
  const [usuarios, setUsuarios] = useState(() => ler('epi_usuarios', []))
  const [sessao, setSessao] = useState(() => ler('epi_sessao', null))
  const [pedidos, setPedidos] = useState(() => ler('epi_solicitacoes', []))

  // mantém várias abas/janelas sincronizadas
  useEffect(() => {
    const sync = () => {
      setUsuarios(ler('epi_usuarios', []))
      setSessao(ler('epi_sessao', null))
      setPedidos(ler('epi_solicitacoes', []))
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  const usuario = usuarios.find((u) => u.email === sessao) || null
  const minhas = usuario ? pedidos.filter((p) => p.email === usuario.email) : []

  const salvarUsuarios = (l) => { setUsuarios(l); gravar('epi_usuarios', l) }
  const salvarPedidos = (l) => { setPedidos(l); gravar('epi_solicitacoes', l) }
  const abrirSessao = (email) => { setSessao(email); gravar('epi_sessao', email) }

  async function cadastrar({ nome, email, senha, empresa, telefone }) {
    email = email.trim().toLowerCase()
    if (senha.length < 6) return { ok: false, erro: 'A senha precisa ter pelo menos 6 caracteres.' }
    if (usuarios.some((u) => u.email === email)) return { ok: false, erro: 'Este e-mail já tem cadastro. Use a aba "Já tenho cadastro".' }
    salvarUsuarios([...usuarios, { nome: nome.trim(), email, empresa, telefone, senha: await hash(senha) }])
    abrirSessao(email)
    return { ok: true }
  }

  async function entrar(email, senha) {
    email = email.trim().toLowerCase()
    const u = usuarios.find((x) => x.email === email)
    if (!u || u.senha !== (await hash(senha))) return { ok: false, erro: 'E-mail ou senha incorretos. Confira os dados e tente de novo.' }
    abrirSessao(email)
    return { ok: true }
  }

  const sair = () => { setSessao(null); gravar('epi_sessao', null) }
  const atualizar = (dados) => salvarUsuarios(usuarios.map((u) => (u.email === sessao ? { ...u, ...dados } : u)))
  const enviarSolicitacao = (s) => salvarPedidos([{ id: Date.now(), status: 'Em análise', data: new Date().toISOString(), ...s }, ...pedidos])
  const cancelar = (id) => salvarPedidos(pedidos.map((p) => (p.id === id ? { ...p, status: 'Cancelada' } : p)))

  return <Ctx.Provider value={{ usuario, minhas, cadastrar, entrar, sair, atualizar, enviarSolicitacao, cancelar }}>{children}</Ctx.Provider>
}
