import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'
import { originals , action , ComedyMovies , HorrorMovies ,RomanceMovies , Documentaries} from './urls'

function App() {
 

  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost title={'Netflix Originals'} url={originals}/>
    <RowPost title={'Action'} isSmall url={action}/>
    <RowPost title={'ComedyMovies'} isSmall url={ComedyMovies}/>
    <RowPost title={'HorrorMovies'} isSmall url={HorrorMovies}/>
    <RowPost title={'RomanceMovies'} isSmall url={RomanceMovies}/>
    <RowPost title={'Documentaries'} isSmall url={Documentaries}/>
    <Footer/>

    </>
  )
}

export default App
