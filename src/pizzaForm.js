import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Own Pizza</h2>

                <button id='order-button' disabled={disabled}>Add to Order</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Build Your Own Pizza</h4>

                <label>Name For Order
                    <input  id="name-input"
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Size
                    <select id="size-dropdown"
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >   
                        <option value =''>Select a size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra-large'>Extra Large</option>
                    </select>
                </label>

                <label>Pepperoni
                    <input
                    type="checkbox"
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />

                </label>

                <label>Olives
                    <input
                    type='checkbox'
                    name='olives'
                    checked={values.olives}
                    onChange={onChange}
                    />
                </label>

                <label>Onions
                    <input
                    type='checkbox'
                    name='onions'
                    checked={values.onions}
                    onChange={onChange}
                    />
                </label>

                <label>Bell Peppers
                    <input
                    type='checkbox'
                    name='bellpeppers'
                    checked={values.bellpeppers}
                    onChange={onChange}
                    />
                </label>

                <label>Sausage 
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>

                <label>Bacon 
                    <input
                    type='checkbox'
                    name='bacon'
                    checked={values.bacon}
                    onChange={onChange}
                    />
                </label>

                <label>Mushrooms 
                    <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>

                <label>Special Requests
                    <input  id="special-text"
                    type='text'
                    name='special'
                    value={values.special}
                    onChange={onChange}
                    />
                </label>


            </div>

        </form>
    )

}