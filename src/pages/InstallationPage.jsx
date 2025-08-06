import { useState } from 'react'

function InstallationPage() {
  const [activeTab, setActiveTab] = useState('chrome')
  const repositoryUrl = 'https://github.com/Serverket/gmail-orchestrator'
  const downloadUrl = 'https://github.com/Serverket/gmail-orchestrator/archive/refs/heads/master.zip'
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Install Gmail Orchestrator</h1>
      
      {/* Browser Tabs */}
      <div className="mb-10">
        <div className="flex border-b">
          <button 
            onClick={() => setActiveTab('chrome')}
            className={`py-3 px-6 ${activeTab === 'chrome' ? 'border-b-2 border-gmail-red text-gmail-red font-medium' : 'text-gray-500'}`}
          >
            Chrome / Edge
          </button>
          <button 
            onClick={() => setActiveTab('firefox')}
            className={`py-3 px-6 ${activeTab === 'firefox' ? 'border-b-2 border-gmail-red text-gmail-red font-medium' : 'text-gray-500'}`}
          >
            Firefox
          </button>
          <button 
            onClick={() => setActiveTab('other')}
            className={`py-3 px-6 ${activeTab === 'other' ? 'border-b-2 border-gmail-red text-gmail-red font-medium' : 'text-gray-500'}`}
          >
            Other Browsers
          </button>
        </div>
      </div>
      
      {/* Download Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Direct Download</h2>
          <p className="mb-6 text-gray-700">
            Download the extension package directly from our GitHub repository.
          </p>
          <a 
            href={downloadUrl}
            className="btn btn-primary mb-6"
            download
          >
            Download Extension (.zip)
          </a>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Mobile Access</h3>
            <p className="mb-4 text-gray-700">
              Scan this QR code to access the download page on your mobile device:
            </p>
            <div className="p-4 bg-white inline-block rounded-lg shadow-md">
              <img src="/go-qr.png" alt="QR Code for Gmail Orchestrator" width="180" height="180" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Installation Instructions</h2>
          
          {activeTab === 'chrome' && (
            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-8 w-8 rounded-full bg-gmail-blue text-white flex items-center justify-center font-bold">1</span>
                  <h3 className="text-xl font-medium">Download & Extract</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Download the extension .zip file and extract it to a folder on your computer.
                </p>
                <div className="border rounded-md shadow-md p-4 bg-gray-50">
                  <div className="text-center text-4xl mb-2">📥 💾</div>
                  <div className="text-center text-sm text-gray-500">download-and-extract.zip</div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-8 w-8 rounded-full bg-gmail-blue text-white flex items-center justify-center font-bold">2</span>
                  <h3 className="text-xl font-medium">Open Extensions Page</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Open Chrome and navigate to <code>chrome://extensions</code> or click the puzzle icon in the toolbar and select "Manage Extensions".
                </p>
                <div className="border rounded-md shadow-md p-4 bg-gray-50">
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-2">🌐</span>
                    <div className="flex-1 h-6 bg-gray-200 rounded">
                      <div className="h-full w-full flex items-center justify-center text-xs">chrome://extensions</div>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Extensions</div>
                      <div>
                        <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                          <div className="absolute right-0 w-5 h-5 bg-gray-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-8 w-8 rounded-full bg-gmail-blue text-white flex items-center justify-center font-bold">3</span>
                  <h3 className="text-xl font-medium">Enable Developer Mode & Load Extension</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Toggle on "Developer mode" in the top-right corner. Then click "Load unpacked" and select the extracted extension folder.
                </p>
                <div className="border rounded-md shadow-md p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium">Developer mode</div>
                    <div className="w-10 h-5 bg-gmail-blue rounded-full relative">
                      <div className="absolute right-0 w-5 h-5 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mb-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Load unpacked</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Pack extension</button>
                  </div>
                  <div className="text-center mt-3 text-2xl">📂 → 📦</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'firefox' && (
            <div className="space-y-4">
              <p className="text-gray-700">
                Firefox installation is temporarily unavailable as the extension is currently optimized for Chrome-based browsers.
              </p>
              <p className="text-gray-700">
                We're working on Firefox compatibility and will update this page when it's ready.
              </p>
            </div>
          )}
          
          {activeTab === 'other' && (
            <div className="space-y-4">
              <p className="text-gray-700">
                Most Chromium-based browsers (like Brave, Opera, Vivaldi) can install extensions from Chrome using the same method:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                <li>Open the Extensions page in your browser</li>
                <li>Enable Developer Mode</li>
                <li>Use "Load unpacked" or similar option</li>
                <li>Select the extracted extension folder</li>
              </ol>
              <p className="mt-4 text-gray-700">
                Safari is not supported as it uses a different extension architecture.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Usage Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How to Use</h2>
        <div className="card p-8 max-w-3xl mx-auto">
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Click the Gmail Orchestrator icon in your browser toolbar</li>
            <li>The extension will automatically find your open Gmail tab or open a new one</li>
            <li>It will open a background tab to trigger the "Check mail now" action</li>
            <li>After completion, the extension will close the background tab</li>
            <li>Your Gmail inbox will refresh to show any new emails</li>
          </ol>
          <div className="mt-8 p-4 bg-blue-50 rounded-md">
            <p className="text-blue-700">
              <strong>Tip:</strong> This extension works with any Gmail account! It automatically detects which account you're currently using.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallationPage
