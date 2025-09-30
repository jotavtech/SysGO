import Image from "next/image";
export default function SmartSiteClean() {
  // Ícones simples (SVG inline)
  const IconPencil = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.125 19.589 3 21l1.411-4.125L16.862 3.487Z" />
    </svg>
  );
  const IconDocument = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-5.5a2.75 2.75 0 0 0-.805-1.945L15.195 2.805A2.75 2.75 0 0 0 13.25 2H8.75A2.75 2.75 0 0 0 6 4.75v14.5A2.75 2.75 0 0 0 8.75 22h6.5A2.75 2.75 0 0 0 18 19.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 2.25V6a2 2 0 0 0 2 2h3.75" />
    </svg>
  );
  const IconCreditCard = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 9.5h19" />
    </svg>
  );
  const IconUser = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 1 1 16 0" />
    </svg>
  );
  return (
    <section id="site-inteligente" className="relative w-full overflow-hidden py-12 sm:py-16 bg-white">
      {/* Background com quadrados pretos sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(0deg,rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:40px_40px]"
      />
      {/* Título no topo + imagem abaixo */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#104E49]">
            Sistema sob medida, do jeito que sua empresa precisa
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-3xl mx-auto">
            Hospedagem, domínio, painel e suporte — tudo configurado e pronto para sua empresa aparecer com estrutura
            profissional. Você participa de todas as etapas, do briefing à publicação.
          </p>
          <div className="mt-6">
            <a href="#contato" className="inline-flex h-11 items-center rounded-full bg-[#104E49] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
              Teste grátis por 7 dias
            </a>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-200">
            <Image
              src="https://res.cloudinary.com/dzwfuzxxw/image/upload/v1759243281/image_th3h6o.jpg"
              alt="Imagem principal do Site Inteligente"
              width={1600}
              height={670}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Faixa destaque em verde com imagem + texto */}
      <div className="mt-16 bg-[#104E49] py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="https://res.cloudinary.com/dzwfuzxxw/image/upload/v1759243682/image_1_zzvmad.jpg"
                alt="Infraestrutura de servidores e profissional de tecnologia"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Cada negócio é único. Seu sistema também pode ser.</h3>
              <p className="text-base/7 opacity-90">
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "1.", t: "Briefing e desenho das telas", icon: <IconPencil /> },
            { n: "2.", t: "Definição do escopo", icon: <IconDocument /> },
            { n: "3.", t: "Desenvolvimento e validação", icon: <IconCreditCard /> },
            { n: "4.", t: "Publicação e acompanhamento", icon: <IconUser /> },
          ].map((it, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm aspect-square flex">
              <div className="w-full flex flex-col h-full">
                {/* Topo: número e ícone grande centralizado */}
                <div className="flex items-start justify-between">
                  <div className="h-9 w-9 grid place-items-center rounded-lg bg-[#104E49]/10 text-[#104E49] font-bold">
                    {it.n}
                  </div>
                </div>
                <div className="flex-1 grid place-items-center text-[#104E49]">
                  {it.icon}
                </div>
                {/* Base: título */}
                <div className="pt-2">
                  <p className="text-base font-semibold text-zinc-800 text-center">{it.t}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário de contato rápido */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#104E49]">Vamos conversar sobre sua demanda?</h4>
            <p className="mt-2 text-base text-zinc-600 max-w-prose">
              Conte-nos rapidamente o que você precisa. Retornaremos com uma proposta personalizada.
            </p>
          </div>
          <form className="rounded-2xl rounded-tr-[48px] bg-[#0f4a45] p-6 text-white shadow-[0_10px_30px_rgba(16,78,73,0.25)]">
            <div className="grid grid-cols-1 gap-2">
              <input className="h-11 bg-transparent text-white placeholder-white/70 border-b border-white/30 focus:outline-none focus:border-white px-1" placeholder="Seu nome" />
              <input className="h-11 bg-transparent text-white placeholder-white/70 border-b border-white/30 focus:outline-none focus:border-white px-1" placeholder="E-mail" type="email" />
              <input className="h-11 bg-transparent text-white placeholder-white/70 border-b border-white/30 focus:outline-none focus:border-white px-1" placeholder="Whatsapp" type="tel" />
              <textarea className="min-h-24 bg-transparent text-white placeholder-white/70 border-b border-white/30 focus:outline-none focus:border-white px-1 py-2" placeholder="Conte um pouco do que precisa..." />
            </div>
            <div className="mt-5 flex justify-end">
              <button type="button" className="inline-flex h-10 items-center rounded-md bg-white/90 px-5 text-sm font-semibold text-[#104E49] hover:bg-white">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
