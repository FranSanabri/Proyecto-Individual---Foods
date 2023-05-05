import React, { useState } from "react";


export default function Paginated({ recipesPage, showedRecipes, paged, setPage, page }) {

    const[input,setInput] = useState(1);

    const back = () => {
        setInput(parseInt(input) - 1);
        setPage(parseInt(input) - 1 )
    }
    const next = () => {
        setInput(parseInt(input) + 1);
        setPage(parseInt(input) + 1 )
    }

    let pag = (p) => {
        setInput(parseInt(p))
        paged(p);
    }

    const pages = [];

    for (let i = 1; i <= Math.ceil(showedRecipes / recipesPage); i++) {
        pages.push(i)
    };

    return (
        <div >
            <button  onClick={back} disabled={page <= 1}> ⮜ </button>
            {
                <nav>
                    <ul >
                        {pages?.map((p) => (
                            <li key={p}>
                                <button onClick={() => pag(p)}>{p}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            }
            <button  onClick={next} disabled={page === pages.length}> ⮞ </button>
        </div>
    )
}