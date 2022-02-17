import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

type Props = { logoPosition: number | string }

function LoadingScreen({ logoPosition }: Props) {
  console.log(logoPosition)
  const { isAuthenticating, isAuthenticated } = useMoralis()
  return (
    <motion.div
      className="absolute top-0 left-0 z-50 h-screen w-full"
      initial={{ y: '-100vh', rotate: 0 }}
      animate={{ y: '0', transition: { duration: 0.3 } }}
      exit={
        !isAuthenticated
          ? { y: '-100vh', transition: { delay: 0.5, type: 'ease' } }
          : {}
      }
      transition={{ type: 'ease' }}
    >
      <div className="absolute flex h-screen w-full">
        <motion.div
          exit={
            isAuthenticated ? { x: '-100%', transition: { type: 'ease' } } : {}
          }
          className="h-full w-full bg-indigo-500 opacity-70"
        ></motion.div>
        <motion.div
          exit={
            isAuthenticated ? { x: '100%', transition: { type: 'ease' } } : {}
          }
          className="h-full w-full bg-indigo-500 opacity-70"
        ></motion.div>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 1.1, y: logoPosition }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.3, type: 'ease' },
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'ease' }}
      >
        <Image
          priority
          className={'animate-spin-slow'}
          src="/images/logo.png"
          width={150}
          height={150}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <div className="my-5 flex flex-col-reverse items-center justify-center">
            <svg
              className="my-6 mr-3 h-auto w-10 animate-spin"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#FFFFFF"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#FFFFFF"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-5xl text-white">Authenticating</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
