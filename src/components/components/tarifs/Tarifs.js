import React from 'react'
import './Tarif.css'

export default function Tarif(props) {
    return (
        <div className="root">
            <article className={props.id}>
                <div className="title"><h2>{props.title}</h2></div>
                <div className="price">{props.price}
                    <div className="monthly">
                        <div className="money">₽</div>
                        <div className="month">/month</div>
                    </div>
                </div>
                <div className="unlim">{props.text}</div>
                <div className="minutes">{props.minutes} <span>мин.на остальные номера России</span></div>
                <div className="internet">{props.internet}</div>
            </article>
        </div>
    )
}