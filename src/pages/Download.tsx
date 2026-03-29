import { FaAndroid, FaGlobe } from 'react-icons/fa'
import { FiDownload, FiExternalLink, FiCheck } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Download() {
  return (
    <div className="page-layout">
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <Navbar />

      <main>
        <div className="container">
          <div className="page-hero">
            <p className="section-label">Download</p>
            <h1 className="page-hero-title">Get The Event Network</h1>
            <p className="page-hero-desc">
              Choose your platform and start organizing events today.
            </p>
          </div>

          <section className="section" style={{ paddingTop: 0 }}>
            <div className="download-grid">
              <div className="download-card">
                <div className="download-card-icon feature-icon-purple">
                  <FaAndroid />
                </div>
                <span className="download-badge"><FiCheck /> Free</span>
                <h2 className="download-card-title">Android App</h2>
                <p className="download-card-desc">
                  Download the native Android application for the full experience —
                  create events, invite contacts, manage funds, and more.
                </p>
                <a
                  href="/apk/the-event-network.apk"
                  className="btn btn-primary"
                  download
                >
                  <FiDownload /> Download APK
                </a>
              </div>

              <div className="download-card">
                <div className="download-card-icon feature-icon-pink">
                  <FaGlobe />
                </div>
                <span className="download-badge"><FiCheck /> No install required</span>
                <h2 className="download-card-title">Web Version</h2>
                <p className="download-card-desc">
                  Access The Event Network directly from your browser — no installation
                  needed. Works on any device with an internet connection.
                </p>
                <a
                  href="https://theeventnetwork.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FiExternalLink /> Open Web App
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
