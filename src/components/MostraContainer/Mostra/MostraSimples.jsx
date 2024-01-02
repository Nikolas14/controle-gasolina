import style from './Mostra.module.css'


function MostraSimples({ textoGrande, textoPequeno }) {
    return (
        <div className={style.mostra_conteiner}>
            <p className={style.texto_grande}>{textoGrande}</p>
            <p className={style.texto_pequeno}>{textoPequeno}</p>
        </div>
    )
}

export default MostraSimples