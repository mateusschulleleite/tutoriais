const Input = ({type, placeholder, value, setValue}) => {
  return <input onChange={(e) => {setValue(e.target.value)}} className='input' type={type} placeholder={placeholder} value={value} />;
};

export default Input;
