import { useState, useContext } from "react";

import Input from "../../form/input";
import { Link } from "react-router-dom";

import styles from "../../form/Form.module.css";

// context
import { Context } from "../../../context/UserContext";

const Register = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    register(user);
  }

  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmar Senha"
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Clique aqui</Link> para fazer login.
      </p>
    </section>
  );
};

export default Register;
