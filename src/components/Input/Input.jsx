function Input({ type, placeholder, setX, x, estilo }) {
    return (
        <div>
            <input className={estilo}
                type={type}
                placeholder={placeholder}
                onChange={(e) => setX(e.target.value)}
                value={x}
            ></input>
        </div>
    )
}

export default Input