import { Container } from "../../styles/container";

import Tech from "./tech";
import { BoxAlign } from "./style";
import { AsideMenu } from "./style";
import { BoxGray } from "./style";
import { ListStyled } from "./style";
import { ButtonPlus } from "./style";

import Menu from "./menu";
import Header from "./header";

import { useHistory } from "react-router-dom";

function Home() {
  const usuario = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  const history = useHistory();

  function goBack() {
    console.log("startando function");
    localStorage.clear();

    history.push("/");
  }

  console.log(usuario);

  console.log(usuario.techs);
  return (
    <>
      <Container>
        <Menu goBack={goBack} />
        <Header />
        <BoxAlign>
          <AsideMenu>
            <div>
              <h4>Tecnologias</h4>
            </div>
            <div>
              <ButtonPlus>+</ButtonPlus>
            </div>
          </AsideMenu>
          <BoxGray>
            <ListStyled>
              {usuario.techs.map((tech) => (
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
