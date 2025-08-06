import { Link } from 'react-router-dom'
import GmailLogo from '../assets/gmail-logo.svg'

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={GmailLogo} alt="Gmail Orchestrator" className="h-8" />
          <span className="text-xl font-bold text-gmail-red">Gmail Orchestrator</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-700 hover:text-gmail-red transition-colors">
            Home
          </Link>
          <Link to="/installation" className="text-gray-700 hover:text-gmail-red transition-colors">
            Installation
          </Link>
          <a 
            href="https://github.com/Serverket/gmail-orchestrator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gmail-red transition-colors"
          >
            GitHub
          </a>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-700 hover:text-gmail-red">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
