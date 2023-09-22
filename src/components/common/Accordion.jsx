import React from 'react'
function Accordion({ children, title, panel, openPanel, setOpenPanel }) {
    const handleChange = () => {
        setOpenPanel(panel === openPanel ? null : panel);
    };

    return (
        <div className='border-b border-primary w-full cursor-pointer' onClick={handleChange}>
            <div className='flex justify-between items-center'>
                <p className='text-sm leading-[27.5px]'>{title}</p>
                <button onClick={handleChange} className='text-primary transition-all'>
                    {panel === openPanel ? '-' : '+'}
                </button>
            </div>

            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in ${panel === openPanel ? "max-h-40" : "max-h-0"}`}>

                <p className='text-sm leading-[27.5px]'>{children}</p>

            </div>
        </div>
    );
}


export default Accordion
