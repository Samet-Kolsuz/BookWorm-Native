import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://picsum.photos/200',
    genre: 'Fiction',
    year: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://picsum.photos/201.jpg',
    genre: 'Fiction',
    year: 1960,
  },
  {
    id: 3,
    title: "George Orwell's 1984",
    author: 'George Orwell',
    image: 'https://picsum.photos/205.jpg',
    genre: 'Dystopian',
    year: 1949,
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.length + 1,
        ...action.payload,
      };
      state.push(newBook);
    },
    deleteBook: (state, action) => {
       return state.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, book } = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...book };
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
