import styles from "../styles/Home.module.css";
import { API_URL } from './api/config';
import Link from 'next/link'
const Home = ({userData}) => {  
  return (
    <div className={styles.container}>
      {userData.data?.map((item,index)=>(
      <Link href={`/users/[id]`} as={`/users/${item.id}`} key={index}>
        <button>
          <h1>{item.email}</h1>
        </button>
        </Link>
        ))}
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/users/`)
  const userData = await res.json()
  return {
    props: {
      userData,
    },
  }
}


