// pages/index.js
import React from "react";
import { products } from "../data/products";

export default function Home() {
    return (
        <div>
            <h1>Next.js Product List (SSR)</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.name} - {p.price}</li>
                ))}
            </ul>
        </div>
    );
}
