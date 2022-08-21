import React from 'react'

const PackageCard = (props) => {
  let secondclassName = 'mt-20 inline-block justify-center rounded-2xl w-72 h-auto mx-5 cursor-pointer';
  let anchorclassname = 'block rounded-md font-medium  text-center w-32 py-1.5 px-4 mt-7 mb-12 mx-auto';
  if (props.selected) {
    secondclassName += ' shadow-2xl drop-shadow-3xl scale-110 border-orange border-2';
    anchorclassname += ' h-12 text-2xl bg-orange/20 text-orange'
  }
  else {
    secondclassName += ' bg-orange/20'
    anchorclassname += ' h-9 text-sm bg-orange border-orange border-2 text-[#FFFFFF] hover:bg-white hover:text-orange'
  }
  return (

    <div className={secondclassName}>

      <div className='mx-auto w-65 font-bold text-center text-xl text-dark_gray mt-10'>{props.content1}</div>
      <div className='mx-auto w-65 font-normal text-center text-base text-dark_gray mt-5'>{props.content2} </div>
      <div className='mx-auto w-65 font-normal text-center text-base text-dark_gray ml-10 mr-10'>{props.content5}</div>
      <div className='mx-auto w-65 font-normal text-center text-5xl text-dark_gray mt-5'>{props.content3}</div>
      <div className='mx-auto w-65 font-normal  text-center text-xs text-zinc-600 text-dark_gray mt-1'>{props.content4}</div>

      <a className={anchorclassname}>
        {props.status}
      </a>
    </div>
  )
}

export default PackageCard;