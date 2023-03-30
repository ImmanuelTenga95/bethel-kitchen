import React from 'react'
import index from './index.css'
import CardDetails from './components/CardDetails'
import  Deals  from './components/Deals'
import  Footer  from './components/Footer'
import  Header  from './components/Header'
import  HowItWork  from './components/HowItWork'
import  Navbar from './components/Navbar'
import  PopularItems  from './components/PopularItems'
import  SearchByFood  from './components/SearchByFood'
import  TopCities  from './components/TopCities'


function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Deals />
        <HowItWork />
        <PopularItems />
        <SearchByFood />
        <CardDetails />
        <TopCities />
        <Footer />

    </div>
  )
}

export default App