import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()
  if (!isAuthenticated) return <Login />

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
