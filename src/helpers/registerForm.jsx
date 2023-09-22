import * as yup from 'yup';

const RegisterInitialData = {
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic:"",
    category: "",
    privacy_poclicy_accepted: false
}

const RegisterValidationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email address is required'),
    phone_number: yup.string('Enter your phone number').required('Phone number is required'),
    group_size: yup.string('Enter Group size').required('Group Size is required'),
    project_topic: yup.string('Enter project topic').required('Project topic is required'),
    category: yup.string('Choose category').required('Category selection is required'),
    privacy_poclicy_accepted: yup.boolean('').required(''),
});


export { RegisterInitialData, RegisterValidationSchema }