import { useState, ChangeEvent, MouseEvent } from "react";

interface LoginProps {
  onLogin: (state: any) => void;
}

export function Login({ onLogin }: LoginProps): JSX.Element {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onLogin(data);
  };

  const handleReset = () => {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };

  // Il pulsante è disabilitato se username o password sono vuoti
  const isLoginDisabled = !data.username || !data.password;

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Login</h2>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleInputChange}
      />
      <label>
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={handleInputChange}
        />
        Remember me
      </label>

      <button 
        type="button" 
        onClick={handleLogin} 
        disabled={isLoginDisabled}
      >
        Login
      </button>
      
      <button 
        type="button" 
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
}