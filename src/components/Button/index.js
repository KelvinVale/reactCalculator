import {ButtonContainer, ButtonContainer2, ButtonContainer3} from './styles';

const Button = ({name, onClick}) => {
  if (name == parseInt(name)) {
    return (
      <ButtonContainer onClick={onClick}>{name}</ButtonContainer>
      );
  } else 
    if (name == '=') {
      return (
        <ButtonContainer2 onClick={onClick}>{name}</ButtonContainer2>
        );
    }
    else {
      return (
        <ButtonContainer3 onClick={onClick}>{name}</ButtonContainer3>
        );
    }
  }
  
  export default Button;