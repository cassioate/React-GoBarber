import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo.svg'

const schema = Yup.object().shape({
   nome: Yup.string().required('Nome é obrigatorio'),
   email: Yup.string().email('Insira um email valido.').required('Email é obrigatorio.'),
   password: Yup.string().min(6, 'No minimo 6 caracteres').required('Senha é obrigatoria.'),
})

function SignUp() {
   function handleSubmit(data) {
      console.tron.log(data)
   }

   return (
      <>
         <img src={logo} alt="GoBarber"></img>
         <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="nome" type="text" placeholder="Nome Completo"></Input>
            <Input name="email" type="email" placeholder="Seu e-mail"></Input>
            <Input name="password" type="password" placeholder="Digite sua senha"></Input>
            <button type="submit">Criar conta</button>
            <Link to="/">Já possuo login</Link>
         </Form>
      </>
   )
}

export default SignUp
