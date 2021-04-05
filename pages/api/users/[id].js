import { db } from '../../../public/firebase';

export default async(req,res) => { 

  const { id } = req.query;
  const users =  await db.collection('users').doc(id).get()
  const doc = {
    id: users.id,
    ...users.data()
  }
  res.status(200).json({data:doc})
}
