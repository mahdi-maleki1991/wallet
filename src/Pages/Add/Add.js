import React, { useRef, useState } from 'react'
import './Add.css'
import { useEffect } from 'react'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'
import { StoreCartInfo } from '../../Redux/Stores/StorCartInfo'
import { FaWifi } from "react-icons/fa";



export default function Add() {

  const [cartNum, setCartNum] = useState('XXXXXXXXXXXXXXXX')
  const refCartNum = useRef()

  const [cartName, setCartName] = useState('NAME')
  const refCartName = useRef()

  const [cartDate, setCartDAte] = useState('XXXX-XX')
  const refCartDate = useRef()

  const [cartCvv, setCartCvv] = useState('XXX')
  const refCartCvv = useRef()

  const [cartColor, setCartColor] = useState('rgb(158, 158, 158)')
  const mainCartBox = useRef()

  const refSelectColor = useRef()

  // --------------------------------------------------


  const numInputCartHandeler = (value) => {
    if (refCartNum.current.value.length < 17) {
      setCartNum(value)
    } else {
      refCartNum.current.value = cartNum
    }
  }


  const cvvCartHandler = (value) => {
    if (refCartCvv.current.value.length < 4) {
      setCartCvv(value)
    } else {
      refCartCvv.current.value = cartCvv
    }
  }

  useEffect(() => {
    mainCartBox.current.setAttribute('style', `background-color: ${cartColor};`)
  }, [cartColor])


  const addHandler = () => {

    if (cartNum.length == 16 && cartNum != 'XXXXXXXXXXXXXXXX' && cartName.length >= 3 && cartName != 'NAME'
      && cartDate != 'XXXX-XX' && cartCvv.length == 3 && cartCvv != 'XXX') {

      let newCartInfo = {
        id: v4(),
        cartNum,
        cartName,
        cartDate,
        cartCvv,
        cartColor,
      }
      StoreCartInfo.dispatch({ type: 'ADD', payload: newCartInfo })
      resetCart()
      alert('New card added successfully.');

    } else {
      alert('Completing all information is required.');
    }


  }


  const resetCart = () => {

    setCartColor('rgb(158, 158, 158)')
    setCartCvv('XXX')
    setCartDAte('00 00')
    setCartName('NAME')
    setCartNum('XXXXXXXXXXXXXXXX')
    // --------------------------
    refCartNum.current.value = ''
    refCartName.current.value = ''
    refCartDate.current.value = ''
    refCartCvv.current.value = ''
    mainCartBox.current.setAttribute('style', 'background-color: rgb(158, 158, 158)')
    refSelectColor.current.selectedIndex = 0;
  }


  // --------------------------------------------------
  return (
    <>

      <section className="divConAdd">
        <h1>ADD NEW BANCK CART</h1>

        <div className="divMainBoxCart" ref={mainCartBox}>
          <img src="https://clipground.com/images/credit-card-chip-clipart-2.png" />
          <FaWifi className='iconWifiCart' />
          <span className='spanNotOnCart'>BANK CART</span>
          <span className='spanCartNum'>{cartNum}</span>
          <span className="spanCartName">{cartName}</span>
          <span className='spanCartDate'>{cartDate}</span>
          <span className='spanCartCvv'>{cartCvv}</span>
        </div>

        <div className="divInputsAdd">
          <input type="number" className='inputAddNumber' placeholder='Cart Number' ref={refCartNum}
            onKeyUp={(event) => numInputCartHandeler(event.target.value)}
          />
          <input type="text" className='inputAddName' placeholder='Cart Name' ref={refCartName}
            onKeyUp={(event) => setCartName(event.target.value.toUpperCase())} maxLength={25}
          />
          <div className="divCVDate">
            <input type="month" className='inputDate' onChange={(event) => setCartDAte(event.target.value)}
              ref={refCartDate}/>

            <input type="number" className='inputCv' placeholder='CVV' onKeyUp={(event) => cvvCartHandler(event.target.value)}
              ref={refCartCvv} />
          </div>
          <select className='selectColor' onChange={(event) => { setCartColor(event.target.value) }} ref={refSelectColor}>
            <option value="rgb(158, 158, 158)">---  SELECT COLOR  ---</option>
            <option value="WHITE">WHITE</option>
            <option value="rgb(158, 158, 158)">GRAY</option>
            <option value="rgb(240, 87, 87)">RED</option>
            <option value="rgb(207, 90, 6)">ORANGE</option>
            <option value="rgb(1, 101, 119)">BLUE</option>
            <option value="rgb(11, 98, 22)">GREEN</option>
            <option value="rgb(209, 90, 109)">PINK</option>
          </select>
        </div>

        <input type="button" value="ADD NEW CART" className='btnAddCart' onClick={addHandler} />
        <Link className='btnBachHome' to={'/'}>E-WALLET</Link>

      </section>



    </>
  )

}
