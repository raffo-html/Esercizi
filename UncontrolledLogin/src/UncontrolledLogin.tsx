import React from "react";

export function UncontrolledLogin(): JSX.Element {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Impediamo il ricaricamento della pagina
    event.preventDefault();

    // Utilizziamo l'API FormData per accedere ai valori del modulo
    const formData = new FormData(event.currentTarget);
    
    // Recuperiamo i singoli campi tramite l'attributo "name" degli input
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember");

    // Stampiamo i valori nella console
    console.log("Login Form Data:", {
      username,
      password,
      remember: !!remember, // Converte in boolean
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Uncontrolled Login</h2>
      
      <div>
        <label htmlFor="username">Username:</label>
        <input name="username" id="username" type="text" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input name="password" id="password" type="password" />
      </div>

      <div>
        <label htmlFor="remember">Remember me:</label>
        <input name="remember" id="remember" type="checkbox" />
      </div>

      <button type="submit">Login</button>
      
      {/* Pulsante reset opzionale che funziona nativamente con i form */}
      <button type="reset">Reset</button>
    </form>
  );
}