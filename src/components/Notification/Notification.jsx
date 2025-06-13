import React from "react";
import "./Notification.scss";
import { FaRegBell } from "react-icons/fa";

export default function Notification() {
  const handleClickNotification = () => {
    document.querySelector('.notification__list').classList.toggle('open');
  }
  return (
    <div className="notification">
      <div onClick={() => handleClickNotification()} title="Notificações" className="notification__icon">
        <FaRegBell />
        <span>10</span>
      </div>
      <div className="notification__list">
        <p>Notificações</p>
        <ul>
          <li>
            <span>Ana Oliveira</span> publicou um tutorial de como criar
            dashboards interativos e responsivos com filtros dinâmicos no Power
            BI
          </li>
          <li>
            <span>Carlos Mendes</span> publicou um tutorial completo sobre a
            integração da API do WhatsApp Business com Node.js e Express
          </li>
          <li>
            <span>Fernanda Lima</span> publicou um tutorial passo a passo sobre
            autenticação com Firebase usando e-mail, senha e Google Sign-In
          </li>
          <li>
            <span>Lucas Rocha</span> publicou um tutorial explicando como usar o
            React Router v6 para criar rotas privadas com controle de acesso
          </li>
          <li>
            <span>Juliana Silva</span> publicou um guia definitivo para
            iniciantes sobre como configurar TypeScript em projetos React
            modernos
          </li>
          <li>
            <span>Bruno Ferreira</span> publicou um tutorial sobre como usar
            Tailwind CSS para criar layouts totalmente responsivos sem escrever
            CSS puro
          </li>
          <li>
            <span>Sofia Almeida</span> publicou um tutorial sobre como consumir
            APIs REST com tratamento de erros e loading state no Angular 15+
          </li>
          <li>
            <span>Pedro Martins</span> publicou um tutorial de como criar um
            sistema completo de CRUD com Node.js, MongoDB e Express
          </li>
          <li>
            <span>Camila Souza</span> publicou um tutorial de como estruturar
            uma aplicação complexa utilizando Redux Toolkit com múltiplos slices
          </li>
          <li>
            <span>João Pedro</span> publicou um tutorial de como usar Git e
            GitHub para controle de versões, incluindo branches, merges e pull
            requests
          </li>
          <li>
            <span>Mariana Costa</span> publicou um tutorial sobre criação de
            componentes reutilizáveis e altamente configuráveis com React +
            TypeScript
          </li>
          <li>
            <span>Thiago Duarte</span> publicou um tutorial prático sobre como
            consumir APIs GraphQL utilizando Apollo Client com cache otimizado
          </li>
          <li>
            <span>Beatriz Fonseca</span> publicou um tutorial sobre técnicas
            avançadas de responsividade utilizando CSS Grid e media queries
          </li>
          <li>
            <span>Diego Ribeiro</span> publicou um tutorial completo sobre como
            fazer o deploy de uma aplicação full stack no Vercel com backend
            serverless
          </li>
          <li>
            <span>Larissa Nunes</span> publicou um tutorial sobre como utilizar
            Styled Components com temas dinâmicos e dark mode no React
          </li>
          <li>
            <span>Gabriel Torres</span> publicou um tutorial sobre como criar
            formulários avançados com validação em tempo real utilizando React
            Hook Form
          </li>
          <li>
            <span>Renata Pires</span> publicou um tutorial prático sobre como
            configurar o Docker em projetos Node.js com ambiente de
            desenvolvimento isolado
          </li>
          <li>
            <span>Vinícius Castro</span> publicou um tutorial de como escrever
            testes unitários e de integração usando Jest e React Testing Library
          </li>
          <li>
            <span>Natália Monteiro</span> publicou um tutorial de como
            implementar autenticação com JWT e refresh token em APIs RESTful com
            Node.js
          </li>
          <li>
            <span>André Barbosa</span> publicou um tutorial sobre integração com
            o Stripe para criar sistema de pagamento recorrente em aplicações
            web
          </li>
        </ul>
      </div>
    </div>
  );
}
