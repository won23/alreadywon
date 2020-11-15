import { booksRef } from 'src/lib/firebase';

interface IGetBooks {
  email;
}

export default async function handler(req, res) {
  const { email = 'tim.won.m3@gmail.com' } = req.body;
  const body: IGetBooks = {
    email,
  };

  const snapshot = await booksRef.where('uploadedBy', '==', email).get();
  const books = [];
  snapshot.forEach((doc) => books.push(doc.data()));
  return res.status(200).json({ books: books });
}
