import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gmail-blue to-gmail-red py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Streamline Your Gmail External Mail Checking
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Gmail Orchestrator reduces the verification interval from hours to a single click, allowing immediate checking of external emails without manual navigation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/installation" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              Install Extension
            </Link>
            <a 
              href="https://github.com/Serverket/gmail-orchestrator" 
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-secondary text-lg px-8 py-3"
            >
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-gmail-red text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Immediate Verification</h3>
              <p className="text-gray-600">
                Trigger external mail checking with a single click instead of waiting hours for Gmail's automatic check.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-gmail-blue text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Automatic Flow</h3>
              <p className="text-gray-600">
                Automatically opens the settings page, clicks "Check mail now" and closes the tab when done.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-gmail-green text-4xl mb-4">📁</div>
              <h3 className="text-xl font-semibold mb-2">Smart Tab Management</h3>
              <p className="text-gray-600">
                Detects existing inbox tabs or creates a new one if needed, then reloads to show your new emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-gray-700 mb-6">
                Gmail Orchestrator works seamlessly in the background to check your external email accounts:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li className="text-gray-700">Click the extension icon in your browser</li>
                <li className="text-gray-700">It detects which Gmail account you're currently using</li>
                <li className="text-gray-700">Opens the settings page in a background tab</li>
                <li className="text-gray-700">Automatically triggers the "Check mail now" action</li>
                <li className="text-gray-700">Closes the settings tab and reloads your inbox</li>
              </ol>
              <Link to="/installation" className="btn btn-primary inline-block">
                Get Started
              </Link>
            </div>
            
            <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-xl">
              <div className="text-5xl text-center mb-4">📬 ⚡ 🔄</div>
              <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🌐</span>
                    <span className="font-medium">Gmail</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-500">●</span>
                    <span className="text-gray-500">●</span>
                    <span className="text-gmail-red">●</span>
                  </div>
                </div>
                <div className="py-2 px-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-gmail-blue text-white text-xs rounded-full h-6 w-6 flex items-center justify-center mr-2">G</span>
                    <span className="font-medium">Gmail Orchestrator</span>
                  </div>
                  <div className="ml-8 p-2 border-l-2 border-gray-200">
                    <p className="text-sm text-gray-700">✓ Found inbox tab</p>
                    <p className="text-sm text-gray-700">✓ Checking external mail</p>
                    <p className="text-sm text-gray-700">✓ Refreshing inbox</p>
                    <p className="text-sm text-green-600 font-medium">Mail check complete!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
