import React from 'react'

const BillingCard = (props) => {

    return (


        <div className="text-xs text-gray-900 bg-gray-100 p-3 mt-4 ml-4 border rounded">
            <div className='mt-1 w-full'>
                <div className='inline-block w-[300px]'>{props.number}</div>
                <div className="material-icons-round text-sm text-gray-900 cursor-pointer">
                    content_edit
                </div>
                <div className="material-icons-round text-sm text-gray-900 cursor-pointer">
                    delete
                </div>
            </div>
            <div className='mt-1'>
                <div className='inline-block w-[200px]'>{props.name}</div>
                <div className='inline-block w-[180px]'>EXP:{props.exp}</div>
                <div className='inline-block w-[60px] text-right'>{props.type}</div>
            </div>




        </div>
    )
}

export default BillingCard;