import React from 'react';
import styled from 'styled-components';

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #001f3f;
  color: #fff;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    color: #007bff;
  }
`;

function ConfirmPage() {
  return (
    <ConfirmContainer>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07.02l3.992 4.992a.75.75 0 0 1-.02 1.07l-3.992 4.992a.75.75 0 0 1-1.07-.02l-3.992-4.992a.75.75 0 0 1 .02-1.07l3.992-4.992z"/>
      </svg>
      <h1>Obrigado por se inscrever na nossa newsletter!</h1>
      <p>
        Agora você faz parte da comunidade Mindtech e está a um passo de ficar atualizado com as últimas inovações e tendências em Internet das Coisas (IoT).
      </p>
    </ConfirmContainer>
  );
}

export default ConfirmPage;