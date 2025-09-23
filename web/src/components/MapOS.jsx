"use client";
import { useState } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function MapOS() {
  return (
    <section id="mapos" className="relative w-full overflow-hidden py-16 sm:py-24 scroll-mt-24">
      {/* background subtle grid */}
      <div className="absolute inset-0 -z-30">
        <div className="h-full w-full grid-bg" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#104E49] mb-4">
              Seu negócio organizado.
              <br />
              Seus prazos no controle.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl mb-6">
              O Map-OS é um sistema de ordem de serviço simples e intuitivo que te ajuda a acompanhar tudo, do pedido à
              entrega, sem depender de papel, WhatsApp ou memória.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex h-11 items-center rounded-full bg-[#104E49] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]"
              >
                Teste grátis por 7 dias
              </a>
              <a
                href="#depoimentos"
                className="inline-flex h-11 items-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
              >
                Ver todas avaliações
              </a>
            </div>
          </div>

          {/* Right collage box (custom rounded corners) */}
          <div className="grid grid-cols-2 gap-0">
            {/* TL: square, touching others */}
            <div className="rounded-none bg-emerald-50 aspect-square relative overflow-hidden">
              <Image src="/assets/images/logo.webp" alt="Map-OS" fill className="object-contain p-6" />
            </div>
            {/* TR: rounded on left edges (top-left and bottom-left) */}
            <div className="rounded-none rounded-tl-[48px] rounded-bl-[48px] bg-emerald-100 p-6 flex flex-col justify-center items-start aspect-square">
              <div className="text-3xl font-extrabold text-[#104E49]">300+</div>
              <div className="text-xs text-zinc-600">Empresas que confiam</div>
            </div>
            {/* BL: only top-right highly rounded */}
            <div className="rounded-none rounded-tr-[48px] bg-emerald-200 p-6 flex flex-row items-start gap-4 aspect-square relative">
              {/* Sparkle icon 56x56 (single) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#104E49] flex-none order-0 grow-0"
                aria-hidden
              >
                <path d="M12 3l2.1 4.4L19 9.6l-4.3 2.3L12 16.9l-2.7-5L5 9.6l4.9-1.9L12 3z" />
              </svg>
              <div className="flex flex-col absolute bottom-6 left-6 right-6">
                <div className="text-sm text-[#104E49] font-semibold leading-tight">Clientes aprovam</div>
                <div className="mt-2 flex -space-x-2">
                  <Image src="/assets/images/testimonial-author-1.webp" alt="Cliente 1" width={32} height={32} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                  <Image src="/assets/images/testimonial-author-2.webp" alt="Cliente 2" width={32} height={32} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                  <Image src="/assets/images/testimonial-author-3.webp" alt="Cliente 3" width={32} height={32} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                  <Image src="/assets/images/testimonial-author-4.webp" alt="Cliente 4" width={32} height={32} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                  <Image src="/assets/images/left-image.webp" alt="Cliente 5" width={32} height={32} className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                </div>
              </div>
            </div>
            {/* BR: square, touching others */}
            <div className="rounded-none bg-[#104E49] p-6 text-white text-sm flex flex-col items-end justify-end text-right aspect-square gap-2 relative">
              {/* Icons row moved to top-right */}
              <div className="flex items-center gap-3 opacity-90 absolute top-6 right-6">
                {/* Wrench (Material Symbols 'build') */}
                <span className="material-symbols-outlined text-white text-[26px]" aria-hidden style={{fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24"}}>build</span>
                {/* Person */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                  <path d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                  <path d="M5 21a7 7 0 0 1 14 0" />
                </svg>
                {/* Shopping bag */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                  <path d="M6 7l-1 14h14L18 7H6z" />
                  <path d="M9 7a3 3 0 0 1 6 0" />
                </svg>
                {/* Plus */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <div>Clientes, Serviços, Produtos e Mais</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ + Contact + Footer moved to end */}

      {/* Feature block */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden bg-zinc-100">
            <Image src="https://res.cloudinary.com/dzwfuzxxw/image/upload/v1758655810/assets_task_01k5w0n811f6wbw56tan6j9w43_1758655619_img_0_eokeyb.webp" alt="Usuário no notebook" width={900} height={600} className="w-full h-auto object-cover" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#104E49] mb-3">Você não nasceu pra ser uma planilha viva</h3>
            <p className="text-sm sm:text-base text-zinc-600 mb-4">
              Se a sua rotina é feita de anotações soltas, serviços esquecidos, cobranças manuais e retrabalho, o Map-OS é
              para você.
            </p>
            <p className="text-sm sm:text-base text-zinc-600">
              Com o Map-OS, você ganha clareza, controle e tempo.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom features section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        {/* Header and description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#104E49]">
            Tudo o que você precisa, em um único sistema
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 max-w-prose">
            Sistema de Gestão e Controle de Ordens de Serviço pensado para profissionais autônomos, MEI e pequenas empresas,
            com visual limpo e dinâmicas simples mantém seu negócio organizado de forma simples e intuitiva.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* OS */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm min-h-[10rem] lg:col-span-2">
            <div className="flex items-start gap-3">
              {/* hand icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49]">
                <path d="M7 11v-1a2 2 0 1 1 4 0v1" />
                <path d="M11 11V7a2 2 0 1 1 4 0v4" />
                <path d="M15 11V8a2 2 0 1 1 4 0v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1" />
              </svg>
              <div>
                <div className="text-lg font-semibold text-zinc-900">OS</div>
                <div className="text-sm text-zinc-600">Criação de ordens de serviço em segundos</div>
              </div>
            </div>
          </div>

          {/* Histórico */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm min-h-[10rem] lg:col-span-2">
            <div className="flex items-start gap-3">
              {/* user square icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49]">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M12 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                <path d="M6.5 18a5.5 5.5 0 0 1 11 0" />
              </svg>
              <div>
                <div className="text-lg font-semibold text-zinc-900">Histórico</div>
                <div className="text-sm text-zinc-600">Histórico completo por cliente</div>
              </div>
            </div>
          </div>

          {/* Serviços - highlighted */}
          <div className="rounded-2xl border border-zinc-200 bg-yellow-100 p-5 sm:p-6 shadow-sm relative overflow-hidden lg:col-span-2">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-bl-[48px]" />
            <div className="relative flex items-start gap-3">
              {/* wrench icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49]">
                <path d="M21 21l-6-6" />
                <path d="M11 13a5 5 0 1 1 4-8l-3 3 3 3a5 5 0 0 1-4 2Z" />
              </svg>
              <div>
                <div className="text-lg font-semibold text-zinc-900">Serviços</div>
                <div className="text-sm text-zinc-700">Acompanhamento de status do serviço</div>
              </div>
            </div>
          </div>

          {/* Cobrança */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm min-h-[10rem] sm:col-span-2 lg:col-span-3">
            <div className="flex items-start gap-3">
              {/* bank icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49]">
                <path d="M3 10l9-6 9 6" />
                <path d="M4 10h16v9H4z" />
                <path d="M2 19h20" />
              </svg>
              <div>
                <div className="text-lg font-semibold text-zinc-900">Cobrança</div>
                <div className="text-sm text-zinc-600">Cobrança por link (Pix, boleto ou cartão)</div>
              </div>
            </div>
          </div>

          {/* Relatórios */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm min-h-[10rem] sm:col-span-2 lg:col-span-3">
            <div className="flex items-start gap-3">
              {/* chart pie icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49]">
                <path d="M12 3v9h9" />
                <path d="M21 12a9 9 0 1 1-9-9" />
              </svg>
              <div>
                <div className="text-lg font-semibold text-zinc-900">Relatórios</div>
                <div className="text-sm text-zinc-600">Relatórios simples para entender o que está funcionando</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <a href="#contato" className="inline-flex h-10 sm:h-11 items-center rounded-full bg-[#104E49] px-5 sm:px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
            Teste por 7 dias grátis
          </a>
        </div>
      </div>

      {/* CTA banner section */}
      <div className="relative mt-20 sm:mt-28">
        <div className="bg-[#0d3f3b] text-white py-16 sm:py-20 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Você não precisa acreditar. Só precisa testar</h3>
            <p className="text-sm sm:text-base text-white/90 mb-6">7 dias grátis, sem compromisso.<br className="hidden sm:block"/>Use de verdade e veja a diferença no seu dia a dia.</p>
            <a href="#contato" className="inline-flex h-11 items-center rounded-full bg-white/95 text-[#104E49] px-6 text-sm font-semibold shadow-sm hover:bg-white">Quero testar o Map-OS agora</a>
          </div>
        </div>
      </div>

      {/* Pricing plans section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#104E49] text-center">Planos de Gestão de Ordens de Serviço</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Left plan */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            {/* Paper icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49] mb-3">
              <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
              <path d="M14 3v6h6"/>
            </svg>
            <div className="text-xs text-zinc-600 mb-3">Pensado para todos os tipos de Varejo e Distribuidoras</div>
            <div className="text-xl font-semibold text-zinc-900 mb-2">Instância MAP-OS</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Acesso Completo ao MAP-OS com Ordens de Serviço, Vendas, Clientes, Produtos, Relatórios e mais.</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Servidor Dedicado em SP, com subdomínio e SSL incluídos.</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Usuários Ilimitados e 5GB de Armazenamento.</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Suporte Especializado</span></li>
            </ul>
            <div className="mt-6">
              <a href="#contato" className="w-full inline-flex justify-center h-10 items-center rounded-full bg-[#104E49] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">Ver mais detalhes</a>
            </div>
          </div>

          {/* Center plan - highlighted */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-[0_10px_25px_-10px_rgba(16,78,73,0.45)] relative">
            <div className="absolute -top-3 right-4 bg-emerald-100 text-[#104E49] text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">Novidade</div>
            {/* Diamond icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#104E49] mb-3">
              <path d="M3 9l4-6h10l4 6-9 12L3 9z"/>
              <path d="M3 9h18"/>
              <path d="M7 3l5 6 5-6"/>
            </svg>
            <div className="text-xs text-zinc-600 mb-3">Ideal para técnicos e assistências em geral</div>
            <div className="text-xl font-semibold text-zinc-900 mb-2">MAP-OS Premium</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Todos os recursos do plano Instância MAP-OS, com melhorias de desempenho e usabilidade</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Relatórios avançados e Financeiro Detalhado para tomada de decisão estratégica</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Integrações com ferramentas externas como Google Agenda, WhatsApp e CRMs</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Dashboard Personalizado por Perfil de Usuário (administrador, técnico, cliente, etc.)</span></li>
            </ul>
            <div className="mt-6">
              <a href="#contato" className="w-full inline-flex justify-center h-10 items-center rounded-full bg-[#104E49] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">Ver mais detalhes</a>
            </div>
          </div>

          {/* Right plan */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm relative">
            <div className="absolute -top-3 right-4 bg-zinc-100 text-zinc-800 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200">Personalizado</div>
            {/* Build icon (Material Symbols) */}
            <span className="material-symbols-outlined text-[#104E49] text-[26px] mb-3" aria-hidden style={{fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24"}}>build</span>
            <div className="text-xs text-zinc-600 mb-3">Hospedagem em nuvem com preço competitivo</div>
            <div className="text-xl font-semibold text-zinc-900 mb-2">Personalização MAP-OS</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Funcionalidades desenvolvidas conforme sua necessidade</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Layout e Interface Visual Personalizados</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Ajustes de Fluxos e Campos, adicionando ou removendo etapas, formulários, módulos</span></li>
              <li className="flex gap-2"><span className="text-[#104E49]">✓</span><span>Equipe de Desenvolvimento dedicada</span></li>
            </ul>
            <div className="mt-6">
              <a href="#contato" className="w-full inline-flex justify-center h-10 items-center rounded-full bg-[#104E49] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">Ver mais detalhes</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section (end of page) */}
      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 mb-12 sm:mb-16">
        {(() => {
          const faqs = [
            {
              q: "O Map-OS é difícil de usar?",
              a:
                "Não. O Map-OS foi desenhado para ser simples e direto. Em poucos minutos você cria OS, cadastra clientes e acompanha o status dos serviços. Oferecemos onboarding, tutoriais rápidos e suporte para ajudar no início.",
            },
            {
              q: "Posso cancelar quando quiser?",
              a:
                "Sim. Não há fidelidade. Você pode cancelar a qualquer momento, sem multas. Seus dados permanecem disponíveis para exportação por um período combinado após o término do plano.",
            },
            {
              q: "O sistema funciona no celular?",
              a:
                "Funciona. O Map-OS é responsivo e pode ser usado no navegador do celular ou tablet. Você e sua equipe conseguem abrir OS, atualizar status e consultar informações de onde estiverem.",
            },
            {
              q: "O que acontece depois dos 7 dias grátis?",
              a:
                "Após o teste, você escolhe um dos planos e continua usando normalmente, mantendo tudo o que foi cadastrado. Se decidir não continuar, pode exportar seus dados e encerrar sem custos.",
            },
          ];
          const [open, setOpen] = useState(0);

          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#104E49]">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {faqs.map((item, idx) => {
                  const isOpen = open === idx;
                  return (
                    <div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm">
                      <button
                        type="button"
                        className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${idx}`}
                        onClick={() => setOpen(isOpen ? -1 : idx)}
                      >
                        <div className="text-zinc-900 font-medium">{item.q}</div>
                        <span className="material-symbols-outlined text-zinc-600 cursor-pointer">{isOpen ? "expand_less" : "expand_more"}</span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                        aria-hidden={!isOpen}
                      >
                        <div className="overflow-hidden">
                          <p id={`faq-panel-${idx}`} className="text-sm text-zinc-600">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Contact + Footer at the very end */}
      <Contact />
      <Footer />
    </section>
  );
}
