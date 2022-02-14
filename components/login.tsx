import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

// type Props = {}

function login({}) {
  const { authenticate } = useMoralis()

  return (
    <div className="relative bg-black text-white">
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <div className="border-blackborder-opacity-60 flex w-10/12 flex-col items-center justify-center gap-4 rounded-3xl border bg-black bg-opacity-70 py-20 md:w-8/12 lg:w-6/12 xl:w-4/12">
          <Image
            className="animate-spin-slow"
            src="/images/logo.png"
            width={150}
            height={150}
          />
          <h1>Welcome to Meta Platform</h1>
          <button onClick={authenticate} className="my-4">
            Log in
          </button>
        </div>
      </div>

      <div className="h-screen w-full">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/bg-purp-squares.jpg"
        />
        {/* Login form */}
      </div>
    </div>
  )
}

export default login
