import Movies from "./components/Movies"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    //Alla komponenter som skrivs ut på sidan, med header skickas headline (prop)
    <>
        <Header headline="Filmer - Moment 1"/>
        <Movies/>
        <Footer/>
    </>
  )
}

export default App
