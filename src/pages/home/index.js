import { ContainerHome } from "../../styles/container";

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
import ModalEdit from "../../components/modais/modalEdit";

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

  const [open, setOpen] = useState(false);
  const [openTech, setOpenTech] = useState(false);
  const [momentId, setMomentId] = useState("");

  // console.log(momentId + "olha aqui nando");

  const [techs, setTechs] = useState([]);

  function openModalTech(idTech) {
    console.log(idTech);
    setMomentId(idTech);
    setOpenTech(true);
  }

  function closeModalTech() {
    setOpenTech(false);
    setMomentId("");
  }

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${usuario.id}`)
      .then((response) => setTechs(response.data.techs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${usuario.id}`)
      .then((response) => setTechs(response.data.techs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openTech]);

  return (
    <>
      <ContainerHome>
        <ModalPlus open={open} setOpen={setOpen} />
        <ModalEdit
          openTech={openTech}
          serOpenTech={setOpenTech}
          closeModalTech={closeModalTech}
          momentId={momentId}
          setMomentId={setMomentId}
        />
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
                  openModalTech={openModalTech}
                  openTech={openTech}
                  setOpenTech={setOpenTech}
                />
              ))}
            </ListStyled>
          </BoxGray>
        </BoxAlign>
      </ContainerHome>
    </>
  );
}

export default Home;
