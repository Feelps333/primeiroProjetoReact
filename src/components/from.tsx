import React, { useState} from 'react'

export const Formulario = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  return(
    <div>
      Digite seu name: <br />
      <input type="text" value={name} onChange={handleInputName}/> <br />
      seu nome é {name} <br />
      Digite seu email: <br />
      <input type="text" value={email} onChange={handleInputEmail}/> <br />
      seu email é: {email} <br />
    </div>
  )
}