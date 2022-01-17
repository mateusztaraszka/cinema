import PageLayout from '../components/layouts/pageLayout';
import SectionLayout from '../components/layouts/sectionLayout';
import { Form, Formik } from 'formik';
import Input from '../components/form/input';
import * as Yup from 'yup';
import SubmitButton from '../components/form/submitButton';
import axios from 'axios';
import { useAppContext } from '../global-state/provider';
import { useRouter } from 'next/router';

const SignIn = () => {
  const signUpData = useAppContext()
  const router = useRouter()

  return (
    <PageLayout>
      <SectionLayout className={'container bg-blue-dark/80 w-1/3 px-24 py-32'}>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={Yup.object({
            login: Yup.string().required('Wymagane'),
            password: Yup.string().required('Wymagane'),
          })}
          onSubmit={({ login, password }) => {
            const payload = {
              login: login,
              password: password
            };

            axios.post('https://pr-movies.herokuapp.com/api/user/auth', payload)
              .then(response => {
                if(response.status === 200) {
                  signUpData.setUserLoggedIn(true)
                  signUpData.setToken(response.data.token)
                  router.push('/')
                }
              })
              .catch(() => alert('Logowanie nie powiodło się'))

          }}>
          <Form>
            <div className={'flex flex-col gap-8'}>
              <Input
                name="login"
                type="text"
                placeholder="Login"/>
              <Input
                name="password"
                type="password"
                placeholder="Password"/>

              <SubmitButton>Zaloguj</SubmitButton>
            </div>
          </Form>
        </Formik>
      </SectionLayout>
    </PageLayout>
  )
}

export default SignIn;