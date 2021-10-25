import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function App() {

  const schema = yup.object({
    firstName: yup.string().min(4, 'Слишком короткое имя').required('Это обязательное поле!'),
    lastName: yup.string().required('Это обязательное поле!'),
    email: yup.string().email('Неверная почта').required('Обязятельно введите почту')
  })

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });


  const onSubmit = (values) => console.log("ФОРМА!", values);

  //очистка формы
  const resetForm = () => {
    reset(defaultValues);
  };

  return (
    <div className="App">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("firstName")}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName")}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register("email")}
          error={!!formState.errors.email}
          helperText={
            formState.errors.email && formState.errors.email.message
          }
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
        />
        <TextField
          {...register("password", {
            required: "Это обязательное поле!"
          })}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField name="about" label="Обо мне" fullWidth />
      </div>
      <br />
      <div className="row">
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Зарегистрироваться
        </Button>
        <Button variant="contained" color="secondary" onClick={resetForm}>
          Очистить
        </Button>
      </div>
    </div>
  );
}

export default App;
