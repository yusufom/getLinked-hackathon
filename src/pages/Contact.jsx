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

function Contact() {
  const [show, setShow] = React.useState(false)
  const [error, setError] = React.useState(false)
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
        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>
        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px] rounded-full -bottom-[10%] absolute z-[-2]" ></div>

        <ColoredStars className={`lg:left-[22%] left-[8%] top-[10%] lg:scale-75 scale-[0.4]`} />
        <GreyStars className={`right-[22%] top-[4%] lg:scale-75 scale-[0.3]`} />
        <ColoredStars className={`lg:left-[43%] bottom-[12%] lg:scale-90 scale-[0.3]`} />
        <WhiteStars className={`right-[12%] bottom-[1%] lg:scale-90 scale-[0.2]`} />


        <div className='max-w-[1512px] mx-auto lg:px-[208px] px-[33px] pt-[140px] gap-x-10 overflow-hidden mb-[57px]'>

          <div className='flex lg:flex-row flex-col items-center gap-x-[222px]'>

            <div className='lg:w-1/3 hidden lg:block'>

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

            </div>

            <div className='w-full'>
              <div className='lg:px-[90px] lg:py-[65px] lg:bg-white lg:bg-opacity-[0.03] rounded-xl lg:shadow-register'>
                <h3 className='font-Clash text-[20px] font-semibold text-primary leading-normal lg:max-w-none max-w-[195px]'>Questions or need assistance?</h3>

                <h3 className='font-Clash text-[20px] font-semibold text-primary leading-normal'>Let us know about it!</h3>

                <p className='lg:hidden text-xs mt-6'>Email us below to ask any question related to our event</p>



                <div className='mt-[33px]'>
                  {error &&
                  
                  <p className='text-sm text-red'>Something went wrong, Please try again later</p>
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

            </div>

          </div>

        </div>
      </main>


      <SuccessModal show={show} setShow={setShow} title={`Congratulations`} subtitle={`Your email has been set`} />

    </div>
  )
}

export default Contact