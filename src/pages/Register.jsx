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

function Register() {
  const [show, setShow] = React.useState(true)
  const formik = useFormik(
    {
      initialValues: RegisterInitialData,
      validationSchema: RegisterValidationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        try {
          const response = await axios.post(`https://backend.getlinked.ai/hackathon/registration/`, values,

          );
          console.log(response.data)
        } catch (error) {
          console.error(error);

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
        <ColoredStars className={`left-[17%] top-[17%] scale-75`} />
        <GreyStars className={`left-[19.4%] bottom-[3%] scale-75`} />
        <ColoredStars className={`left-[44%] top-[77%] scale-75`} />
        <GreyStars className={`right-[27.3%] top-[9%] scale-75`} />
        <WhiteStars className={`right-[20.3%] -bottom-[3%] scale-50`} />



        <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>
        <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px] rounded-full -bottom-[10%] absolute z-[-2]" ></div>
        <div className='max-w-[1512px] mx-auto px-[40px] pt-[70px] gap-x-10 overflow-hidden mb-[57px]'>

          <div className='flex items-center'>

            <div className='w-full '>
              <img src={RegisterImage} alt="" />
            </div>

            <div className='w-full'>
              <div className='px-[90px] py-[65px] bg-white bg-opacity-[0.03] rounded-xl shadow-register'>
                <h3 className='font-Clash text-[32px] font-semibold text-primary'>Register</h3>

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
                  <form action="" method="post">
                    <div className='grid grid-cols-2 gap-8'>
                      <InputText name={`team_name`} label={`Team's Name`} placeholder={`Enter the name of your group`} value={formik.values.team_name} onChange={formik.handleChange}/>

                      <InputText name={`phone_number`} label={`Phone`} placeholder={`Enter your phone number`} value={formik.values.phone_number} onChange={formik.handleChange}/>

                      <InputText name={`email`} label={`Email`} placeholder={`Enter your email address`} type={`email`} value={formik.values.email} onChange={formik.handleChange} />

                      <InputText name={`project_topic`} label={`Project Topic`} placeholder={`What is your group project topic`} value={formik.values.project_topic} onChange={formik.handleChange}/>

                      <InputSelect name={`category`} label={`Category`} ops={`Select your category`} options={["Mani"]} value={formik.values.category} onChange={formik.handleChange} />

                      <InputSelect name={`group_size`} label={`Group Size`} ops={`Select`} options={[1,2,3,4]} value={formik.values.group_size} onChange={formik.handleChange} />




                    </div>

                    <p className='mt-6 text-xs text-primary italic '>Please review your registration details before submitting</p>

                    <div className='flex gap-x-[10px] mt-4'>
                      <input type="checkbox" name="privacy_poclicy_accepted" id="agree"  className='bg-transparent border rounded-[2px]' value={formik.values.privacy_poclicy_accepted} onChange={formik.handleChange} required />
                      <p className='text-xs'>I agree with the event terms and conditions and privacy policy</p>
                    </div>

                    <button type="submit" className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded w-full mt-[22px]' onClick={formik.handleSubmit}>Register Now</button>
                  </form>
                </div>


              </div>

            </div>

          </div>

        </div>
      </main>
      <SuccessModal show={show} setShow={setShow} title={`hi`} />


    </>
  )
}

export default Register