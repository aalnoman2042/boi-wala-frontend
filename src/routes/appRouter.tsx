// src/routes/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
// import Layout from '../layout/Layout';
import { Home } from '../pages/home/home';
import { AddBook } from '../pages/add-book/AddBook';
import { BorrowSummery } from '../pages/borrow-summery/BorrowSummery';
import { AllBooks } from '../pages/allbooks/AllBooks';
import Layout from '../layout/layout';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<AllBooks />} />
        <Route path="create-book" element={<AddBook />} />
        <Route path="borrow-summary" element={<BorrowSummery />} />
      </Route>
    </Routes>
  );
}
