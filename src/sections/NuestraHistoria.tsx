import Container from '../components/Container';

import Text from '../components/Text';

import img from '../assets/images/images-couple/web/irv-son-1-web.jpg';

import styled from 'styled-components';
import { colors } from '../assets/theme';
// import Flower1 from '../components/Flower1';

import flower1 from '../assets/images/flower1.png';
import flower2 from '../assets/images/flower2.png';
import cloud from '../assets/images/cloud.png';
import MainTitle from '../components/MainTitle';
import couple_names from '../assets/images/logo_names.png';

export const StyledBoda = styled.section`
  width: 100vw;
  position: relative;
  z-index: 10;

  background:
    url(${cloud}) no-repeat left -300px top 0px,
    url(${cloud}) no-repeat right -300px bottom 0px;

  background-size: 700px;

  text-align: center;

  padding-bottom: 5rem;

  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .logo-names {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .flower1-container {
    width: 100%;
    height: 300px;
    position: absolute;
    overflow: hidden;

    .flower1 {
      background-image: url(${flower1});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      position: absolute;
      top: -20%;
      right: -25%;
    }
  }

  .flower2-container {
    width: 100%;
    height: 200px;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    z-index: -1;

    .flower2 {
      background-image: url(${flower2});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;

      right: 30%;
    }
  }

  .hex-irv-son {
    margin: 1rem auto;

    width: 300px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .our-history {
    margin: 0 auto;

    .text {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      p {
        font-size: 1rem;
        font-family: rosarivo-italic;
        color: ${colors.black};
        line-height: 1.8rem;
        margin: 0 0 10px 0;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 450px) {
    background-size: 800px;
    .flower1-container {
      height: 400px;
    }

    .hex-irv-son {
      width: 350px;
      height: 350px;
    }

    .our-history {
      .text {
        p {
          font-size: 1.2rem;
          line-height: 2rem;
        }
      }
    }
  }

  @media (min-width: 576px) {
    background-size: 900px;

    .hex-irv-son {
      width: 400px;
      height: 400px;
    }

    .our-history {
      .text {
        p {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          line-height: 2.2rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-size: 1000px;
    padding-bottom: 7rem;

    .hex-irv-son {
      width: 450px;
      height: 450px;
    }

    .our-history {
      .text {
        p {
          font-size: 1.8rem;
          line-height: 2.5rem;
        }
      }
    }

    .flower1-container {
      height: 500px;
      .flower1 {
        top: -20%;
        right: -30%;
      }
    }

    .flower2-container {
      height: 300px;

      .flower2 {
        right: 35%;
      }
    }
  }

  @media (min-width: 992px) {
    background:
      url(${cloud}) no-repeat left -500px top 0px,
      url(${cloud}) no-repeat right -500px bottom -200px;

    background-size: 1300px;

    .hex-irv-son {
      width: 500px;
      height: 500px;
    }
  }

  @media (min-width: 1200px) {
    background:
      url(${cloud}) no-repeat left -500px top -300px,
      url(${cloud}) no-repeat right -500px bottom -200px;

    background-size: 1700px;
    padding-bottom: 11rem;

    .flower1-container {
      height: 600px;
      .flower1 {
        top: -20%;
        right: -30%;
      }
    }
    .flower2-container {
      height: 400px;

      .flower2 {
        right: 40%;
      }
    }
  }
`;

export default function NuestraHistoria() {
  return (
    <StyledBoda>
      <div className="flower1-container">
        <div className="flower1"></div>
      </div>
      <Container>
        <img className="logo-names" src={couple_names} alt="" />
        <div className="hex-irv-son">
          <img src={img} alt="Irvin y Sonia" />
        </div>
        <div className="our-history">
          <MainTitle text="Nuestra Historia" />
          <div className="text">
            <Text
              as="p"
              text="A dos semanas de conocernos, decidimos ser novios y ... cremos que eso define mucho de como nunca pensamos en llegar hasta aqui."
            />
            <Text
              as="p"
              text="Ahora, después de 10 años juntos, en los cuales hemos aprendido de nuestros errores y nos hemos dedicado en mejorar el uno por el otro, a darnos paz y tranquilidad."
            />
            <Text
              as="p"
              text="Hoy decidimos ser nuestro lugar seguro, toda la vida."
            />
          </div>
        </div>
      </Container>

      <div className="flower2-container">
        <div className="flower2"></div>
      </div>
    </StyledBoda>
  );
}
