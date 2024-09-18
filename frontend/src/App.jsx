import { useEffect, useState } from 'react'
import Navbarx from './component/Navbar'
import InputString from './component/InputString'
import InputSelect from './component/Select'
import InputComponent from './component/AddNewButton'
import Auth from './config/auth'
import './App.css'
import AddNewButton from './component/AddNewButton'
import Add from './component/Add'
import CsvDownloadButton from 'react-json-to-csv'
import Xyz from './pages/Xyz'

function App() {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let auth = new Auth("/api/views", "post");
  //       let x = await auth.fetchData();
  //       console.log(x);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);




//overflow-hidden
  return (
    <div>
      <main className="dark  min-h-screen  overflow-hidden  text-foreground bg-slate-950">
        <Navbarx />
        {/* <InputSelect/>
        <AddNewButton/> */}
        <Add/>
      
      </main>
      
    </div>
  )
}

export default App








