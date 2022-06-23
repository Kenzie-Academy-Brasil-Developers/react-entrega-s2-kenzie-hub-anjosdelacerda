import { TechStyled } from "./style";
import { TechListDetails } from "./style";

function Tech(props) {
  return (
    <TechStyled key={props.id}>
      <div>{props.title}</div>
      <TechListDetails>
        {props.status}
        <button>X</button>
      </TechListDetails>
    </TechStyled>
  );
}

export default Tech;
