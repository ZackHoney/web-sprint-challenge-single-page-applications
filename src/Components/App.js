import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from '../validation/formSchema';
import PizzaForm from "./pizzaForm";
import Order from './order';
import axios from 'axios';

const initialFormValues = {
    name: '',
    size: '',
    special: '',
    pepperoni: false,
    olives: false,
    onions: false,
    bellpeppers: false,
    sausage: false,
    bacon: false,
    mushrooms: false,
}

const initialFormErrors = {
    name: '',
    size: '',
    special: '',
}

const initailOrders = []
const initailDisabled = true

export default function App() {

    const [orders, setOrders] = useState(initailOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initailDisabled)

    const postNewOrder = newOrder => {
        axios.post(newOrder)
        .then(res => {
            setOrders([res.data, ...orders]);
        })
        .catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            special: formValues.special.trim(),
            toppings: ['pepperoni', 'olives', 'onions', 'bellpeppers', 'sausage', 'bacon', 'mushrooms'].filter(topping => !!formValues[topping])
        }
        postNewOrder(newOrder)
    }

    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => setDisabled(!valid))
    }, [formValues])




    return (
        <div className='container'>
            <header><h1>Build Your Own Pizza</h1></header>

            <PizzaForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />

            {
                orders.map(order => {
                    return (
                        <Order key ={order.id} details={order} />
                    )
                })
            }
        </div>
       
    );





};
