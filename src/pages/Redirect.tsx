import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Redirect() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const id = params.get('id')
    if (!id) {
      navigate('/download')
      return
    }
    window.location.href = `theeventnetwork://${id}`
    const timer = setTimeout(() => navigate('/download'), 2000)
    return () => clearTimeout(timer)
  }, [params, navigate])

  return (
    <div className="page-layout">
      <div className="bg-grid" />
      <div className="redirect-page">
        <div className="redirect-content">
          <div className="redirect-spinner" />
          <p style={{ color: 'var(--text-2)', fontFamily: 'var(--font-body)' }}>
            Opening The Event Network app…
          </p>
        </div>
      </div>
    </div>
  )
}
