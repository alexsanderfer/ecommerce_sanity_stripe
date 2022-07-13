import React, {useEffect, useState} from 'react'
import {useStateContext} from "../context/StateContext";
import {BsBagCheckFill} from "react-icons/bs";
import Link from "next/link";
import {runFireworks} from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, []);

  return (
    <div className={'success-wrapper'}>
      <div className={'success'}>
        <p className={'icon'}>
          <BsBagCheckFill />
        </p>
        <h2>Obrigado pela sua compra!</h2>
        <p className='email-msg'>Verifique o recibo na sua caixa de entradas do email informado na compra</p>
        <p className={'description'}>
          Se você tiver qualquer dúvida, envie um e-mail para
          <a className={'email'} href={'mailto:alexfernandes90@outlook.pt'}>
            alexfernandes90@outlook.pt
          </a>
        </p>
        <Link href={'/'}>
          <button type={'button'} width={'300px'} className={'btn'}>
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success