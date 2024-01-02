import Item from '../Item/Item'
import style from './ListaItem.module.css'
import AddItem from '../AddItem/AddItem';
import { useState } from 'react';


function ListaItem({objetos, setObjetos}){

    const aoDetalhar = id => {
        const newItens = objetos.map(item => item.id === id ? { ...item, detail: !item.detail } : item);
        setObjetos(newItens);
        localStorage.setItem('objetos', JSON.stringify(newItens));
    }

    const aoDeletar = id =>{
        const newItens = objetos.filter(item => item.id !== id);
        setObjetos(newItens);
        localStorage.setItem('objetos', JSON.stringify(newItens));
    }

    const [cadastro,setCadastro] = useState(false)
    
    return(
        <>
            <div className={style.cadastroContainer}>
                <p>Abastecidas</p>
                <button className={style.btCadastro} onClick={()=>setCadastro(!cadastro)}>+</button>
            </div>
            <div>
                {cadastro?(<AddItem itens={objetos} setItens={setObjetos} />):(<></>) }
            </div>

            <div className={style.lista_container}>
                {objetos.map((objeto) =>
                    <Item 
                    key={objeto.id} 
                    objeto={objeto} 
                    aoClicar = {aoDetalhar} 
                    aoClicarIcone2={aoDeletar}/>
                )}
            </div>
        </>
    )
}

export default ListaItem