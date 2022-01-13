import PageLayout from "../components/layouts/pageLayout";
import SectionLayout from "../components/layouts/sectionLayout";
import {Form, Formik} from 'formik';
import Input from "../components/form/input";
import * as Yup from 'yup';
import SubmitButton from "../components/form/submitButton";

const SignIn = () => {
  return (
    <PageLayout>
      <SectionLayout className={'container bg-blue-dark/80 w-1/3 px-32 py-20'}>
        <Formik
          initialValues={{login: '', password: ''}}
          validationSchema={Yup.object({
            login: Yup.string().required('Wymagane'),
            password: Yup.string().required('Wymagane'),
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
                name="password"
                type="text"
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