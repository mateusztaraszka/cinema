import PageLayout from "../components/layouts/pageLayout";
import SectionLayout from "../components/layouts/sectionLayout";
import {Form, Formik} from 'formik';
import Input from "../components/form/input";
import * as Yup from 'yup';
import SubmitButton from "../components/form/submitButton";

const SignUp = () => {
  return (
    <PageLayout>
      <SectionLayout className={'container bg-blue-dark/80 w-1/3 px-24 py-20'}>
        <Formik
          initialValues={{login: '', password: '', email: ''}}
          validationSchema={Yup.object({
            login: Yup.string().required('Wymagane'),
            password: Yup.string().required('Wymagane'),
            email: Yup.string().email('Niepoprawny adres E-mail').required('Wymagane'),
          })}
          onSubmit={() => {
            alert('Test')
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
                type="text"
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
