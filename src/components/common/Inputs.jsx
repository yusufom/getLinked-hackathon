import React from 'react'

function InputText({ label, name, placeholder, type, onChange, error, errorText }) {
    return (
        <div className='w-full flex flex-col'>
            <label htmlFor={name} className='text-sm'>{label}</label>
            <input type={`${type ? type : "text"}`} name={name} id={name} placeholder={placeholder} onChange={onChange} className='bg-transparent border rounded-[4px] h-[47px] placeholder:text-sm placeholder:text-white placeholder:opacity-25 px-[25px] mt-[11px] shadow-register' />
            {error &&
                <p className='text-red-700 text-xs mt-1'>{errorText}</p>
            }
        </div>
    )
}


function InputSelect({ label, name, ops, options, error, errorText, onChange, value }) {
    // const [isOpen, setIsOpen] = React.useState(false);
    // const [selectedOption, setSelectedOption] = React.useState(null);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handleOptionClick = (option) => {
    //     setSelectedOption(option);
    //     setIsOpen(false);
    // };

    return (
        <div className='w-full '>
            <label htmlFor={name} className='text-sm'>{label}</label>

            <select value={value} name={name} onChange={onChange} placeholder={ops} className="bg-transparent border rounded-[4px] placeholder:text-white placeholder:opacity-25 w-full py-2 pl-[25px] pr-[14px] mt-[11px] text-gray-700 focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-between shadow-register">
                <options value={``}>{label}</options>
                {options.map((res, index) => (
                    <option value={res.id}>{res.name}</option>
                ))}
            </select>
            {error &&
                <p className='text-red-700 text-xs mt-1'>{errorText}</p>
            }

        </div>
    )
}
export { InputText, InputSelect }