"use client"

import React from 'react';
import scss from "./GetCategoryById.module.scss";
import { useParams } from 'next/navigation';
import { useGetCategoryBiIdQuery } from '@/redux/api/category';

const GetCategoryById = () => {
    const params = useParams(); 
    const categoryId = params.category_id; 
    const { data } = useGetCategoryBiIdQuery(categoryId as string, {
        skip: !categoryId,  
    });

    if (!categoryId) {
        return <div>Loading...</div>;
    }

    return (
        <section className={scss.CategoryById}>
            <div className="container">
                <div className={scss.content}>
                    <h1>{data?.name}</h1>
                    {data?.icons[0] && (
                        <img src={data.icons[0].url} alt={data.name} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default GetCategoryById;
