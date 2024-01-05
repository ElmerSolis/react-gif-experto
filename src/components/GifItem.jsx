
export const GifItem = ({ id, title, img }) => {
    return (
        <div className="card">
            <img src={img} alt={id} />
            <p>{title} </p>
        </div>
        //
    )
}
