import Abastecida from "../Abastecida/Abastecida"
import AbastecidaDetail from "../AbastecidaDetail/AbastecidaDetail"

function Item({objeto,aoClicar,aoClicarIcone2}){

    
    return(
        <>
        {
            objeto.detail?(
                <Abastecida objeto={objeto} aoClicar={aoClicar}/>
            ):(
                <AbastecidaDetail objeto={objeto} aoClicar={aoClicar} aoClicarIcone2={aoClicarIcone2}/>
            )
        }
        </>
    
    )
}

export default Item