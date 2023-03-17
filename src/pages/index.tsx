import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './../shared/styles/signIn.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/store/rootReducer'
import { useState } from 'react'
import { signInSlice } from '@/store/slice/SignIn/slice'
import { setSignInDataAction } from '@/store/slice/SignIn/actions'
import { signInSelector } from '@/store/slice/SignIn/selectors'

export default function Home() {
  const userEmail = useAppSelector(signInSelector)
  const dispatch = useAppDispatch()

  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.signIn_wrapper}>
          <div className={styles.signIn_form}>
            {userEmail ?
              <div>
                Hello, {userEmail}!
                <br />
                <button onClick={() => {
                  dispatch(signInSlice.actions.removeSignInDataAction())
                }}>Log out</button>
              </div>
              :
              <>
              
                <h2>Sign In</h2>

                <input className={styles.signIn_form__input} value={inputData.email} onChange={(e) => setInputData(prev => ({
                  ...prev,
                  email: e.target.value
                }))} type="text" />

                <input className={styles.signIn_form__input} value={inputData.password} onChange={(e) => setInputData(prev => ({
                  ...prev,
                  password: e.target.value
                }))} type="password" />

                <button onClick={() => {
                  dispatch(signInSlice.actions.setSignInDataAction( inputData))
                  setInputData({
                    email: '',
                    password: ''
                  })
                }}>SignIn</button>
              </>
            }

          </div>
        </div>
      </main>
    </>
  )
}