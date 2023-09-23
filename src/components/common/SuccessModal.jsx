import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import successImage from "../../assets/images/congratulation.png"
import successEmoji from "../../assets/images/successemoji.png"


const SuccessModal = ({ show, setShow, title, subtitle, register }) => {
  const modalRef = useRef(null);

  const handleBack = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShow, show]);

  const variants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <div
      className={`fixed z-[99] top-0 right-0 w-full h-full bg-[#150e28ed] place-items-center flex justify-center transition-all duration-500 overflow-auto ${show ? "flex" : "hidden"
        }`}
    >

      <motion.div
        ref={modalRef}
        animate={show ? "open" : "closed"}
        variants={variants}
        className="relative lg:w-[660px] w-[90%] bg-[#ffffff03] rounded-[5px] border border-primary flex flex-col items-center justify-center gap-3 transition-all duration-300  overflow-y-auto overflow-x-hidden lg:px-[54px] px-[34px] py-[27px] lg:py-[70px]"
      >
        <img src={successImage} alt="" />

        <h2 className="lg:text-[32px] text-base text-center font-semibold md:text-xl tab:text-2xl">
          <p>{title}</p>
          <p>{subtitle}</p>
        </h2>
        {register &&
          <div>
            <p className="lg:text-sm text-xs text-center lg:font-semibold font-medium">
              <span>Yes, it was easy and you did it!</span>
              <span className="flex items-center gap-1">
                check your mail box for next step
                <img src={successEmoji} alt="emoji" className="inline" />
              </span>
            </p>
          </div>
        }
        <button type="submit" className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded w-full mt-[22px]' onClick={handleBack}>Back</button>

      </motion.div>
    </div>
  );
};

export default SuccessModal;
