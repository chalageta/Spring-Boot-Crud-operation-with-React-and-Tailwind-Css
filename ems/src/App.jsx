
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import {BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <>
    <Header />
    <ListEmployee />
    <Footer />
    </>
  )
}

export default App
