import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ categorie }) => {

    const [images, isLoading] = useFetchGifs(categorie);



    return (<>
        <h3>{categorie}</h3>
        <h2>{isLoading && 'cargando...'}</h2>
        <div className="card-grid"> {
            images.map((img) => (
                <GifItem key={img.id} {...img} />
            ))
        }</div>
    </>)
}
