import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    const { category, dish_name, image_link } = food;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image src={image_link} width={500} height={500} alt={dish_name}>

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{dish_name}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <Link href={`foods/${food.id}`} className="btn btn-primary">show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;