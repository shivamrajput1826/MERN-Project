import Form from '../components/form/Form';

const Signup = () => {
  const fields = [
    { label: 'Username', name: 'username', type: 'text', required: true },
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Password', name: 'password', type: 'password', required: true },
  ];

  const onSubmit=(formData:Record<string, string>)=>{
    console.log("Form Submitted:",formData)
  }
  return (
    <div>
    <Form fields={fields} onSubmit={onSubmit} />
  </div>
  )
}

export default Signup