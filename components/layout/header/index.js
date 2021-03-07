import Image from 'next/image'
function Index(){
    return(
        <header>
            <h3>Amei Castanhas</h3>
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5584988662623">
                            <Image
                                src="/whatsapp.svg"
                                alt="Whatsapp"
                                width={32}
                                height={32}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/amei.castanhas/">
                            <Image
                                src="/instagram.svg"
                                alt="Instagram"
                                width={32}
                                height={32}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Index;