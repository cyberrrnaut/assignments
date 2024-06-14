import { useState } from "react";
import { RevenueCard } from "./RevenueCard";

export const CardGrid = () => {
    const [cards, setCards] = useState([
        {
            title: "Amount Pending",
            amount: "92,312.20",
            orderCount: 13,
        },
        {
            title: "Amount Processed",
            amount: "23,92,312.19",
        },
        // Add more cards as needed
    ]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
                <RevenueCard
                    key={index} // Make sure to provide a unique key for each item in the array
                    title={card.title}
                    amount={card.amount}
                    orderCount={card.orderCount}
                />
            ))}
        </div>
    );
};
