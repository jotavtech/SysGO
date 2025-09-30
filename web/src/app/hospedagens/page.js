import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Site no ar | SysGO",
  description: "Seu site no ar, sem dor de cabeça.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full max-w-[100vw]">
      <main>
        {/* Hero: Seu site no ar, sem dor de cabeça */}
        <section className="w-full overflow-hidden py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
                  Seu site no ar, sem dor de cabeça
                </h1>
                <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-prose">
                  Hospedagem escalável, registro e renovação de domínio e um painel
                  administrativo simples. Tudo o que você precisa em um só lugar.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#contato" className="inline-flex h-11 items-center rounded-full bg-emerald-700 px-6 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
                    Quero saber como ter o meu
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[16/10] w-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden shadow-sm grid place-items-center">
                  <div className="text-emerald-900/70 text-sm sm:text-base font-medium px-6 text-center">
                    Prévia do seu site e painel de hospedagem
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa: Por que isso importa? */}
        <section className="w-full bg-emerald-900 py-14 sm:py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center">
              <div className="rounded-2xl overflow-hidden bg-emerald-800/50 ring-1 ring-white/10">
                <div className="aspect-[16/10] w-full">
                  <img
                    src="https://res.cloudinary.com/dzwfuzxxw/image/upload/v1759244921/image_2_cdmenc.jpg"
                    alt="Camadas de telas e mockup"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Por que isso importa?</h2>
                <p className="text-white/90 leading-relaxed">
                  Sem um ambiente estável, a inspeção e coleta de resultados ficam instáveis. Seu
                  site hospedado pela SysGO oferece alta taxa de uptime e um fluxo confiável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tudo o que você precisa, em um único sistema */}
        <section className="w-full py-14 sm:py-20 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#104E49]">
                Tudo o que você precisa, em um único sistema
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1: Hospedagem Escalável */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#104E49]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#104E49] mb-2">Hospedagem Escalável</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Planos personalizados para atender ao tamanho da sua demanda
                </p>
              </div>

              {/* Card 2: Registro e Renovação de Domínio */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#104E49]">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9c-2.5-3-4-6.5-4-9s1.5-6 4-9Z" />
                    <path d="M3 12h18" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#104E49] mb-2">Registro e Renovação de Domínio</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Contrate seu domínio profissional .com.br, .com, .net, etc
                </p>
              </div>

              {/* Card 3: Painel Administrativo Simples (destaque) */}
              <div className="rounded-2xl rounded-tr-[48px] bg-yellow-50 p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#104E49]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 9.75 18l-2.58.96.96-2.58 2.83-1.67Zm5.83-5.83-2.83 1.67L12 9.34l1.67-2.83 2.58-.96-.96 2.58Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5 9 15m4.5-4.5L15 9m-6 6 1.5-1.5m4.5-4.5L16.5 7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#104E49] mb-2">Painel Administrativo Simples</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Painel em Português BR, limpo e responsivo
                </p>
              </div>

              {/* Card 4: Certificado SSL (https) */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#104E49]">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#104E49] mb-2">Certificado SSL (https)</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Certificado de segurança gratuito emitido e leva pouquíssimo tempo para nossos IPs (evitando Blacklist)
                </p>
              </div>

              {/* Card 5: E-mails Corporativos */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[#104E49]">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#104E49] mb-2">E-mails Corporativos</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Utilize e-mails pelo painel RoundCube e integração com aplicativos de e-mail, como: Outlook, Thunderbird e outros
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos de Hospedagem */}
        <section className="w-full py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-900">Planos de Hospedagem</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#104E49]">Starter</h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Básico</span>
                </div>
                <p className="text-sm text-zinc-600 mb-4">O essencial para começar com segurança</p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> 5 caixas de e-mail</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> 5GB Armazenamento</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> SSL Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Backup Diário</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> LiteSpeed Cache</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Anti-Spam Premium</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Migração Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Servidores no Brasil</li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="inline-flex h-10 items-center rounded-md bg-zinc-900 text-white px-4 text-sm font-semibold hover:bg-zinc-800">Assinar agora</a>
                </div>
              </div>

              {/* Enterprise (destaque) */}
              <div className="rounded-2xl border-2 border-emerald-300 p-6 shadow-[0_10px_30px_rgba(16,78,73,0.15)] bg-emerald-50">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-emerald-900">Enterprise</h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Profissional</span>
                </div>
                <p className="text-sm text-emerald-900/80 mb-4">Mais recursos para empresas em expansão</p>
                <ul className="space-y-2 text-sm text-emerald-900">
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> 10 caixas de e-mail</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> 10GB Armazenamento</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> SSL Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> Backup Diário</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> LiteSpeed Cache</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> Anti-Spam Premium</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> Migração Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-700">✓</span> Servidores no Brasil</li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="inline-flex h-10 items-center rounded-md bg-emerald-700 text-white px-4 text-sm font-semibold hover:bg-emerald-800">Assinar agora</a>
                </div>
              </div>

              {/* Premium */}
              <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#104E49]">Premium</h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Avançado</span>
                </div>
                <p className="text-sm text-zinc-600 mb-4">Máxima performance e exclusividade total</p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> 20 caixas de e-mail</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> 20GB Armazenamento</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> SSL Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Backup Diário</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> LiteSpeed Cache</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Anti-Spam Premium</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Migração Grátis</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">✓</span> Servidores no Brasil</li>
                </ul>
                <div className="mt-6">
                  <a href="#contato" className="inline-flex h-10 items-center rounded-md bg-zinc-900 text-white px-4 text-sm font-semibold hover:bg-zinc-800">Assinar agora</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Faça como os nossos clientes */}
        <Testimonials />

        {/* Seção: Fale Conosco */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
