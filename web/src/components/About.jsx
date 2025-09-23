import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-800 mb-6">
              Mais leveza na rotina de quem
              <br />
              carrega tudo nas costas
            </h2>
            <div className="space-y-5 text-zinc-700 leading-relaxed">
              <p>
                A SysGO nasceu para tirar o peso da desorganização das mãos de quem toca o próprio negócio.
              </p>
              <p>
                Oferecemos sistemas simples, diretos e eficientes para micro e pequenas empresas que não têm tempo
                (nem paciência) pra planilha, papel e aplicativo complicado.
              </p>
              <p>
                Criamos soluções com quem está na linha de frente e, por isso, falamos a sua língua.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/images/left-image.webp"
                alt="Profissional usando sistema SysGO"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
