import Livro from "../Livro/Livro";

export default function ListLivro({ livro = []}){
    return(
        <>
            <div>
                {
                    livros.length>0 ?     
                    livros.map((liv, index)=>(
                        <Livro 
                            key={index}
                            titulo={liv.titulo}
                            autor={liv.autor}
                            ano={liv.ano}
                            genero={liv.genero}
                            capa={liv.capa}
                            disponivel={liv.disponivel}
                            badge={liv.badge}
                            children={liv.children}
                        />
                    )): <p>Nenhum livro Cadastrado</p>
                }
            </div>
        </>
    )
}