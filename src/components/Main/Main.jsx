import React from 'react';

function Main() {
  return (
    <main>
      <section aria-labelledby="titulo-manual">
        <h2 id="titulo-manual">Manual do Sobrevivente</h2>

        <p>
          Este manual reúne técnicas essenciais para enfrentar ambientes
          desconhecidos e aumentar suas chances de sobrevivência em qualquer
          missão.
        </p>

        <p>
          Antes de explorar um novo planeta, é importante saber como encontrar
          água, construir abrigo, escolher equipamentos e reconhecer situações
          de risco.
        </p>
      </section>

      <section aria-labelledby="titulo-tecnicas">
        <h2 id="titulo-tecnicas">Técnicas essenciais</h2>

        <article id="tecnicas">
          <h3>Encontre água</h3>
          <p>
            Localizar uma fonte segura de água deve ser uma das primeiras
            prioridades durante uma missão de sobrevivência.
          </p>
        </article>

        <article id="abrigo">
          <h3>Construa um abrigo</h3>
          <p>
            Um abrigo ajuda a proteger contra mudanças de temperatura,
            tempestades e outros perigos do ambiente.
          </p>
        </article>

        <article>
          <h3>Prepare uma fonte de calor</h3>
          <p>
            Uma fonte de calor pode ajudar a manter a temperatura corporal,
            preparar alimentos e sinalizar sua localização.
          </p>
        </article>
      </section>

      <section aria-labelledby="titulo-preparo">
        <h2 id="titulo-preparo">Prepare sua missão</h2>

        <article id="equipamentos">
          <h3>Equipamentos essenciais</h3>
          <p>
            Leve ferramentas de comunicação, iluminação, primeiros socorros e
            itens adequados para o ambiente que será explorado.
          </p>
        </article>

        <article>
          <h3>Observe o ambiente</h3>
          <p>
            Antes de seguir caminho, analise o terreno, o clima e possíveis
            riscos ao seu redor.
          </p>
        </article>

        <article>
          <h3>Crie uma sinalização</h3>
          <p>
            Utilize sinais visíveis para facilitar sua localização por uma
            equipe de resgate.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;