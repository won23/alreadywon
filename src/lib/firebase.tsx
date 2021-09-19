import { id } from 'date-fns/locale';
import * as admin from 'firebase-admin';
import { GiConsoleController } from 'react-icons/gi';

if (!admin.apps.length) {
  admin.initializeApp({});
}
const db = admin.firestore();
const firestore = admin.firestore;
const quotesRef = db.collection('quotes');
const booksRef = db.collection('books');

const getBooks = async (email = 'tim.won.m3@gmail.com') => {
  const snapshot = await booksRef
    .where('uploadedBy', '==', email)
    .select('title', 'authors')
    .orderBy('title')
    .get();
  const books = [];
  snapshot.forEach((doc) => books.push({ id: doc.id, ...doc.data() }));
  return JSON.parse(JSON.stringify(books)); // https://github.com/vercel/next.js/issues/11993
};

const getQuotes = async (email = 'tim.won.m3@gmail.com') => {
  const snapshot = await quotesRef.where('uploadedBy', '==', email).get();
  const quotes = [];
  snapshot.forEach((doc) => quotes.push(doc.data()));
  return JSON.parse(JSON.stringify(quotes));
};

const getBookPaths = async (email = 'tim.won.m3@gmail.com') => {
  const snapshot = await booksRef
    .where('uploadedBy', '==', email)
    .orderBy('title')
    .get();
  const books = [];
  snapshot.forEach((doc) => {
    books.push({ params: { id: doc.id } });
    // if (doc.data().title.includes(':')) {
    //   let title = doc
    //     .data()
    //     .title.toLowerCase()
    //     .replace(/[^:]*$/gi, '') // remove subtitle
    //     .replace(/ /gi, '-') // replace spaces with dashes
    //     .replace(/[:'.,]/gi, ''); //remove special chars
    //   books.push({ params: { id: title, title: doc.data().title } });
    // }
  });
  return JSON.parse(JSON.stringify(books)); // https://github.com/vercel/next.js/issues/11993
};

const getBook = async (
  id: string,
  email = 'tim.won.m3@gmail.com'
): Promise<IBook> => {
  const data = await (await booksRef.doc(id).get()).data();

  return JSON.parse(JSON.stringify({ ...data })); // https://github.com/vercel/next.js/issues/11993
};

export {
  db,
  quotesRef,
  booksRef,
  firestore,
  getBooks,
  getQuotes,
  getBook,
  getBookPaths,
};
