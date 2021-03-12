function Index(){
    return(
        <div className="header-container">
            <header>
                <h3><a href="#Home">Amei!</a></h3>
                <nav>
                    <ul>
                        <li><a href="#quemsomos">Quem somos</a></li>

                        <li><a href="#contato">Contatos</a></li>
                        <li>
                            <a href="https://www.instagram.com/amei.castanhas/">
                                <img src="/instagram.svg" width="23" height="23" alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5584988662623">
                                <img src="/whatsapp.svg" width="28" height="28" alt="Whatsapp" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Index;