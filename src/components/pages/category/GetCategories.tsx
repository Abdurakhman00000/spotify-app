"use client";  // Не забываем "use client" для правильной работы в Next.js

import React from 'react';
import scss from './GetCategories.module.scss';
import { useGetCategoryQuery } from '@/redux/api/category';
import PlayList from '../homeSections/PlayList';
import { useRouter } from 'next/navigation';
import { FaCirclePlay } from "react-icons/fa6";  // Импорт иконки

const GetCategories = () => {
  const { data } = useGetCategoryQuery();
  const router = useRouter();

  const handleClickCategory = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <section className={scss.Categories}>
      <PlayList />
      <div className="container">
        <div className={scss.content}>
          <h1>Browse all</h1>
          <div className={scss.categories}>
            {data?.categories.items.map(item => (
              <div
                key={item.id}
                className={scss.category}
                onClick={() => handleClickCategory(item.id)}
              >
                <img src={item.icons[0].url} alt={item.name} />
                <div className={scss.icon}>
                  <FaCirclePlay />  
                </div>
                <div className={scss.p}>
                  <p>{item.name}</p>
                </div>
              </div>
            )) || <div>No data...</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetCategories;
