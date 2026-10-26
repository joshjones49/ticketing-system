import './Footer.css'

import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const columns = [
  {
    title: 'Shop',
    links: ['Laptops', 'Desktops', 'Phones & Tablets', 'Monitors', 'Gaming', 'Accessories'],
  },
  {
    title: 'Support',
    links: ['Submit a Repair Ticket', 'Track a Ticket', 'Warranty Information', 'Returns & Exchanges', 'Help Center'],
  },
  {
    title: 'Company',
    links: ['About Capital Tech', 'Careers', 'News & Press', 'Investor Relations', 'Sustainability'],
  },
  {
    title: 'Contact',
    links: ['Contact Us', 'Store Locations', 'Business Sales', 'Partner Program'],
  },
]

const socials = [
  { label: 'Facebook', icon: <FaFacebookF /> },
  { label: 'X', icon: <FaXTwitter /> },
  { label: 'LinkedIn', icon: <FaLinkedinIn /> },
  { label: 'YouTube', icon: <FaYoutube /> },
]

const legal = ['Privacy Policy', 'Terms of Use', 'Accessibility', 'Cookie Settings', 'Sitemap']

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-careers'>
        <div>
          <h3>Build your career at Capital Tech</h3>
          <p>Join our repair, engineering, and customer care teams.</p>
        </div>
        <a className='footer-cta' href='#careers'>View open positions</a>
      </div>

      <div className='footer-columns'>
        {columns.map((column) => (
          <nav className='footer-column' key={column.title} aria-label={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}><a href='#'>{link}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <address className='footer-contact'>
        <span>Customer Care: 1-800-555-0142</span>
        <span>Mon–Fri 8am–8pm CT · Sat 9am–5pm CT</span>
        <a href='mailto:support@capitaltech.example'>support@capitaltech.example</a>
      </address>

      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Capital Tech. All rights reserved.</p>
        <ul className='footer-legal'>
          {legal.map((item) => (
            <li key={item}><a href='#'>{item}</a></li>
          ))}
        </ul>
        <div className='footer-socials'>
          {socials.map((social) => (
            <a key={social.label} href='#' aria-label={social.label}>{social.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
