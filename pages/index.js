import { useState } from "react";
import Link from 'react';

function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Contador />
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador+1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home