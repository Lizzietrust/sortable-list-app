import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Skills = ({skillList, onDelete, inputValue, setInputValue, data, onAdd, setSkillList}) => {
    
    const dragItem = useRef(0)
    const draggedOverItem = useRef(0)

    const handleDrag = () => {
        const listClone = [...skillList]
        const temp = listClone[dragItem.current]
        listClone[dragItem.current] = listClone[draggedOverItem.current]
        listClone[draggedOverItem.current] = temp
        setSkillList(listClone)
    }

  return (
    <div className='w-[60%] max-[768px]:w-full'>
      <div className='w-full list-decimal h-[260px] overflow-y-scroll hideflow'>
        {skillList.map((item, index) => (
            <div key={item.id} className='flex items-center w-full justify-between bg-blue-900 mb-3 p-3
                rounded-md h-10'
                draggable
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (draggedOverItem.current = index)}
                onDragEnd={handleDrag}
                onDragOver={(e) => e.preventDefault()}
            >
                <p className='text-white text-sm'> 
                    <span className="mr-1">{index + 1}.</span> 
                    {item.name}
                </p>
                <FaTimes className='text-white text-sm cursor-pointer' onClick={() => onDelete(item)} />
            </div>
        ))}
      </div>
      {
        skillList.length < 5 &&
        <div>
            <div className='flex items-center justify-between w-full h-10 bg-slate-100 mb-3 p-3 rounded-md border
             border-slate-200'
            >
                <input 
                    type="text" 
                    placeholder={`${skillList.length + 1}. Add Skill`} 
                    className='border-none outline-none bg-transparent text-sm placeholder:text-blue-900
                     text-blue-900'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <FaChevronDown className='text-blue-900 text-sm' />
            </div>

            {
                inputValue === "" ? 
                <div className='w-full h-10 bg-slate-200 p-3 rounded-md text-sm text-slate-600'>
                    {skillList.length + 2}. Add Skill
                </div> :
                <div className='w-full h-24 overflow-y-scroll border border-slate-200 hideflow bg-slate-100
                    py-2 rounded-md'
                >
                    {data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((item) => (
                        <div key={item.id} className='hover:bg-slate-200 cursor-pointer text-sm px-2 py-1
                         text-blue-900'
                            onClick={() => onAdd(item)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            }
        </div>
      }
    </div>
  )
}

export default Skills
