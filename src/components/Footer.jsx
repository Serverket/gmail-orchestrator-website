import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Gmail Orchestrator</h3>
            <p className="text-gray-300">
              A browser extension that streamlines external mail verification in Gmail with a single click.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-300 hover:text-white">Installation</Link>
              </li>
              <li>
                <a 
                  href="https://github.com/Serverket/gmail-orchestrator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/Serverket/gmail-orchestrator/blob/master/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gmail Orchestrator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
