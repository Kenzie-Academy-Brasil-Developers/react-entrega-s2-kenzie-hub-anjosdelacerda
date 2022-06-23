import { Container } from "../../styles/container";

import Tech from "./tech";
import { BoxAlign } from "./style";
import { AsideMenu } from "./style";
import { BoxGray } from "./style";
import { ListStyled } from "./style";
import { ButtonPlus } from "./style";

import { useEffect, useState } from "react";

import Menu from "./menu";
import Header from "./header";

import ModalPlus from "../../components/modais/modalPlus";

import { useHistory } from "react-router-dom";
import axios from "axios";

function Home() {
  const usuario = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  const history = useHistory();

  function goBack() {
    console.log("startando function");
    localStorage.clear();

    history.push("/");
  }

  function openModal() {
    setOpen(true);
  }

  console.log(usuario);

  const [open, setOpen] = useState(false);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${usuario.id}`)
      .then((response) => setTechs(response.data.techs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  console.log(usuario.techs);
  return (
    <>
      <Container>
        <ModalPlus open={open} setOpen={setOpen} />
        <Menu goBack={goBack} />
        <Header />
        <BoxAlign>
          <AsideMenu>
            <div>
              <h4>Tecnologias</h4>
            </div>
            <div>
              <ButtonPlus onClick={() => openModal()}>+</ButtonPlus>
            </div>
          </AsideMenu>
          <BoxGray>
            <ListStyled>
              {techs.map((tech) => (
                <Tech
                  key={tech.id}
                  id={tech.id}
                  title={tech.title}
                  status={tech.status}
                />
              ))}
            </ListStyled>
          </BoxGray>
        </BoxAlign>
      </Container>
    </>
  );
}

export default Home;
