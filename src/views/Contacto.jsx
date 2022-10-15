const Contacto = ()=> {
    return (
        <main>
            <h1>Cuéntanos, ¿En qué te podemos ayudar?</h1>
            <form>
                <label htmlFor="email">Correo</label>
                <input type="email" placeholder="Ingresa tu correo" />

                <label htmlFor="descripción">Descripción:</label>
                <textarea id="descripción" cols="30" rows="5"></textarea>

                <button className="btn">Enviar</button>
            </form>
        </main>
    )
}

export default Contacto