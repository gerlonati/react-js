import CartWidget from "../CartWidget/CartWidGet"

const NavBar = () => {
    return
    (
        <nav style={{ color: "blue" }}>
            <h1>La tienda de la selección</h1>
            <section>
                <button>Camisetas</button>
                <button>Accesorios</button>
                <button>Hogar</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar