import { useState } from "react";

export const useForm = (initialForm ={}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //Name captura la propiedad segun el input de forma dinamica
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
