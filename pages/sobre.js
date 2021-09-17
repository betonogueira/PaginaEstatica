import Link from 'react';

function Home() {
    return (
        <div>
            <h3>Sobre</h3>
            <Contador />
            <Link href="/home">
                <a>Home</a>
            </Link>
        </div>
    )
}