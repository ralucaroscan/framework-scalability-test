// src/App.js
import React from "react";
import { products } from "./products";

export default function App() {
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.name} - {p.price}</li>
                ))}
            </ul>
        </div>
    );
}
