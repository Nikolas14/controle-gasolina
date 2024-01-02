import MostraSimples from '../MostraContainer/Mostra/MostraSimples';
import MostraContainer from '../MostraContainer/MostraContainer'
import style from './Abastecida.module.css'
import { MdArrowForward } from "react-icons/md";

function Abastecida({objeto, aoClicar}){

    
    return(
        <div className={style.item_container} onClick={()=>aoClicar(objeto.id)}>
            <MdArrowForward size={'1.5em'}/>
            <MostraContainer tipoInput={'number'} textoGrande={'Preço do litro: '} textoPequeno={'R$'+ objeto.precoLitro}/>
            <MostraSimples 
            textoGrande={'Total pago: '} 
            textoPequeno={'R$'+ objeto.totalPago}
            />
        </div>
    
    )
}

export default Abastecida