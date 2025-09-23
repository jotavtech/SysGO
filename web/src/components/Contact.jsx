import Link from "next/link";

export default function Contact() {
  return (
    <section id="contato" className="relative w-full bg-[#104E49] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <span className="material-symbols-outlined text-white/90 text-3xl sm:text-4xl mb-3 inline-block" aria-hidden>
            kid_star
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Fale Conosco</h2>
          <div className="text-white/90 space-y-4 leading-relaxed">
            <p>Envie-nos uma mensagem com elogios, dúvidas e sugestões; será um prazer saber sua opinião. Utilize o formulário ao lado.</p>
            <p>Para falar com um de nossos atendentes utilize o Chat Online no canto inferior direito ou clique no botão abaixo e seja direcionado ao nosso atendimento via WhatsApp.</p>
          </div>

          <div className="mt-6">
            <Link
              href="https://wa.me/" target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#104E49] px-4 h-10 font-semibold shadow-sm hover:bg-white/95"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[24px] rounded-tr-[56px] bg-white text-zinc-800 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
              <input type="tel" placeholder="Telefone Whatsapp" className="w-full h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#104E49]" />
              <textarea placeholder="Digite sua mensagem..." rows={5} className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#104E49]"></textarea>
              <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#104E49] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* top separator curve */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-white rounded-b-[24px]" />
    </section>
  );
}
