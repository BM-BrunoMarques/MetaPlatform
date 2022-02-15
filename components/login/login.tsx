import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

type Props = { setAuth: React.Dispatch<React.SetStateAction<boolean>> }

function login({ setAuth }: Props) {
  const { authenticate, isAuthenticating, isAuthenticated, logout } =
    useMoralis()
  const signIn = () => {
    authenticate({
      signingMessage: 'Login request for MetaPlatform!',
    })
  }

  return (
    <div className="relative bg-black text-white">
      <div
        className={`absolute z-10 flex h-full w-full items-center justify-center`}
      >
        <div className="border-blackborder-opacity-60 flex w-10/12 flex-col items-center justify-center gap-4 rounded-3xl border bg-black bg-opacity-70 py-20 md:w-8/12 lg:w-6/12 xl:w-4/12">
          <Image
            priority
            className={
              isAuthenticating ? 'animate-spin-slow' : 'animate-spin-slow'
            }
            src="/images/logo.png"
            width={150}
            height={150}
          />
          <h1>Welcome to Meta Platform</h1>
          <button onClick={() => signIn()} className="my-4">
            {!isAuthenticating ? (
              'Log in'
            ) : (
              <div className="flex">
                <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Authenticating...
              </div>
            )}
          </button>
          <button onClick={logout}>log out!</button>
        </div>
      </div>
      <div className="scale-spin-slow h-screen w-full">
        <Image priority layout="fill" src="/images/bg-purp-squares.jpg" />
      </div>
    </div>
  )
}

export default login
