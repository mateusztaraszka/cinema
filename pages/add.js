import PageLayout from "../components/layouts/pageLayout";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from '../components/form/input';
import SubmitButton from '../components/form/submitButton';
import SectionLayout from '../components/layouts/sectionLayout';
import TextArea from '../components/form/textArea';

const Add = () => {
  return (
    <PageLayout>
      <SectionLayout className={'container bg-blue-dark/80 w-1/3 px-24 py-32'}>
        <Formik
          initialValues={{ title: '', image: '', content: '' }}
          validationSchema={Yup.object({
            title: Yup.string().required('Wymagane'),
            image: Yup.string().required('Wymagane'),
            content: Yup.string().required('Wymagane'),
          })}
          onSubmit={({ title, image, content }) => {
            const payload = {
              title: title,
              image: image,
              content: content,
            };

            axios.post('https://pr-movies.herokuapp.com/api/movies', payload)
              .then(response => {
                if (response.status === 200) {
                  alert('Film został dodany')
                }
              })
              .catch(() => alert('Dodawanie filmu nie powiodło się'))

          }}>
          <Form>
            <div className={'flex flex-col gap-8'}>
              <Input
                name="title"
                type="text"
                placeholder="Tytuł"/>
              <Input
                name="image"
                type="text"
                placeholder="Zdjęcie"/>
              <TextArea name="content" type="textarea" rows="3" maxRows={'10'} placeholder="Opis filmu..."/>
              <SubmitButton>Dodaj film</SubmitButton>
            </div>
          </Form>
        </Formik>
      </SectionLayout>
    </PageLayout>
  )
}

export default Add;
