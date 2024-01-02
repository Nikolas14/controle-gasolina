import MostraSimples from "./Mostra/MostraSimples"

function MostraContainer({textoGrande,tipoInput,textoPequeno, aoClicar}) {
    let isEdit = false

    return (
        <>

            {isEdit ?
                (
                    <MostraSimples
                        textoGrande={textoGrande}
                        textoPequeno={textoPequeno}
                        aoClicar={aoClicar}
                    />
                ) : (
                    <MostraSimples
                        textoGrande={textoGrande}
                        textoPequeno={textoPequeno}
                        aoClicar={aoClicar}
                    />
                )}
        </>
    )
}


export default MostraContainer