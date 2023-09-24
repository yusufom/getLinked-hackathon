import React from 'react'
import { InputText } from '../components/common/Inputs'
import Navbar from '../components/Navbar'
import Instagram from '../assets/svgs/socials/instagram.svg'
import X from '../assets/svgs/socials/x.svg'
import Facebook from '../assets/svgs/socials/facebook.svg'
import Linkedin from '../assets/svgs/socials/linkedin.svg'
import { ColoredStars, GreyStars, WhiteStars } from '../components/common/Stars'
import axios from "axios";
import { useFormik } from 'formik';
import { ContactInitialData, ContactValidationSchema } from '../helpers/contactForm'
import SuccessModal from '../components/common/SuccessModal'
import { motion } from 'framer-motion'


function Contact() {
  const [show, setShow] = React.useState(false)
  const [error, setError] = React.useState(false)
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
      initialValues: ContactInitialData,
      validationSchema: ContactValidationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        try {
          const response = await axios.post(`https://backend.getlinked.ai/hackathon/contact-form`, values,

          );
          console.log(response.data)
          setShow(true)
          formik.resetForm()
        } catch (error) {
          console.error(error);
          setError(true)

        }
      }
    }
  )
  return (
    <div className=''>

      <header>
        <Navbar />
      </header>


      <main className='relative'>
      <button onClick={scrollToTop} className={`w-10 h-10 ${visible ? 'fixed' : 'hidden'} fixed bottom-10 right-10 bg-primary rounded-full z-[99] transition-all flex justify-center items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                </button>
        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>
        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px] rounded-full -bottom-[10%] absolute z-[-2]" ></div>

        <ColoredStars className={`lg:left-[22%] left-[8%] top-[10%] lg:scale-75 scale-[0.4]`} />
        <GreyStars className={`right-[22%] top-[4%] lg:scale-75 scale-[0.3]`} />
        <ColoredStars className={`lg:left-[43%] bottom-[12%] lg:scale-90 scale-[0.3]`} />
        <WhiteStars className={`right-[12%] bottom-[1%] lg:scale-90 scale-[0.2]`} />


        <div className='max-w-[1512px] mx-auto lg:px-[208px] px-[33px] pt-[140px] gap-x-10 overflow-hidden mb-[57px]'>

          <div className='flex lg:flex-row flex-col items-center gap-x-[222px]'>

            <motion.div className='lg:w-1/3 hidden lg:block' initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}>

              <h3 className='font-Clash text-primary text-[32px] font-semibold'>Get in touch</h3>

              <div className='text-base'>
                <p className='mt-[17px] max-w-[97px]'>Contact information</p>

                <p className='max-w-[120px] mt-4'>27,Alara Street
                  Yaba 100012
                  Lagos State
                </p>


                <p className='mt-5'>Call Us : 07067981819</p>

                <p className='max-w-[272px] mt-6'>we are open from Monday-Friday 08:00am - 05:00pm
                </p>

                <p className='text-primary mt-9'>Share on</p>

                <div className='flex gap-x-4 mt-[14px]'>

                  <img src={Instagram} alt="" />
                  <img src={X} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={Linkedin} alt="" />

                </div>

              </div>

            </motion.div>

            <motion.div className='w-full' initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}>
              <div className='lg:px-[90px] lg:py-[65px] lg:bg-white lg:bg-opacity-[0.03] rounded-xl lg:shadow-register'>
                <h3 className='font-Clash text-[20px] font-semibold text-primary leading-normal lg:max-w-none max-w-[195px]'>Questions or need assistance?</h3>

                <h3 className='font-Clash text-[20px] font-semibold text-primary leading-normal'>Let us know about it!</h3>

                <p className='lg:hidden text-xs mt-6'>Email us below to ask any question related to our event</p>



                <div className='mt-[33px]'>
                  {error &&

                    <p className='text-sm text-red-700'>Something went wrong, Please try again later</p>
                  }
                  <form action="" method="post">
                    <div className='grid grid-cols-1 gap-8'>

                      <InputText name={`first_name`} label={`First Name`} placeholder={`First Name`} value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name && formik.touched.first_name} errorText={formik.errors.first_name} />

                      <InputText name={`email`} label={`Email`} placeholder={`Email address`} value={formik.values.email} onChange={formik.handleChange} error={formik.errors.team_name && formik.touched.email} errorText={formik.errors.email} />

                      <InputText name={`phone_number`} label={`Phone Number`} placeholder={`Phone Number`} value={formik.values.phone_number} onChange={formik.handleChange} type={`tel`} error={formik.errors.phone_number && formik.touched.phone_number} errorText={formik.errors.phone_number} />

                      <textarea name="message" id="mmesage" cols="20" rows="5" className='bg-transparent border rounded-[4px] placeholder:text-sm placeholder:text-white placeholder:opacity-25 px-[25px] mt-[11px] shadow-register py-2' placeholder='Message' value={formik.values.message} onChange={formik.handleChange} error={formik.errors.message && formik.touched.message} errorText={formik.errors.message}></textarea>





                    </div>

                    <div className='w-full flex justify-center'>
                      <button type="submit" className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded text-center mt-[48px]' onClick={formik.handleSubmit}>{formik.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                    </div>
                  </form>
                </div>

                <div className='lg:hidden text-center'>
                  <p className='text-primary mt-9 text-xs'>Share on</p>

                  <div className='flex justify-center'>
                    <div className='flex gap-x-4 mt-[14px]'>

                      <img src={Instagram} alt="" />
                      <img src={X} alt="" />
                      <img src={Facebook} alt="" />
                      <img src={Linkedin} alt="" />

                    </div>
                  </div>
                </div>


              </div>

            </motion.div>

          </div>

        </div>
      </main>


      <SuccessModal show={show} setShow={setShow} title={`Congratulations`} subtitle={`Your email has been sent`} />

    </div>
  )
}

export default Contact