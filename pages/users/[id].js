import React from 'react';
import moment from 'moment'
import styles from "../../styles/Home.module.css";
import { API_URL } from '../api/config';

const DetailUser = ({userData}) => {

  function getDateTimeFromTimestamp(unixTimeStamp) {
   return moment.unix(unixTimeStamp).format("DD-MM-YYYY HH:mm:ss");
}

  return (
    <div className={styles.container}>
      <h1>{userData.data.email}</h1>
      <h1>{userData.data.id}</h1>
      <h1>{getDateTimeFromTimestamp(userData.data.lastSeen.seconds)}</h1>
      <img src={userData.data.photoUrl} width="120" height="120" style={{borderRadius:'60px'}} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/users/`)
  const data = await res.json()
  const paths = data.data.map((item)=>{
    return{
      params:{id:item.id.toString()}
    }
  })
  return{
    paths,
    fallback:true,
  }
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/api/users/${context.params.id}`)
  const userData = await res.json()
  return {
    props: {
      userData,
    },
  }
}

export default DetailUser;

