import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from '@rocketseat/unform'

import logo from '../../assets/logo.svg'

function SigIn() {
   function handleSubmit(data) {
      console.tron.log(data)
   }

   return (
      <>
         <img src={logo} alt="GoBarber"></img>
         <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu e-mail"></Input>
            <Input name="password" type="password" placeholder="Digite sua senha"></Input>
            <button type="submit">Acessar</button>
            <Link to="/register">Criar sua conta</Link>
         </Form>
      </>
   )
}

export default SigIn
