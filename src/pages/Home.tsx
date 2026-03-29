import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiUsers, FiShare2, FiDollarSign, FiCheck, FiBell } from 'react-icons/fi'
import { FaAndroid } from 'react-icons/fa'
import { MdArrowUpward } from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  {
    icon: <FiCalendar />,
    cls: 'feature-icon-purple',
    title: 'Create Events',
    desc: 'Set up events in seconds — date, time, location, and everything your guests need to know.',
  },
  {
    icon: <FiUsers />,
    cls: 'feature-icon-pink',
    title: 'Invite & RSVP',
    desc: 'Send invitations to your contacts and track attendance with real-time RSVP updates.',
  },
  {
    icon: <FiShare2 />,
    cls: 'feature-icon-rose',
    title: 'Share Everywhere',
    desc: 'Spread the word on social media and messaging platforms with a single tap.',
  },
  {
    icon: <FiDollarSign />,
    cls: 'feature-icon-purple',
    title: 'Shared Funds',
    desc: 'Create collaborative funding pools so everyone can contribute to the event costs.',
  },
  {
    icon: <FiCheck />,
    cls: 'feature-icon-pink',
    title: 'Stay Organized',
    desc: 'No more scattered emails or messages — all your event details in one place.',
  },
  {
    icon: <FiBell />,
    cls: 'feature-icon-rose',
    title: 'Smart Reminders',
    desc: 'Automated reminders keep your guests informed and your event on track.',
  },
]

export default function Home() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 1000)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page-layout">
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <Navbar />

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Now available on Android
                </div>
                <h1 className="hero-title" style={{ transform: 'scaleX(1.15) scaleY(1.2)', transformOrigin: 'top left', marginBottom: '2.5rem' }}>
                  Events that{' '}
                  <span className="hero-title-highlight">bring people together</span>
                </h1>
                <p className="hero-subtitle">
                  Plan, invite, share, and fund your events — all from one place.
                  The Event Network makes organizing social gatherings effortless.
                </p>
                <div className="hero-actions">
                  <a href="/apk/the-event-network.apk" className="btn btn-primary">
                    <FaAndroid /> Download for Android
                  </a>
                  <Link to="/about" className="btn btn-outline">
                    Learn more
                  </Link>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-glow-ring" />
                <img
                  src="/img/mobile.png"
                  alt="The Event Network app screenshot"
                  className="hero-phone"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Features</p>
              <h2 className="section-title" style={{ transform: 'scaleX(1.15) scaleY(1.2)', transformOrigin: 'top center', marginBottom: '1.75rem' }}>Everything you need to host great events</h2>
              <p className="section-desc">
                From birthday parties to business conferences, The Event Network gives you
                the tools to make every gathering memorable.
              </p>
            </div>
            <div className="features-grid">
              {features.map(f => (
                <div className="feature-card" key={f.title}>
                  <div className={`feature-icon ${f.cls}`}>{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <h2 className="cta-banner-title" style={{ transform: 'scaleX(1.15) scaleY(1.2)', transformOrigin: 'top center', marginBottom: '1.75rem' }}>Ready to plan your next event?</h2>
              <p className="cta-banner-desc">
                Join the network and start creating unforgettable experiences today.
              </p>
              <div className="cta-banner-actions">
                <a href="/apk/the-event-network.apk" className="btn btn-primary">
                  <FaAndroid /> Get the Android app
                </a>
                <a
                  href="https://theeventnetwork.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Open Web Version
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button
        className={`scroll-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <MdArrowUpward />
      </button>
    </div>
  )
}
