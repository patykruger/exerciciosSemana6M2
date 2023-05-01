import React, { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const [status, setStatus] = useState({ type: "", mensagem: "" });

  //Recebe os dados
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados se preciso for
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    }
  };

  function validate() {
    if (!user.name)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo nome!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.password)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.password.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });

    return true;
  }

  return (
    <div>
      <h1>Cadastrar Usuário</h1>

      {status.type === "success" ? (
        <p style={{ color: "green" }}>{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
      ) : (
        ""
      )}

      <form onSubmit={addUser}>
        <label>Nome*: </label>
        <input
          type="text"
          name="name"
          placeholder="Nome do usuário"
          onChange={valueInput}
          value={user.name}
        />
        <br />
        <br />
        <label>Email*: </label>
        <input
          type="email"
          name="email"
          placeholder="Email do usuário"
          onChange={valueInput}
          value={user.email}
        />
        <br />
        <br />
        <label>Senha*: </label>
        <input
          type="password"
          name="password"
          placeholder="Senha para acessar o sistema"
          autoComplete="on"
          onChange={valueInput}
          value={user.password}
        />
        <br />
        <br />
        * Campo obrigatório
        <br />
        <br />
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default LoginForm;
