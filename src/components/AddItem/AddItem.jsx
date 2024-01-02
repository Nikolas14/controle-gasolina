import { useState } from 'react';
import style from './AddItem.module.css'

import { v4 as uuidv4 } from "uuid";
import Input from '../Input/Input';
uuidv4()

function AddItem({ itens, setItens }) {
    
    const [data, setData] = useState('')
    const [precoLitro, setPrecoLitro] = useState('')
    const [totalPago, setTotalPago] = useState('')
    const [tipoCombustivel, setTipoCombustivel] = useState('Gasolina')
    const [kmAtual, setKmAtual] = useState('')


    const addItem = item=>{
        const newItem = [ ...itens,{
            id: uuidv4(), 
            data:data,
            precoLitro: precoLitro,
            totalPago: totalPago,
            tipoCombustivel: tipoCombustivel,
            kmAtual: kmAtual,
            detail:true

        }]
        setItens(newItem)
        localStorage.setItem('objetos', JSON.stringify(newItem));
    }

    const aoSubmeter = (e) => {
        e.preventDefault();
        addItem(precoLitro,totalPago)
    };

    return (
        <form className={style.input_container}>
            <h1>Abasteceu!</h1>
            <Input
                type={'date'}
                placeholder={''}
                setX={setData}
                x={data}
                estilo={style.inputTipoCombustivel}
            />
            <Input
                type={'number'}
                placeholder={'Preço litro do combustivel'}
                setX={setPrecoLitro}
                x={precoLitro}
                estilo={style.inputLitro}
            />
            <Input
                type={'number'}
                placeholder={'Preço total pago'}
                setX={setTotalPago}
                x={totalPago}
                estilo={style.inputTotal}
            />
            <Input
                type={'text'}
                placeholder={'Tipo de combustivel'}
                setX={setTipoCombustivel}
                x={tipoCombustivel}
                estilo={style.inputTipoCombustivel}
            />
            <Input
                type={'number'}
                placeholder={'Km atual'}
                setX={setKmAtual}
                x={kmAtual}
                estilo={style.inputTotal}
            />
            <button className={style.btAddAbastecida} onClick={aoSubmeter}>Ok</button>
        </form>
    )
}

export default AddItem