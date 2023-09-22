import * as yup from 'yup';

const ContactInitialData = {
    email: "",
    phone_number: "",
    first_name: "",
    message: ""
}

const ContactValidationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email address is required'),
    phone_number: yup.string('Enter your phone number').required('Phone number is required'),
    first_name: yup.string('Enter First Name').required('First Name is required'),
    message: yup.string('Enter message').required('Message is required'),
});


export { ContactInitialData, ContactValidationSchema }