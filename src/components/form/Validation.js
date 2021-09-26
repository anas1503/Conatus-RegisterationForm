export default function validation(data) {

    let errors = {};

    if (!data.name.trim()) {
        errors.name = 'Full name required';
    }

    if (!data.rollNumber) {
        errors.rollNumber = ' Roll number required';
    } else if (!data.rollNumber.length) {
        errors.rollNumber = 'Roll number required';
    } else if (!/^\d+$/.test(data.rollNumber)) {
        errors.rollNumber = 'Invalid roll number';
    }

    if (!data.branch) {
        errors.branch = 'Branch required';
    }

    if (!data.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        errors.email = 'Invalid email';
    }


    if (!data.phoneNumber) {
        errors.phoneNumber = ' Phone number required';
    } else if (data.phoneNumber.length !== 10) {
        errors.phoneNumber = 'Invalid phone number';
    }

    if (!data.skills) {
        errors.skills = 'Skills required';
    }

    if (!data.residence) {
        errors.residence = 'Residence required';
    }

    if (!data.recaptcha) {
        errors.recaptcha = 'Recaptcha required';
    } else if(!data.recaptcha.startsWith('conatus') && !data.recaptcha.endsWith('admin')) {
        errors.recaptcha = 'Invalid recaptcha'
    }

    return errors;

}
