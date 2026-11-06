import { AppShell } from './components/layout/AppShell'
import './App.css'

function App() {
  return (
    <AppShell>
      <section className="welcome-panel" aria-labelledby="welcome-title">
        <p className="welcome-panel__eyebrow">LedgerGuard workspace</p>
        <h1 id="welcome-title">Your workspace starts here.</h1>
        <p>
          The frontend foundation is ready for focused, reusable finance
          workflows.
        </p>
      </section>
    </AppShell>
  )
}

export default App
