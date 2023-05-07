import { useNavigate } from "react-router-dom"




export default function Home() {
const navigate =useNavigate()
const routeToPizza = () => {
    navigate('pizza')
}

    return (
       <div className='home-wrapper'>
        <button onClick={routeToPizza} id='order-pizza'>
            Order Pizza!
        </button>
       </div>
    )
}