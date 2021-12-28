import {useField} from "formik";
import clsx from "clsx";

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-0.5">
      <input className={clsx('text-input font-light px-3 h-12 w-full border-b mb-1',
        meta.touched && meta.error ?
          'border-red' : 'border-black')} {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className="error h-4 text-right text-xs text-red">{meta.error}</div>
      ) : <div className="h-4"/>}
    </div>
  );
};

export default Input;
