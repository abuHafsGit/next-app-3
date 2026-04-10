import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foods = data.data
    console.log(foods)
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 '>
                {
                    foods.map((food) => (
                        <FoodCard key={food.id} food={food} />
                    ))
                }
            </div>

        </div>
    );
};

export default FoodsPage;