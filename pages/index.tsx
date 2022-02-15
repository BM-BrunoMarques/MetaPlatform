import Head from 'next/head'
import Login from '../components/login/login'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()
  const [isAuth, setAuth] = useState(isAuthenticated)

  if (!isAuth) return <Login setAuth={setAuth} />

  return (
    <div>
      <Head>
        <title>Meta Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={logout}>log out!</button>
    </div>
  )
}
