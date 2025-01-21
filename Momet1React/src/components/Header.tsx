import "../Header.css";

interface Oneheadline {
    headline: string;
}

function Header({headline}: Oneheadline) {


    return (
        <>

    <header>
        <h1>{headline}</h1>
    </header>

    </>   
    );
}

export default Header;