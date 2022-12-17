import {CartContext} from '../CartContext'
import { useContext } from 'react';
const Phone = ({phones,handleClick , handleInfo}) => {
  const cart = useContext(CartContext)
  console.log(cart.items)
  return (
    <div className='d-flex justify-content-around'>
        {phones.map((phone) => ( 
          <div className='card card border-0' style={{width: '18rem'}} key={phone.id}>
            <img className='card-img-top' src={phone.src} alt={phone.name}/>
            <div className='card-body'>
              <div className='text-center'>
              <h5 className='card-title'>{phone.name}</h5>
              { cart.getProductQuantity(phone.id) > 0 ?
              <button className='btn btn-danger text-center rounded-pill text-light border-dark' onClick={()=> cart.deleteFromCart(phone.id)}>Remove to cart</button>
              :<button className='btn btn-dark text-center rounded-pill text-light border-dark' onClick={()=> cart.addOneToCart(phone.id)}>add to cart</button>
              }
              <button className='link-dark text-center rounded text-black border-0 hover-underline-animation p-2 btn-primary-outline' style={{backgroundColor:'transparent'}} onClick={()=>{handleClick();handleInfo(phone.id);}}>Learn more</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Phone