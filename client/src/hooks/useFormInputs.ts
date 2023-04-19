import { useState, ChangeEvent } from 'react';

interface IUseFormInputs<T> {
  initialValues: T;
  onSubmit: (inputs: T) => void;
}

function useFormInputs<T>({ initialValues, onSubmit }: IUseFormInputs<T>) {
  const [inputs, setInputs] = useState<T>(initialValues);

  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  const handleInputChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const resetInputs = () => {
    setInputs(initialValues);
  };

  const setNewInputValues = (newValues: T) => {
    setInputs(newValues);
  };

  return { inputs, handleSubmit, handleInputChange, resetInputs, setNewInputValues };
}

export default useFormInputs;
