import { useState } from "react"

export const AddCategory = ({ onaddcategories }) => {

    const [value, setValue] = useState('')

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length <= 1) return

        onaddcategories(value.trim())
        setValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                value={value}
                placeholder="Ingresa el name"
                onChange={onChange}
            />
        </form>

    )
}
