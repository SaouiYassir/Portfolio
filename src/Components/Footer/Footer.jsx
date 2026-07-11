// Footer.jsx
import { Link } from 'react-router-dom'
import './Footer.css'

const SOCIALS = [
  { icon: 'bi-linkedin', href: 'https://linkedin.com/in/yassir-saoui/', label: 'LinkedIn' },
  { icon: 'bi-github', href: 'https://github.com/SaouiYassir/', label: 'GitHub' },
  { icon: 'bi-whatsapp', href: 'https://wa.me/212601109965', label: 'WhatsApp' },
]

const FOOTER_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo-mark">YS</span>
          <p>
            Frontend developer and CS student, based in Marrakech —
            building web experiences that ship.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Navigate</p>
          <ul>
            {FOOTER_LINKS.map(link => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Connect</p>
          <ul>
            {SOCIALS.map(social => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <i className={`bi ${social.icon}`}></i> {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Available for work</p>
          <p className="footer-cta-text">
            Have a project in mind? Let's talk about it.
          </p>
          <Link to="/contact" className="footer-cta">
            Get in touch <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Yassir Saoui. All rights reserved.</p>
        <p className="footer-credit">
          Built with <i className="bi bi-code-slash"></i> React &amp; Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer