

const Phone = ({phones , handleClick , handleInfo}) => {
  return (
    <div className='d-flex justify-content-around'>
        {phones.map((phone) => ( 
          <div className='card card border-0' style={{width: '18rem'}} key={phone.id}>
            <img className='card-img-top' src={phone.src} alt={phone.name}/>
            <div className='card-body'>
              <div className='text-center'>
              <h5 className='card-title'>{phone.name}</h5>
              <p className='card-text font-weight-light'>{phone.text}</p>
              <button className='btn btn-light text-center rounded-pill text-black border-dark' >Buy Now</button>
              <button className='link-dark text-center rounded text-black border-0 hover-underline-animation bg-light p-2' onClick={()=>{handleClick();handleInfo(phone.id);}}>Learn more</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Phone