import React from 'react'

function DeleteOrders(props){
  return (props.trigger)?(
    <div className='fixed flex top-0 left-0 w-full h-[100vh] bg-[#000000]/[0.2] justify-center items-center'>
        <div className='relative p-[32px] w-full max-w-[640px] bg-[#ffffff] text-center'>
            <div className='font-bold text-2xl'>Are you Sure?</div>
            <div className='p-[15px]'>
            <div>Do you really want to delete this order?</div>
            <div>This process cannot be undone</div>
            </div>

            <button className='btn-secondary' onClick={()=>props.setTrigger(false)}>Cancel</button>
            <button className='btn-primary'>Delete</button>
        </div>
    </div>
  ) : "";
}

export default DeleteOrders;

