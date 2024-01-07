import React from 'react'
import { FaPlus } from "react-icons/fa";


const Suggested = ({data, onAdd}) => {
  return (
    <div>
        <h3 className='text-blue-900 font-bold text-base mt-1 mb-3'>Suggested Skills</h3>

        <div>
            {data.map((item) => (
                <div 
                    key={item.id} 
                    className='flex items-center gap-1 text-sm text-blue-900 mb-2 cursor-pointer'
                    onClick={() => onAdd(item)}
                >
                    <FaPlus />
                    {item.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Suggested
