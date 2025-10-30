import React from 'react';
import styled from 'styled-components';
import MindtechLogo from '../components/MindtechLogo';

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #001f3f;
  color: #fff;
`;

const Content = styled.div`
  max-width: 500px;
  margin-right: 50px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      svg {
        margin-right: 0.5rem;
        color: #007bff;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  img {
    max-width: 400px;
  }
`;

function SubscribePage() {
  return (
    <SubscribeContainer>
      <Content>
        <h1>Inscreva-se agora!</h1>
        <p>
          Preencha o formulário abaixo para se inscrever e começar a receber nossas atualizações diretamente em sua caixa de entrada.
        </p>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07.02l3.992 4.992a.75.75 0 0 1-.02 1.07l-3.992 4.992a.75.75 0 0 1-1.07-.02l-3.992-4.992a.75.75 0 0 1 .02-1.07l3.992-4.992z"/>
            </svg>
            Guias e Tutoriais: Aprenda como implementar e otimizar soluções de IoT para sua empresa.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07.02l3.992 4.992a.75.75 0 0 1-.02 1.07l-3.992 4.992a.75.75 0 0 1-1.07-.02l-3.992-4.992a.75.75 0 0 1 .02-1.07l3.992-4.992z"/>
            </svg>
            Notícias e Tendências: Fique por dentro das últimas novidades e avanços no mundo do IoT.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07.02l3.992 4.992a.75.75 0 0 1-.02 1.07l-3.992 4.992a.75.75 0 0 1-1.07-.02l-3.992-4.992a.75.75 0 0 1 .02-1.07l3.992-4.992z"/>
            </svg>
            Ofertas e Promoções: Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.
          </li>
        </ul>
        <Form>
          <input type="email" placeholder="email@email.com" />
          <button type="submit">Inscrever-se</button>
        </Form>
      </Content>
      <ImageContainer>
        <img src="/assets/mindtech-logo.png" alt="Mindtech IoT" />
      </ImageContainer>
    </SubscribeContainer>
  );
}

export default SubscribePage;