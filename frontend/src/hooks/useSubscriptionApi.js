import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// Hook personalizado para gerenciar requisições da newsletter
const useSubscriptionApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para inscrever um e-mail
  const subscribe = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/subscribe`, { email });
      setLoading(false);
      return response.data; // Retorna os dados de sucesso
    } catch (err) {
      setLoading(false);
      
      let errorMessage = 'Ocorreu um erro desconhecido.';
      
      if (err.response) {
        if (err.response.status === 409) {
          errorMessage = 'Este e-mail já está cadastrado.'; // Requisito atendido
        } else if (err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        }
      }
      
      setError(errorMessage);
      throw err; // Propaga o erro para o componente que chamou
    }
  };

  // Função para descadastrar um e-mail
  const unsubscribe = async (email) => {
    setLoading(true);
    setError(null);
    try {
      // Encode o e-mail na URL para evitar problemas com caracteres especiais
      const response = await axios.delete(`${API_BASE_URL}/unsubscribe/${encodeURIComponent(email)}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError('Falha ao cancelar a inscrição.');
      throw err;
    }
  };

  return { subscribe, unsubscribe, loading, error };
};

export default useSubscriptionApi;