import { useField } from 'formik';
import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: 'textarea' });
  return (
    <div className="mb-2">
      <TextareaAutosize className={clsx('text-input font-light px-3 h-12 w-full border-b py-3',
        meta.touched && meta.error ?
          'border-red' : 'border-black')} {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className="error h-4 text-right text-xs text-red">{meta.error}</div>
      ) : <div className="h-4"/>}
    </div>
  );
};

export default TextArea;
