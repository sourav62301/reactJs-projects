import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';



function Shop() {
  const dispatch = useDispatch();
  // const actions  = bindActionCreators(actionCreators, dispatch);
  const {withdrawMoney, depositMoney}  = bindActionCreators(actionCreators, dispatch);

  const balance = useSelector(state=>state.amount);

  return(
      <>
      <h2>Deposit/Withdraw money</h2>
        <div>
            {/* <button className="btn btn-info mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn btn-info mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(122345))}}>+</button> */}

            {/* <button className="btn btn-info mx-2" onClick={()=>actions.withdrawMoney(100)}>-</button>
            Update Balance
            <button className="btn btn-info mx-2" onClick={()=>actions.depositMoney(122345)}>+</button> */}

            <button className="btn btn-info mx-2" onClick={()=>withdrawMoney(100)}>-</button>
            Update Balance {balance}
            <button className="btn btn-info mx-2" onClick={()=>depositMoney(1345)}>+</button>

        </div>
      </>
  )
}

export default Shop;
