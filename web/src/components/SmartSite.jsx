export default function SmartSite() {
  return (
    <section id="site-inteligente" className="w-full overflow-hidden py-16 sm:py-24 bg-white">
      {/* Hero pequeno com CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#104E49]">
              Sistema sob medida, do jeito
              <br className="hidden sm:block" />
              que sua empresa precisa
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-prose">
              Hospedagem, domínio, painel e suporte — tudo configurado e pronto para sua empresa aparecer com estrutura
              profissional. Você participa de todas as etapas, do briefing à publicação.
            </p>
            <div className="mt-6">
              <a href="#contato" className="inline-flex h-11 items-center rounded-full bg-[#104E49] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
                Teste grátis por 7 dias
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
              <div className="h-full w-full grid place-items-center text-zinc-400 text-sm">
                Prévia do painel / calendário
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa destaque em verde com imagem + texto */}
      <div className="mt-16 bg-[#104E49]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div className="rounded-xl overflow-hidden">
              <div className="aspect-video w-full bg-black/30 grid place-items-center text-zinc-200 text-sm">
                Vídeo/Imagem de infraestrutura
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Cada negócio é único. Seu sistema também pode ser.</h3>
              <p className="text-sm opacity-90">
                Desenvolvemos sites inteligentes e sistemas que acompanham a realidade da sua operação. Entregamos
                performance, segurança e facilidade de uso com suporte técnico ágil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Etapas de Criação */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#104E49] text-center">Etapas de Criação</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { n: "1.", t: "Briefing e desenho das telas" },
            { n: "2.", t: "Definição do escopo" },
            { n: "3.", t: "Desenvolvimento e validação" },
            { n: "4.", t: "Publicação e acompanhamento" },
          ].map((it, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center rounded-lg bg-[#104E49]/10 text-[#104E49] font-bold">
                  {it.n}
                </div>
                <p className="text-sm font-medium text-zinc-800">{it.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário de contato rápido */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <h4 className="text-xl font-bold text-[#104E49]">Vamos conversar sobre sua demanda?</h4>
            <p className="mt-2 text-sm text-zinc-600 max-w-prose">
              Conte-nos rapidamente o que você precisa. Retornaremos com uma proposta personalizada.
            </p>
          </div>
          <form className="rounded-2xl rounded-tr-[48px] bg-[#0f4a45] p-6 text-white shadow-[0_10px_30px_rgba(16,78,73,0.25)]">
            <div className="grid grid-cols-1 gap-3">
              <input className="h-10 rounded-md px-3 text-sm text-zinc-900" placeholder="Seu nome" />
              <input className="h-10 rounded-md px-3 text-sm text-zinc-900" placeholder="E-mail" type="email" />
              <input className="h-10 rounded-md px-3 text-sm text-zinc-900" placeholder="Celular" type="tel" />
              <textarea className="min-h-24 rounded-md px-3 py-2 text-sm text-zinc-900" placeholder="Conte um pouco do que precisa..." />
            </div>
            <div className="mt-4 flex justify-end">
              <button type="button" className="inline-flex h-10 items-center rounded-md bg-white/90 px-4 text-sm font-semibold text-[#104E49] hover:bg-white">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
