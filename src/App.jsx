import { useEffect, useState } from 'react'
import ListaItem from './components/ListaItem/ListaItem'
import style from './App.module.css'

function App() {
  const [objetos, setObjetos] = useState([])

  useEffect(() => {
    const savedObjetos = JSON.parse(localStorage.getItem('objetos')) || [];
    setObjetos(savedObjetos);
}, []);


  return (
    <div className={style.app_container}>
      <ListaItem objetos={objetos} setObjetos={setObjetos} />
    </div>
  )
}

export default App
