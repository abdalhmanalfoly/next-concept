/*"use client";

import { useEffect, useState } from "react";

export default function Todo() {
    const [respond, setRespond] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products/1')
            const json = await res.json();
            setRespond(json);
        };
        
        fetchData();
    }, []);

    return (
        <div>
            <h1>{respond.title}</h1>
        </div>
    );
}
*/