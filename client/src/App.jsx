import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('Kontroluji backend...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.ok ? 'Backend běží ✅' : 'Backend odpověděl divně'))
      .catch(() => setStatus('Backend není dostupný ❌'))
  }, [])

  return (
    <main>
      <h1>Resolutio</h1>
      <p>{status}</p>
    </main>
  )
}

export default App