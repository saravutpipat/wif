import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="WIFCasino Logo" src="/logo.png" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://t.me/xxxxxxxxx" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://birdeye.so/token/xxxxxxxxxxxxxxx/xxxxxxxxxxxxxxxx?chain=solana" target="_blank" rel="noreferrer">
              DexScreen
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
