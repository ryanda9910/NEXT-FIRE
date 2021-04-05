// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from '../../public/firebase';

export default async(req,res) => {
  const entries = await db.collection('users').get();
  const dataUser = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  res.status(200).json({data:dataUser})
}
