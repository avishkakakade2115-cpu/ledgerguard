import type { PropsWithChildren } from 'react'
import './AppShell.css'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <a className="app-brand" href="/" aria-label="LedgerGuard home">
          <span className="app-brand__mark" aria-hidden="true">
            LG
          </span>
          <span className="app-brand__name">LedgerGuard</span>
        </a>
        <span className="app-header__label">Finance workspace</span>
      </header>
      <main className="app-main" id="main-content">
        {children}
      </main>
    </div>
  )
}
