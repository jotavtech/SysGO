"use client";

import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full max-w-[100vw]">
      <main>
        {/* Hero: A tecnologia certa muda a forma como você trabalha */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#104E49]">
                A tecnologia certa muda a forma como você trabalha
              </h1>
              <div className="mt-8">
                <a href="#contato" className="inline-flex h-12 items-center rounded-lg bg-[#104E49] px-8 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
                  Quero essa tecnologia
                </a>
              </div>
            </div>

            {/* 3 Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
                <h3 className="text-base font-bold text-[#104E49] mb-3">+200 de clientes ativos</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  A SysGO nasceu com uma missão clara: tornar a tecnologia mais acessível, humana e eficiente para quem toca o próprio negócio.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
                <h3 className="text-base font-bold text-[#104E49] mb-3">Sistema simples</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  A gente acredita que empreender já é difícil demais para ter que lidar com sistemas complicados.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm text-center">
                <h3 className="text-base font-bold text-[#104E49] mb-3">Eficaz e sensato</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  É por isso que criamos soluções que organizam, otimizam e transformam rotinas, sem exigir conhecimento técnico e sem pesar no bolso.
                </p>
              </div>
            </div>

            {/* Faixa de logos animada (versão menor) */}
            <div className="mt-10 relative overflow-hidden max-w-3xl mx-auto">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
              `}</style>
              <div className="flex items-center gap-4 sm:gap-6 animate-scroll opacity-20 grayscale">
                {/* Primeiro conjunto de logos */}
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 120 40" fill="currentColor">
                  <text x="10" y="25" fontSize="18" fontWeight="bold">LOGOIPSUM</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 80 40" fill="currentColor">
                  <ellipse cx="40" cy="20" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <ellipse cx="40" cy="20" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 80 40" fill="currentColor">
                  <path d="M10,20 Q20,10 30,20 T50,20 T70,20" fill="none" stroke="currentColor" strokeWidth="3"/>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 80 40" fill="currentColor">
                  <circle cx="40" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="30" y="25" fontSize="12">logo</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 100 40" fill="currentColor">
                  <rect x="10" y="12" width="30" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="50" y="12" width="30" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="10" y="25" fontSize="18" fontWeight="bold">IPSUM</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 100 40" fill="currentColor">
                  <text x="10" y="25" fontSize="16">logo ipsum</text>
                </svg>

                {/* Espaço parcial (30% da largura da tela) para o próximo grupo aparecer antes do meio */}
                <div className="w-[30vw]" aria-hidden="true" />

                {/* Segundo conjunto (duplicado para loop infinito) */}
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 120 40" fill="currentColor">
                  <text x="10" y="25" fontSize="18" fontWeight="bold">LOGOIPSUM</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 80 40" fill="currentColor">
                  <ellipse cx="40" cy="20" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <ellipse cx="40" cy="20" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 80 40" fill="currentColor">
                  <circle cx="40" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="30" y="25" fontSize="12">logo</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 100 40" fill="currentColor">
                  <rect x="10" y="12" width="30" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="50" y="12" width="30" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 100 40" fill="currentColor">
                  <text x="10" y="25" fontSize="18" fontWeight="bold">IPSUM</text>
                </svg>
                <svg className="h-2 w-auto flex-shrink-0" viewBox="0 0 100 40" fill="currentColor">
                  <text x="10" y="25" fontSize="16">logo ipsum</text>
                </svg>
                <div className="w-[30vw]" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                Criamos tecnologia simples para empresas reais.
              </p>
            </div>
          </div>
        </section>

        {/* Fale com quem resolve */}
        <section className="w-full bg-[#104E49] py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Fale com quem resolve.</h2>
              <p className="mt-3 text-white/90 max-w-2xl mx-auto">
                Se você precisa de ajuda, quer tirar dúvidas ou iniciar um projeto personalizado, estamos aqui para te ouvir.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl bg-white text-zinc-800 p-6 sm:p-8 shadow-lg">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" className="h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
                  <input type="text" placeholder="Empresa" className="h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
                  <input type="email" placeholder="E-mail" className="h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
                  <input type="tel" placeholder="Telefone Whatsapp" className="h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
                  <textarea placeholder="Digite sua mensagem..." rows={4} className="sm:col-span-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#104E49]"></textarea>
                  <button type="submit" className="sm:col-span-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#104E49] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
                    Enviar mensagem
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-zinc-500">
                  Ou, se preferir, chame no WhatsApp <a href="https://wa.me/" className="underline text-[#104E49] font-medium">clicando aqui</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
