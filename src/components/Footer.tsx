export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-logo">The Event Network</p>
        <p className="footer-copy">© {new Date().getFullYear()} The Event Network. All rights reserved.</p>
      </div>
    </footer>
  )
}
