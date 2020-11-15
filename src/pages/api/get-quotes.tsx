import { quotesRef } from 'src/lib/firebase';

interface IGetQuotes {
  email;
}

export default async function handler(req, res) {
  const { email = 'tim.won.m3@gmail.com' } = req.body;
  const body: IGetQuotes = {
    email,
  };

  const snapshot = await quotesRef.where('uploadedBy', '==', email).get();
  console.log('snapshot', snapshot);
  const quotes = [];
  snapshot.forEach((doc) => quotes.push(doc.data()));
  return res.status(200).json({ quotes: quotes });
}
