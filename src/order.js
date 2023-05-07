import React from 'react'

function Order({ details }) {
    if (!details) {
        return <h3>Working on fetching your order's details...</h3>
    }

    return (
        <div className='order container'>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Special Requests: {details.special}</p>

            {
                !!details.orders && !!details.orders.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.orders.map((idx) => <li key={idx}></li>)}
                    </ul>
                </div>
            }
        </div>
    )

}

export default Order