import Head from 'next/head'
import Login from '../components/login/login'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

export default function Home() {
  const { isAuthenticated, logout, isUnauthenticated } = useMoralis()
  const [isAuth, setAuth] = useState(isAuthenticated)

  useEffect(() => {})

  return (
    <>
      <AnimatePresence>
        {!isAuthenticated ? (
          <motion.div
            className="absolute top-0 left-0 h-screen w-full bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1000 } }}
          >
            <Login setAuth={setAuth} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isAuthenticated ? (
          <motion.div
            className="absolute top-0 left-0 h-screen w-full bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Head>
              <title>Meta Platform</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={logout}>Welcome Logout!</button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
