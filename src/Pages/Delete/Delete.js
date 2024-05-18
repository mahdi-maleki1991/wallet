import React, { useState } from 'react'
import './Delete.css'
import { FaWifi } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { StoreCartInfo } from '../../Redux/Stores/StorCartInfo';
import { Link } from 'react-router-dom';


export default function Delete() {



    const [allCarts, setAllCarts] = useState(StoreCartInfo.getState())


    const deleteCartHandler = (ID) => {
        StoreCartInfo.dispatch({ type: 'DELETE', payload: ID })
    }

    StoreCartInfo.subscribe(() => {
        setAllCarts(StoreCartInfo.getState())
    })


    return (
        <>



            <section className="secDelete">
                <div className="divLinkKeeper">

                    <Link className='linkGoHomeFromDel' to='/'>E-WALLET</Link>
                    <Link className='linkGoAddFromDel' to='/Add'>ADD CART</Link>
                </div>

                {
                    allCarts.length > 0 ? (
                        allCarts.map(cart => (
                            <div className="divMainBoxCart" key={cart.id} style={{ backgroundColor: cart.cartColor }}>
                                <MdDeleteForever className='deleteIconHover' onClick={() => deleteCartHandler(cart.id)} />
                                <FaWifi className='iconWifiCart' />
                                <span className='spanNotOnCart'>BANK CART</span>
                                <img src="https://clipground.com/images/credit-card-chip-clipart-2.png" />
                                <span className='spanCartNum'>{cart.cartNum}</span>
                                <span className="spanCartName">{cart.cartName}</span>
                                <span className='spanCartDate'>{cart.cartDate}</span>
                                <span className='spanCartCvv'>{cart.cartCvv}</span>
                            </div>
                        ))
                    ) : (
                        <h1 className='h1NoCartDelete'>No CART EXIST.!!</h1>
                    )
                }




            </section>
        </>
    )
}
