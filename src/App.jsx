// src/App.jsx
import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Cabeçalho */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Encontre Profissionais para o Seu Evento
        </h1>
        <p className="text-lg text-gray-600">
          Garçons, bartenders, seguranças, DJs, fotógrafos e mais!
        </p>
      </header>

      {/* Barra de busca */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Qual profissional você procura?"
          className="flex-1 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Cidade ou Bairro"
          className="w-64 p-2 border rounded"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Buscar
        </button>
      </div>

      {/* Profissionais em destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Profissionais em destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">João Silva</h3>
                <span className="text-yellow-500 font-semibold">4.8</span>
              </div>
              <p className="text-gray-600">
                Bartender com 5 anos de experiência em eventos sociais e
                corporativos.
              </p>
              <p className="text-sm text-gray-500 mt-2">São Paulo, SP</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cadastro para Empresas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cadastro para Empresas</h2>
        <form className="grid gap-4 md:grid-cols-2 mb-6">
          <input
            className="p-2 border rounded"
            placeholder="Nome da empresa"
          />
          <input
            className="p-2 border rounded"
            placeholder="Email comercial"
          />
          <input
            className="p-2 border rounded"
            placeholder="Telefone de contato"
          />
          <input className="p-2 border rounded" placeholder="CNPJ (opcional)" />
          <input className="p-2 border rounded" placeholder="Cidade" />
          <input
            className="p-2 border rounded"
            placeholder="Área de atuação"
          />
        </form>
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Criar conta
        </button>
      </section>

      {/* Cadastro para Profissionais */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Cadastro para Profissionais
        </h2>
        <form className="grid gap-4 md:grid-cols-2 mb-6">
          <input
            className="p-2 border rounded"
            placeholder="Nome completo"
          />
          <input className="p-2 border rounded" placeholder="Email" />
          <input className="p-2 border rounded" placeholder="Telefone" />
          <input
            className="p-2 border rounded"
            placeholder="Especialidade"
          />
          <input className="p-2 border rounded" placeholder="Cidade" />
          <input
            className="p-2 border rounded"
            placeholder="Experiência ou formação"
          />
        </form>
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Cadastrar
        </button>
      </section>

      {/* Painel do Usuário */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Painel do Usuário</h2>
        <div className="flex flex-wrap gap-4">
          {['Minhas Contratações','Profissionais Favoritos','Mensagens','Editar Perfil'].map(txt => (
            <button
              key={txt}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              {txt}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
