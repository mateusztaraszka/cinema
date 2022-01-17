import PageLayout from '../components/layouts/pageLayout';
import SectionLayout from '../components/layouts/sectionLayout';
import { Form, Formik } from 'formik';
import Input from '../components/form/input';
import * as Yup from 'yup';
import SubmitButton from '../components/form/submitButton';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter()

  return (
    <PageLayout>
      <SectionLayout className={'container bg-blue-dark/80 w-1/3 px-24 py-32'}>
        <Formik
          initialValues={{ login: '', password: '', email: '' }}
          validationSchema={Yup.object({
            login: Yup.string().required('Wymagane'),
            password: Yup.string().required('Wymagane'),
            email: Yup.string().email('Niepoprawny adres E-mail').required('Wymagane'),
          })}
          onSubmit={({ login, password, email }) => {
            const payload = {
              name: login,
              email: email,
              password: password
            };

            axios.post('https://pr-movies.herokuapp.com/api/user/create', payload)
              .then(response => {
                if (response.status === 200) alert('Zarejestrowano')
                router.push('/signin')
              })

          }}>
          <Form>
            <div className={'flex flex-col gap-8'}>
              <Input
                name="login"
                type="text"
                placeholder="Login"/>
              <Input
                name="email"
                type="text"
                placeholder="E-mail"/>
              <Input
                name="password"
                type="password"
                placeholder="Password"/>
              <SubmitButton>Zarejestruj się</SubmitButton>
            </div>
          </Form>
        </Formik>

      </SectionLayout>
    </PageLayout>
  )
}

export default SignUp;
