import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import UserPhotoPost from '../Feed/UserPhotoPost';
import Feed from '../Feed/Feed';
import UserStats from '../Feed/UserStats';

function user() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default user;
