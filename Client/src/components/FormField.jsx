import React from 'react'

function FormField({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
       <label htmlFor={name} className='block text-sm font-medium text-grey-900'>{labelName}
       </label>
       {isSurpriseMe &&(
        <button 
        type='button'
        onClick={handleSurpriseMe}
        className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">Surpise me</button>
       )}
      </div>
      <input type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      id={name}
      required
      className='bg-grey-50 border border-grey-300 border text-grey-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField
