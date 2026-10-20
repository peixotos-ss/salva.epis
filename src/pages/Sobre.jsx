import marca from '../assets/marca-dagua.png'
import styles from '../App.module.css'

export default function Sobre() {
  return (
    <section className={styles.sobre} style={{ backgroundImage: `url(${marca})` }}>
      <h2>Sobre nós</h2>
      <p>Na Salvação EPIs, a nossa missão é garantir a máxima segurança e integridade física dos trabalhadores industriais. Oferecemos soluções completas em Equipamentos de Proteção Individual (EPIs) de alta qualidade, em conformidade com as normas e certificações de segurança nacionais e internacionais.</p>
      <h2>Quem Somos</h2>
      <p>Fundada com o propósito de simplificar e elevar a gestão de segurança no trabalho, a Salvação EPIs destaca-se pelo fornecimento ágil e consultivo de equipamentos essenciais.</p>
      <p>Mais do que vender produtos, atuamos como parceiros estratégicos de empresas de diversos setores — desde a construção civil e indústria química até trabalhos em altura e manutenção —, garantindo que cada equipe trabalhe protegida e em total conformidade com a legislação vigente.</p>
      <h2>Nossos pilares</h2>
      <div className={styles.pilares}>
        <p>Missão: Fornecer equipamentos de proteção individual de excelência, promovendo a cultura da segurança e prevenindo acidentes no ambiente de trabalho.</p>
        <p>Visão: Ser a distribuidora de EPIs de referência pela inovação, rapidez na entrega e atendimento técnico especializado.</p>
        <p>Valores:</p>
        <ul>
          <li>Compromisso com a Vida: A segurança e o bem-estar dos colaboradores estão sempre em primeiro lugar.</li>
          <li>Qualidade Certificada: Trabalhamos apenas com marcas e produtos devidamente homologados (com Certificado de Aprovação - CA ativo).</li>
          <li>Agilidade e Eficiência: Entregas rápidas e processos descomplicados para que a sua empresa nunca pare.</li>
          <li>Transparência e Ética: Relações comerciais claras, sólidas e de confiança de longo prazo.</li>
        </ul>
      </div>
      <h2>Diferenciais</h2>
      <div className={styles.pilares}>
        <p>Catálogo Completo: Proteção auricular, ocular, respiratória, laboral (trabalho em altura), calçado e vestuário técnico num só lugar.</p>
        <p>Atendimento Consultivo: A nossa equipa auxilia na escolha exata dos EPIs adequados às necessidades e riscos específicos da sua operação.</p>
        <p>Agilidade em Orçamentos: Atendimento B2B otimizado para responder a cotações e solicitações de orçamento com rapidez.</p>
      </div>
    </section>
  )
}
