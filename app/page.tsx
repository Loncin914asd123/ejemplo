import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-6 py-10 sm:px-20 gap-16 bg-white dark:bg-[#111] text-gray-800 dark:text-white">
      
      {/* HEADER */}
      <header className="text-center space-y-4 row-start-1">
        <Image
          className="mx-auto dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          ¡Bienvenido a tu viaje de programación!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Aprende a construir aplicaciones web modernas paso a paso.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="row-start-2 flex flex-col gap-10 items-center sm:items-start w-full max-w-2xl">
        
        {/* Lista de pasos */}
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-4">Comienza en 3 pasos:</h2>
          <ol className="list-decimal list-inside space-y-2 text-base leading-relaxed">
            <li>
              Abre{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                app/page.tsx
              </code>{" "}
              y empieza a escribir tu código.
            </li>
            <li>Guarda los cambios y observa el resultado al instante.</li>
            <li>
              Explora la documentación y los recursos para avanzar más rápido.
            </li>
          </ol>
        </section>

        {/* Botones */}
        <section className="flex flex-col sm:flex-row gap-4 w-full sm:items-center">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-black text-white dark:bg-white dark:text-black gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy ahora
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.15] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-6 sm:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer documentación
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Aprende Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Ver ejemplos 
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir a nextjs.org →
        </a>
      </footer>
    </div>
  );
}
