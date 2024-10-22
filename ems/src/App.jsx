
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import AddEmployee from './components/AddEmployee'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactUs from './components/ContactUs'
import News from './components/News'
import UpdateEmployee from './components/UpdateEmployee'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<ListEmployee />} />
      <Route path='employees' element={<ListEmployee />} />
      <Route path='add-employee' element={<AddEmployee />} />
       <Route path='contact' element={<ContactUs />} />
        <Route path='news' element={<News />} />
        <Route path='/edit-employee/:id' element= {<UpdateEmployee />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
