<p align="center">
  <img src="public/gmail-orchestrator-logo.svg" alt="Gmail Orchestrator" width="400">
</p>

<h1 align="center">🚀 Gmail Orchestrator Website</h1>

<p align="center">
  <a href="https://github.com/Serverket/gmail-orchestrator/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/version-1.0.0-green.svg" alt="Version">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react" alt="React">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-4.5.x-646CFF?logo=vite" alt="Vite">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind-3.4.x-38B2AC?logo=tailwindcss" alt="Tailwind">
  </a>
  <a href="https://bun.sh/">
    <img src="https://img.shields.io/badge/Bun-1.2.x-F9F1E1?logo=bun" alt="Bun">
  </a>
  <a href="https://github.com/Serverket/gmail-orchestrator">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
</p>

A modern, responsive website for the Gmail Orchestrator browser extension, providing easy download and installation instructions.

## 🔍 Overview

This website serves as the official landing page for the Gmail Orchestrator Chrome extension, which automates the process of checking external emails in Gmail with a single click instead of waiting hours for Gmail's automatic check.

## ✨ Features

- **📱 Responsive Design:** Fully responsive and works on all devices
- **⚡ Fast Performance:** Built with React and Vite for optimal loading speed
- **🎯 Clear Instructions:** Step-by-step installation guide with visual aids
- **🔄 Direct Download:** Instant access to the extension files
- **📲 Mobile Access:** QR code for easy mobile navigation

## 🛠️ Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Bun](https://bun.sh/) for package management and building

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Serverket/gmail-orchestrator-website.git
cd gmail-orchestrator-website
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Build for production:
```bash
bun run build
```

## 🔧 Project Structure

```
gmail-orchestrator-website/
├── public/
│   ├── favicon.svg
│   └── go-qr.png
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🌐 Deployment

After building the project (`bun run build`), you can deploy the generated `dist` folder to any static hosting service like:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## 🌐 Live Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/72a8f925-d6f0-43e3-8213-21b83f42da0f/deploy-status)](https://app.netlify.com/sites/gmail-orchestrator-website-c67j2/deploys)

The production version of this website is permanently hosted at:
[https://gmail-orchestrator-website.windsurf.build](https://gmail-orchestrator-website.windsurf.build)

> **Note**: This is the permanent URL provided by our deployment partner. For a shorter, custom URL (e.g. `orchestrator.email`), please follow the Custom Domain Setup instructions below.

### Claiming Your Site
For permanent ownership and custom domain setup:
1. [Click here to claim on Netlify](https://app.netlify.com/claim?utm_source=windsurf#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbV93ZWJob29rIjoiaHR0cHM6Ly93ZWItYmFja2VuZC5jb2RlaXVtLmNvbS9uZXRsaWZ5X2NsYWltX3dlYmhvb2siLCJjbGllbnRfaWQiOiI5MHY2M1FUUHlrNWlJRWt5RFo5MF9QenhmOE5JYnZyU0lWR0hVaHpuS2l3Iiwic2Vzc2lvbl9pZCI6IjFLOXN0SDhuQ0FZclFJQXNuaWg1YVBtR1VCaDEifQ._uuuFcTdNjqugCKvck1KCrt4VUOwD9TJZ7giHkd-6eo)
2. Follow Netlify's verification steps
3. Set up a custom domain in your Netlify dashboard

### Domain Registration
For a truly short URL, you'll need to register a custom domain. Popular registrars:
- [Namecheap](https://www.namecheap.com/) - Affordable domains
- [Google Domains](https://domains.google/) - Simple integration
- [Cloudflare](https://www.cloudflare.com/products/registrar/) - Security-focused

After registration, add your domain in Netlify following the Custom Domain Setup steps.

### Custom Domain Setup
For a shorter, branded URL:
1. Go to [Netlify Domain Settings](https://app.netlify.com/sites/gmail-orchestrator-website-c67j2/settings/domain)
2. Click 'Add custom domain'
3. Enter your preferred domain (e.g. orchestrator.email)
4. Follow DNS configuration instructions

## 🔐 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🧠 Acknowledgments

_"Whoever loves discipline loves knowledge, but whoever hates correction is stupid."_
