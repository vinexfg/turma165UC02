import  style from "./Header.module.css"
export default function Header(){
    return(
        <>
            <header>
            <h1>
                MEU SITE
            </h1>
            <nav>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
            </header>
        </>
    )
}