import React from 'react'
import RegisterImage from '../assets/images/register.png'
import WalkingCouple from '../assets/svgs/walking_couple.svg'
import Navbar from '../components/Navbar'
import { InputText, InputSelect } from '../components/common/Inputs'
import { ColoredStars, GreyStars, WhiteStars } from '../components/common/Stars'
import axios from "axios";
import { useFormik } from 'formik';
import { RegisterInitialData, RegisterValidationSchema } from '../helpers/registerForm'
import SuccessModal from '../components/common/SuccessModal'
import { motion } from 'framer-motion'



const categoryMenu = [
  {
    "id": 1,
    "name": "MOBILE"
  },
  {
    "id": 2,
    "name": "WEB"
  },
  {
    "id": 3,
    "name": "BACKEND"
  }
]

const sizeMenu = [
  {
    "id": 1,
    "name": "1"
  },
  {
    "id": 2,
    "name": "2"
  },
  {
    "id": 3,
    "name": "3"
  },
  {
    "id": 4,
    "name": "4"
  },
]
function Register() {
  const [show, setShow] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorText, setErrorText] = React.useState(``)
  const [visible, setVisible] = React.useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  const formik = useFormik(
    {
      initialValues: RegisterInitialData,
      validationSchema: RegisterValidationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        console.log(values)
        try {
          const response = await axios.post(`https://backend.getlinked.ai/hackathon/registration`, values,

          );
          console.log(response.data)
          formik.resetForm()
          setShow(true)
        } catch (error) {
          console.error(error);
          setError(true)
          setErrorText(error.response.data)


        }
      }
    }
  )
  return (
    <>

      <header>
        <Navbar />
      </header>


      <main className='relative'>
        <button onClick={scrollToTop} className={`w-10 h-10 ${visible ? 'fixed' : 'hidden'} fixed bottom-10 right-10 bg-primary rounded-full z-[99] transition-all flex justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </button>
        <ColoredStars className={`left-[17%] top-[17%] scale-75`} />
        <GreyStars className={`left-[19.4%] bottom-[3%] scale-75`} />
        <ColoredStars className={`left-[44%] top-[77%] scale-75`} />
        <GreyStars className={`right-[27.3%] top-[9%] scale-75`} />
        <WhiteStars className={`right-[20.3%] -bottom-[3%] scale-50`} />



        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>
        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px] rounded-full -bottom-[10%] absolute z-[-2]" ></div>
        <div className='max-w-[1512px] mx-auto px-[40px] pt-[70px] gap-x-10 overflow-hidden mb-[57px]'>

          <div className='flex lg:flex-row flex-col items-center'>

            <motion.div className='w-full ' initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}>
              <img src={RegisterImage} alt="" />
            </motion.div>

            <motion.div className='w-full' initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}>
              <div className='lg:px-[90px] lg:py-[65px] lg:bg-white lg:bg-opacity-[0.03] rounded-xl lg:shadow-register'>
                <h3 className='font-Clash text-[32px] font-semibold text-primary hidden lg:block'>Register</h3>

                <div className='flex gap-x-[7px] items-end'>
                  <div className=''>
                    <p className='text-sm'>Be part of this movement!</p>
                  </div>
                  <div className='border-b  border-primary border-dashed px-6 mb-1'>
                    <img src={WalkingCouple} alt="" />
                  </div>


                </div>

                <div className='mt-5'>
                  <h3 className='text-2xl leading-normal'>CREATE YOUR ACCOUNT</h3>
                </div>


                <div className='mt-[33px]'>
                  {error &&

                    <p className='text-sm text-red-700'>{errorText}</p>
                  }
                  <form action="" method="post">
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                      <InputText name={`team_name`} label={`Team's Name`} placeholder={`Enter the name of your group`} value={formik.values.team_name} onChange={formik.handleChange} error={formik.errors.team_name && formik.touched.team_name} errorText={formik.errors.team_name} />

                      <InputText name={`phone_number`} label={`Phone`} placeholder={`Enter your phone number`} value={formik.values.phone_number} onChange={formik.handleChange} error={formik.errors.phone_number && formik.touched.phone_number} errorText={formik.errors.phone_number} />

                      <InputText name={`email`} label={`Email`} placeholder={`Enter your email address`} type={`email`} value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email && formik.touched.email} errorText={formik.errors.email} />

                      <InputText name={`project_topic`} label={`Project Topic`} placeholder={`What is your group project topic`} value={formik.values.project_topic} onChange={formik.handleChange} error={formik.errors.project_topic && formik.touched.project_topic} errorText={formik.errors.project_topic} />

                      <InputSelect name={`category`} label={`Category`} ops={`Select your category`} options={categoryMenu} value={formik.values.category} onChange={formik.handleChange} error={formik.errors.team_name && formik.touched.category} errorText={formik.errors.category} />

                      <InputSelect name={`group_size`} label={`Group Size`} ops={`Select`} options={sizeMenu} value={formik.values.group_size} onChange={formik.handleChange} error={formik.errors.group_size && formik.touched.group_size} errorText={formik.errors.group_size} />




                    </div>

                    <p className='mt-6 lg:text-xs text-primary italic text-[9px] text-center lg:text-left'>Please review your registration details before submitting</p>

                    <div className='flex gap-x-[10px] mt-4'>
                      <input type="checkbox" name="privacy_poclicy_accepted" id="agree" className='bg-transparent border rounded-[2px]' value={formik.values.privacy_poclicy_accepted} onChange={formik.handleChange} required />
                      <p className='lg:text-xs text-[10px]'>I agree with the event terms and conditions and privacy policy</p>
                    </div>

                    <button type="submit" className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded w-full mt-[22px]' onClick={formik.handleSubmit}>{formik.isSubmitting ? 'Submitting...' : 'Register Now'}</button>
                  </form>
                </div>


              </div>

            </motion.div>

          </div>

        </div>
      </main>
      <SuccessModal show={show} setShow={setShow} title={`Congratulations`} subtitle={`You have successfully registered!`} register={true} />


    </>
  )
}

export default Register