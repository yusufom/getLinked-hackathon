import React from 'react'

function InputText({ label, name, placeholder, type, onChange }) {
    return (
        <div className='w-full flex flex-col'>
            <label htmlFor={name} className='text-sm'>{label}</label>
            <input type={`${type ? type : "text"}`} name={name} id={name} placeholder={placeholder} onChange={onChange} className='bg-transparent border rounded-[4px] h-[47px] placeholder:text-sm placeholder:text-white placeholder:opacity-25 px-[25px] mt-[11px] shadow-register' />
        </div>
    )
}


function InputSelect({ label, name, ops, options }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className='w-full flex flex-col relative'>
            <label htmlFor={name} className='text-sm'>{label}</label>

            <div role="button" className="bg-transparent border rounded-[4px] h-[47px] w-full py-2 pl-[25px] pr-[14px] mt-[11px] text-gray-700 focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-between shadow-register"
                onClick={toggleDropdown}>
                <p className='text-white'>{selectedOption || ops}</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                    <path d="M1 1L6.5 7L11.5 1" stroke="white" stroke-width="2" />
                </svg>
            </div>
            {isOpen && (
                <div className=" absolute left-0 mt-2 -bottom-[47px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-blue-100 text-left"
                                role="menuitem"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}
export { InputText, InputSelect }