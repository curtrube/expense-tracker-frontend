import { useState } from 'react';

const initialFormData = {
  username: '',
  password: '',
};

export default function Home() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
