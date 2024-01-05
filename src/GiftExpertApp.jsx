import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategories = (valor) => {
        if (categories.includes(valor)) return
        setCategories(c => [valor, ...c])
    }

    return (<>

        <h1>Gift Expert App</h1>
        <AddCategory onaddcategories={onAddCategories} />

        <ol>{categories.map(cat => (
            <GifGrid key={cat} categorie={cat} />
        ))
        }</ol>
    </>)
}
