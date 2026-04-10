import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodDetailsPage = async ({ params }) => {
    const { foodId } = await params;
    console.log(foodId)
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json()
    const food = data.data
    console.log('fooddetails', food)

    const { dish_name, category, alternative_names, image_link } = food;


    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image src={image_link} width={500} height={500} alt={dish_name}>

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{dish_name}</h2>
                <p>{category}</p>
                <ul>
                    {
                        alternative_names.map((alternative_name, index) => (
                            <li key={index}>{alternative_name}</li>
                        ))
                    }
                </ul>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">buyNow</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;