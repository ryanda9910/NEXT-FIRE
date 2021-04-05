import React from 'react'
import { auth, provider } from '../public/firebase'
import styles from '../styles/Home.module.css'

export default function Login() {


  const AuthLogin=()=>{
    try {
      auth.signInWithPopup(provider).then((res)=>{
        return res
      }).catch((err)=>{
        throw err
      })
    } catch (error) {
      throw error
    }
  }


  return (
    <div className={styles.container}>
      <button onClick={AuthLogin}>
        Login Google
      </button>
    </div>
  )
}
