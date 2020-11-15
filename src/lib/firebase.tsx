import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({});
}
const db = admin.firestore();
const firestore = admin.firestore;
const quotesRef = db.collection('quotes');
const booksRef = db.collection('books');

const getBooks = async (email = 'tim.won.m3@gmail.com') => {
  const snapshot = await booksRef.where('uploadedBy', '==', email).get();
  const books = [];
  snapshot.forEach((doc) => books.push(doc.data()));
  return JSON.parse(JSON.stringify(books)); // https://github.com/vercel/next.js/issues/11993
};

const getQuotes = async (email = 'tim.won.m3@gmail.com') => {
  const snapshot = await quotesRef.where('uploadedBy', '==', email).get();
  const quotes = [];
  snapshot.forEach((doc) => quotes.push(doc.data()));
  return JSON.parse(JSON.stringify(quotes));
};

export { db, quotesRef, booksRef, firestore, getBooks, getQuotes };
