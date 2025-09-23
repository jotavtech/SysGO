import Link from "next/link";

function Badge({ children }) {
  return (
    <span className="ml-auto inline-flex items-center rounded-full border border-[#104E49]/20 bg-[#104E49]/10 px-2 py-0.5 text-[10px] font-semibold text-[#104E49]">
      {children}
    </span>
  );
}

function Card({ title, label, badge, desc, ctaHref = "#", highlighted = false, icon }) {
  return (
    <div
      className={
        "relative rounded-2xl border bg-white p-5 sm:p-6 shadow-sm transition-all flex flex-col h-full min-h-[360px] sm:min-h-[420px] " +
        (highlighted
          ? "border-[#104E49]/30 shadow-[0_20px_60px_rgba(16,78,73,0.25)]"
          : "border-zinc-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]")
      }
    >
      <div className="flex items-start gap-2 text-xs text-zinc-500 mb-3">
        <span>{label}</span>
        {badge && <Badge>{badge}</Badge>}
      </div>

      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
      </div>

      <p className="text-sm text-zinc-600 leading-relaxed mb-5">{desc}</p>

      <div className={(highlighted ? "pt-1" : "pt-2") + " mt-auto"}>
        <Link
          href={ctaHref}
          className={
            highlighted
              ? "inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#104E49] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]"
              : "inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          }
        >
          Ver mais detalhes
        </Link>
      </div>

      {/* fine separator under title for non-highlighted */}
      {!highlighted && <div className="absolute left-5 right-5 top-[76px] border-t border-zinc-100" />}

      {/* Corner radius outline effect on highlighted card */}
      {highlighted && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#104E49]/50" />
      )}
    </div>
  );
}

export default function Systems() {
  return (
    <section id="sistemas" className="relative w-full overflow-hidden py-16 sm:py-24">
      {/* subtle grid in the back */}
      <div className="absolute inset-0 -z-30">
        <div className="h-full w-full grid-bg" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#104E49]">Nossos Sistemas</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-3xl mx-auto">
            Nossos sistemas tornam a gestão do negócio mais acessível e simplificada, sendo ferramentas essenciais para
            impulsionar seu crescimento no mercado.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* green smoke layer (blurred translucent shapes) */}
          <div className="pointer-events-none absolute inset-x-0 -top-16 h-[360px] sm:h-[420px] -z-10">
            <div className="absolute left-1/4 top-6 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute right-[18%] top-0 h-52 w-52 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="absolute left-[38%] top-24 h-44 w-72 rounded-full bg-emerald-300/25 blur-2xl" />
            <div className="absolute left-[8%] top-24 h-36 w-36 rounded-full bg-emerald-300/15 blur-2xl" />
          </div>

          {/* green translucent rounded blob stronger at center */}
          <div className="pointer-events-none absolute inset-x-0 -top-8 -bottom-8 flex items-center justify-center -z-10">
            <div className="w-[85%] max-w-5xl h-[280px] sm:h-[320px] rounded-[36px] bg-[radial-gradient(ellipse_at_center,_rgba(16,78,73,0.45)_0%,_rgba(16,78,73,0.22)_35%,_rgba(16,78,73,0.10)_60%,_transparent_80%)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <Card
              label="Sua presença digital sem dor de cabeça"
              badge="WEB"
              title="Site Inteligente"
              desc="Hospedagem, domínio, painel e suporte — tudo configurado e pronto para sua empresa aparecer com estrutura profissional."
              icon={<span className="material-symbols-outlined text-[#104E49]">sell</span>}
            />

            <Card
              label="Controle de ordens de serviço sem papelada"
              badge="GESTÃO"
              title="Map-OS"
              highlighted
              desc="Organize sua assistência técnica ou operação de campo em um só lugar, com alertas automáticos, histórico de clientes e cobranças integradas."
              icon={<span className="material-symbols-outlined text-[#104E49]">receipt_long</span>}
            />

            <Card
              label="Sistemas sob medida para o seu negócio"
              badge="SOB-MEDIDA"
              title="Painel Personalizado"
              desc="Criamos soluções exclusivas para empresas que precisam de um sistema específico, funcional e com suporte técnico ágil."
              icon={<span className="material-symbols-outlined text-[#104E49]">database</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
