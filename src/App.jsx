import '../src/style/App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Word from './Components/Word/Word'
import Button from './Components/Button/Button'
import Table from './Components/Table/Table'
import { useState } from 'react'

function App() {
  const [btn, setBtn] = useState(false);



  return (
    <>
      <div className='container__all'>
        <Header />
        <Main />

        <Word />


        <Footer />
        <Table />
        <div>
          {btn ? <Button clickHandler={() => { setBtn(true) }}>Edit</Button> : <Button clickHandler={() => { setBtn(false) }}>Save</Button>}
        </div>
      </div>
    </>
  )
}

export default App
