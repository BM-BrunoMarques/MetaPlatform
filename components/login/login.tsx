import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { useMoralis } from 'react-moralis'
import LoadingScreen from './LoadingScreen'
import { AnimatePresence, motion } from 'framer-motion'

type Props = { setAuth: React.Dispatch<React.SetStateAction<boolean>> }

function login({ setAuth }: Props) {
  const logoRef = useRef<HTMLDivElement>(null)
  const [logoPosition, setLogoPosition] = useState<number | string>(1)

  const { authenticate, isAuthenticating, isAuthenticated, logout } =
    useMoralis()

  const signIn = () => {
    if (logoRef.current) setLogoPosition(logoRef.current.offsetTop)
    authenticate({
      signingMessage: 'Login request for MetaPlatform!',
    })
  }

  return (
    <motion.div
      exit={{
        rotate: 180,
        transition: { delay: 2000 },
      }}
    >
      <AnimatePresence>
        {isAuthenticating ? (
          <LoadingScreen logoPosition={logoPosition} />
        ) : null}
      </AnimatePresence>
      <motion.div
        animate={
          isAuthenticated
            ? { opacity: 0 }
            : isAuthenticating
            ? { opacity: 0.8 }
            : {}
        }
        className="relative bg-black text-white"
      >
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <div className="border-blackborder-opacity-60 flex w-10/12 flex-col items-center justify-center gap-4 rounded-3xl border bg-black bg-opacity-70 py-20 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <motion.div
              ref={logoRef}
              initial={{ rotate: 0 }}
              animate={
                isAuthenticating
                  ? { opacity: 0, scale: 1.2 }
                  : { opacity: 1, scale: 1, transition: { delay: 0.2 } }
              }
            >
              <Image priority src="/images/logo.png" width={150} height={150} />
            </motion.div>

            <motion.div animate={isAuthenticating ? { opacity: 0 } : {}}>
              <h1 className="text-2xl">Welcome to Meta Platform</h1>
              <div className="my-3 text-center">
                <button onClick={signIn} className="my-4">
                  Log in
                </button>
              </div>
            </motion.div>
            {isAuthenticated ? (
              <button onClick={logout}>log out!</button>
            ) : null}
          </div>
        </div>
        <div className="scale-spin-slow h-screen w-full">
          <Image
            priority
            objectFit="cover"
            layout="fill"
            src="/images/bg-purp-squares.jpg"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default login
