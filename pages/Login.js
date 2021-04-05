import React from 'react'
import { auth, provider } from '../public/firebase'
import styles from '../styles/Home.module.css'

export default function Login() {


  const AuthLogin=()=>{
    try {
      auth.signInWithPopup(provider).then((res)=>{
        console.log("RESPONE from google Auth",res)
      }).catch((err)=>(
        console.log(err,"SOMETHING WRONG")
      ))
    } catch (error) {
      console.log("ERROR",error)
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
