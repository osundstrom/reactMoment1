import "../Header.css";

//inbterface för headline(rubrik)
interface Oneheadline {
    headline: string; //string
}

//funktion som tar emot prop med typen av OneHeadline (string)
function Header({ headline }: Oneheadline) {


    return (
        //Skriver ut det som tas emot via prop
        <>
            <header>

                <h1>{headline}</h1>
            </header>

        </>
    );
}
//export
export default Header;