import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GifGrid";

export const useFetchGifs = (categorie) => {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])

    const getInfo = async () => {
        const imagenes = await getGifs(categorie);
        setImages(imagenes)
        setIsLoading(false)
    }

    useEffect(() => {
        getInfo();
    }, [])

    return [
        images,
        isLoading,
    ]

}