import './App.css'
import React from 'react'
import Logo from './b1abef27bec04fc59e3d1f9cfcd8d432.png'
import SearchInput from './components/SearchInput'

//wouter 
import { Link, Route} from 'wouter'
import SearchResult from './pages/SearchResult'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <div className='App'>
      <Link className='dev' to='/'>Mviana.dev<img alt='Logo' src={Logo}/></Link>
        <SearchInput  className='input'/>
      <GifsContextProvider>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResult}/>
        <Route path='/gif/:id' component={Detail}/>
      </GifsContextProvider>
    </div>
  )
}

export default App;
