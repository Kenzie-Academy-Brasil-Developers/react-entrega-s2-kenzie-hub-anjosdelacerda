import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginStyle } from "./style";
import { Container } from "../../styles/container";
import { AlignInput } from "./style";

import ImagemLogo from "../../components/img/Logo.png";

import ButtonForm from "../../components/buttons/buttons";

import axios from "axios";

// import Logotipo from "../../components/img";

import { useHistory } from "react-router-dom";

function Login({ logged, setLogged }) {
  const history = useHistory();

  function goToPage(path) {
    return history.push(path);
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("campo está vazio").email("email inválido"),
    password: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    // console.log(data);

    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((response) => {
        // console.log(response);
        // console.log(data);

        console.log(response.data.user);

        window.localStorage.setItem("@kenzieHub:home", response.data.token);

        window.localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );
      })
      .catch((err) => console.log(err));

    setLogged(true);
    goToPage("/home");

    // if (logged) {
    //   return <Redirect to="/home" />;
    // }
  };

  return (
    <>
      <Container>
        <div>
          <img src={ImagemLogo} alt="KenzieHub" />
        </div>
        <LoginStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <AlignInput>
            <label>Email</label>
            <input placeholder="E-mail" {...register("email")} />
            <span> {errors.email && errors.email.message} </span>
          </AlignInput>
          <AlignInput>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span> {errors.password && errors.password.message} </span>
          </AlignInput>
          <ButtonForm type="submit" rosaSchema>
            Entrar
          </ButtonForm>

          <span>ainda não possui uma conta?</span>
          <ButtonForm onClick={() => goToPage("/cadastro")}>
            cadastre-se
          </ButtonForm>
        </LoginStyle>
      </Container>
    </>
  );
}

export default Login;
