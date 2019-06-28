import React, {useState} from 'react'
import {
    ParentForm,
    HeaderForm,
    FormMainBody,
    Button
} from '../style/componentsStyle';

const RegisterForm = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const Submit = (e) => {
        e.preventDefault();
        onSubmit(name, email, password)
    }
  return (
    <ParentForm onSubmit={Submit}>
                <HeaderForm>
                    <p>Ingrese sus credenciales para entrar:</p>
                </HeaderForm>
                <InputDiv
                    id={'name'}
                    type={'text'}
                    placeHolder={'Ingrese nombre de usuario'}
                    value={name}
                    onChange={setName}
                />
                <InputDiv
                    id={'email'}
                    type={'text'}
                    placeHolder={'Ingrese correo'}
                    onChange={setEmail}
                />
                <InputDiv
                    id={'password'}
                    type={'password'}
                    placeHolder={'Ingrese Constrasena'}
                    onChange={setPassword}
                />
                <div>
                    <Button
                        bgcolor="black"
                        type="submit"
                        value="submit"
                    >
                        Seguir
                    </Button>
                </div>
            </ParentForm>
  )
}
const InputDiv = ({id, type, placeHolder, onChange}) => {
    return (
        <FormMainBody>
            <label htmlFor={id}>{id}</label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeHolder}
                onChange={(e)=>onChange(e.target.value)}
                required
            />
        </FormMainBody>
    )
}

export default RegisterForm
