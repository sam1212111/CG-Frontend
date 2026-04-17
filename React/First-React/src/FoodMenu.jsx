import React from 'react'
import FoodCart from './FoodCart';

const FoodMenu = () => {

    const foodMenus = [
    {
        id: 1,
        name: "Burger",
        price: 120,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        id: 2,
        name: "Pizza",
        price: 250,
        image: "https://images.unsplash.com/photo-1601924582975-7e7f0b4d1d8f"
    },
    {
        id: 3,
        name: "Pasta",
        price: 180,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
        id: 4,
        name: "French Fries",
        price: 90,
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
    },
    {
        id: 5,
        name: "Sandwich",
        price: 100,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f"
    },
    {
        id: 6,
        name: "Momos",
        price: 80,
        image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640"
    },
    {
        id: 7,
        name: "Biryani",
        price: 200,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
        id: 8,
        name: "Ice Cream",
        price: 70,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
        id: 9,
        name: "Noodles",
        price: 140,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
    },
    {
        id: 10,
        name: "Fried Rice",
        price: 150,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    },
    {
        id: 11,
        name: "Chicken Roll",
        price: 110,
        image: "https://images.unsplash.com/photo-1625944233241-4690e3d6b7d1"
    },
    {
        id: 12,
        name: "Paneer Tikka",
        price: 190,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    },
    {
        id: 13,
        name: "Dosa",
        price: 90,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921"
    },
    {
        id: 14,
        name: "Idli",
        price: 60,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be"
    },
    {
        id: 15,
        name: "Chole Bhature",
        price: 130,
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4"
    },
    {
        id: 16,
        name: "Samosa",
        price: 40,
        image: "https://images.unsplash.com/photo-1601050690117-5a9a7a41f7c5"
    },
    {
        id: 17,
        name: "Pav Bhaji",
        price: 120,
        image: "https://images.unsplash.com/photo-1619021066253-c6d0d25cbe97"
    },
    {
        id: 18,
        name: "Cold Coffee",
        price: 90,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    },
    {
        id: 19,
        name: "Milkshake",
        price: 110,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699"
    },
    {
        id: 20,
        name: "Chocolate Cake",
        price: 160,
        image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
    }
];


    return (
        <div>
            <FoodCart foodData={foodMenus} />
        </div>
    )
}

export default FoodMenu;
