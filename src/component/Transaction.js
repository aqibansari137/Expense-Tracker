import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Transaction = ({transaction}) => {
    const sign = transaction.amount<0 ? '-':'+';
    const {deleteTransaction} =useContext(GlobalContext);

    return (
        <li className={sign==='-'?"minus":"plus"}>
            {transaction.text} <span>{sign} Rs {Math.abs(transaction.amount)}</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
