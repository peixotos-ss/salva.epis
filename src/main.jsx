import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './auth.jsx'
import './index.css'

class ErroSeguro extends React.Component {
  state = { erro: null }
  static getDerivedStateFromError(erro) { return { erro } }
  render() {
    if (!this.state.erro) return this.props.children
    return (
      <div style={{ padding: 24 }}>
        <p>Algo deu errado ao abrir esta página.</p>
        <pre style={{ color: '#b00', whiteSpace: 'pre-wrap' }}>{String(this.state.erro)}</pre>
        <a href="/">Voltar ao início</a>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <ErroSeguro><BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter></ErroSeguro>
)
