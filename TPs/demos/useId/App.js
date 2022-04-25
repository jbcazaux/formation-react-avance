import React, { startTransition, useDeferredValue, useEffect, useId, useRef, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 400px;
  grid-gap: 16px;
`

const Input = ({ label, type, value, onChange }) => {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} value={value} />
    </>
  )
}

const App = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  return (
    <Form>
      <Input label="firstname:" value={firstname} onChange={e => setFirstname(e.target.value)} />
      <Input label="lastname:" value={lastname} onChange={e => setLastname(e.target.value)} />
    </Form>
  )
}

App.propTypes = {}

export default App
