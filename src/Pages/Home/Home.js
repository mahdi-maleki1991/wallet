import React, { useState } from 'react'
import './Home.css'
import { StoreCartInfo } from '../../Redux/Stores/StorCartInfo'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FaWifi } from "react-icons/fa";


export default function Home() {

    const [cartNum, setCartNum] = useState('XXXXXXXXXXXXXXXX')
    const [cartName, setCartName] = useState('NAME')
    const [cartDate, setCartDAte] = useState('00 00')
    const [cartCvv, setCartCvv] = useState('XXX')
    const [cartColor, setCartColor] = useState('rgb(158, 158, 158)')
    const refCartSelect = useRef([])

    // ---------------------------------------------
    const setCartHandler = (id) => {
        let indexCart = 0
        const currentCart = StoreCartInfo.getState().find((cart, index) => {
            if (cart.id == id) {
                indexCart = index
                return cart
            }
        })
        setCartNum(currentCart.cartNum)
        setCartName(currentCart.cartName)
        setCartDAte(currentCart.cartDate)
        setCartCvv(currentCart.cartCvv)
        setCartColor(currentCart.cartColor)

        if (StoreCartInfo.getState().length > 1) {
            refCartSelect.current.forEach(cart => {
                if (cart != null) {
                    cart.classList.remove('cartActive')
                }
            })
            refCartSelect.current[indexCart].classList.add('cartActive')
        }
    }

    // ---------------------------------------------
    return (
        <>

            <section className='secMAinEWallet'>
                <h1>E-WALLET</h1>
                <Link className='btnAddNewCart' to={'/Add'}>ADD NEW CART</Link>
                <Link className='btnDELETECart' to={'/Delete'}>DELETE CART</Link>
                <span className='spanLine'></span>

                {
                    StoreCartInfo.getState().length != 0 ? (
                        <div className="divMainBoxCart" style={{ backgroundColor: cartColor }}>
                            <FaWifi className='iconWifiCart' />
                            <span className='spanNotOnCart'>BANK CART</span>
                            <img src="https://clipground.com/images/credit-card-chip-clipart-2.png" />
                            <span className='spanCartNum'>{cartNum}</span>
                            <span className="spanCartName">{cartName}</span>
                            <span className='spanCartDate'>{cartDate}</span>
                            <span className='spanCartCvv'>{cartCvv}</span>
                        </div>
                    ) : (
                        <span className='alertWalletEmpty'>NO CART EXIST!</span>
                    )

                }


                <div className="divMainWallCarts">
                    {
                        StoreCartInfo.getState().map((cart, index) => (

                            <div className="divMainBoxCartInWall" onClick={() => setCartHandler(cart.id)}
                                style={{ backgroundColor: cart.cartColor, top: `${index * 40}px` }} key={cart.id} ref={elem => refCartSelect.current.push(elem)}>
                                <img src="https://clipground.com/images/credit-card-chip-clipart-2.png" />
                                <FaWifi className='iconWifiCart' />
                                <span className='spanNotOnCart'>BANK CART</span>
                                <span className='spanCartNum'>{cart.cartNum}</span>
                                <span className="spanCartName">{cart.cartName}</span>
                                <span className='spanCartDate'>{cart.cartDate}</span>
                                <span className='spanCartCvv'>{cart.cartCvv}</span>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}
