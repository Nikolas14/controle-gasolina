import { MdArrowDownward  } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

import MostraSimples from '../MostraContainer/Mostra/MostraSimples'
import style from'./AbastecidaDetail.module.css'

function AbastecidaDetail({objeto , aoClicar, aoClicarIcone2}){
    return(
        <div className={style.abastecidaDetailContainer}>
            <MdArrowDownward  size={'1.5em'}/>
            <div className={style.abastecidaDetail} onClick={()=>aoClicar(objeto.id)}>
                <MostraSimples
                textoGrande={'Data: '} 
                textoPequeno={ objeto.data}
                />
                <MostraSimples 
                textoGrande={'Preço do litro: '} 
                textoPequeno={'R$'+ objeto.precoLitro}
                />
                <MostraSimples 
                textoGrande={'Total pago: '} 
                textoPequeno={'R$'+ objeto.totalPago}
                />
                <MostraSimples 
                textoGrande={'Total de litros: '} 
                textoPequeno={' '+(objeto.totalPago/objeto.precoLitro).toFixed(1) + 'L'}
                />
                <MostraSimples 
                textoGrande={'Km: '} 
                textoPequeno={ objeto.kmAtual}
                />
                <MostraSimples 
                textoGrande={'Tipo combustivel: '} 
                textoPequeno={ objeto.tipoCombustivel}
                />

             </div>
            <div>
            <FaRegTrashCan size={'1.5em'} onClick={()=>aoClicarIcone2(objeto.id)}/>
        </div>
        </div>

    )
}

export default AbastecidaDetail