import { Link } from 'react-router-dom'
import { FiCalendar, FiUsers, FiShare2, FiDollarSign } from 'react-icons/fi'
import { FaAndroid } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  {
    icon: <FiCalendar />,
    cls: 'feature-icon-purple',
    title: 'Create & Manage Events',
    desc: 'Set up events with all the details — date, time, location, and description. Edit or update your events at any time, keeping guests always informed about the latest plans.',
  },
  {
    icon: <FiUsers />,
    cls: 'feature-icon-pink',
    title: 'Invite Your Contacts',
    desc: 'Send personalized invitations to your contacts directly through the app. Track RSVPs in real time so you always know how many people are coming.',
  },
  {
    icon: <FiShare2 />,
    cls: 'feature-icon-rose',
    title: 'Share Your Events',
    desc: 'Spread the word effortlessly — share event details on social media, messaging apps, or anywhere else with a single tap. Everyone stays informed and can confirm their attendance comfortably.',
  },
  {
    icon: <FiDollarSign />,
    cls: 'feature-icon-purple',
    title: 'Collaborative Funding',
    desc: 'Create shared funds for your event and let participants contribute. Perfect for group gifts, venue rentals, or any shared expense — all managed transparently within the app.',
  },
]

export default function About() {
  return (
    <div className="page-layout">
      <div className="bg-grid" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <Navbar />

      <main>
        <div className="container">
          <div className="page-hero">
            <p className="section-label">About</p>
            <h1 className="page-hero-title">A smarter way to plan events</h1>
            <p className="page-hero-desc">
              The Event Network was built to eliminate the chaos of event planning —
              no more scattered messages, missed updates, or disorganized costs.
              Everything you need, in one place.
            </p>
          </div>

          <section className="section" style={{ paddingTop: 0 }}>
            <div className="feature-rows">
              {features.map(f => (
                <div className="feature-row" key={f.title}>
                  <div className={`feature-row-icon ${f.cls}`}>{f.icon}</div>
                  <div>
                    <h2 className="feature-row-title">{f.title}</h2>
                    <p className="feature-row-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="cta-banner">
              <h2 className="cta-banner-title">Try it for yourself</h2>
              <p className="cta-banner-desc">
                Available on Android. Download the app and start planning today.
              </p>
              <div className="cta-banner-actions">
                <a href="/apk/the-event-network.apk" className="btn btn-primary">
                  <FaAndroid /> Download for Android
                </a>
                <Link to="/" className="btn btn-outline">Back to Home</Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
