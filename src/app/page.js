export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
        <div className="max-w-4xl mb-16">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
            Bridge the Gap Between <br />
            <span className="text-blue-600">Clients & Law Firms</span>
          </h1>
          <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            The secure digital vault for sensitive legal documents. Organize
            your records as a client or streamline your practice as a law firm.
          </p>
        </div>

        <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
          <div className="flex flex-col p-10 transition-all bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
            <div className="mb-4 text-sm font-bold tracking-widest text-blue-600 uppercase">
              For Individuals
            </div>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">
              Client Portal
            </h2>
            <p className="flex-1 mb-8 text-zinc-600 dark:text-zinc-400">
              Keep your financial, identity, and insurance records in one secure
              place. Share access with your attorney with a single click.
            </p>
            <a
              href="/profile"
              className="w-full py-4 text-lg font-semibold text-white transition-colors bg-blue-600 rounded-2xl hover:bg-blue-700 block text-center"
            >
              Get Started for Free
            </a>
          </div>

          <div className="flex flex-col p-10 transition-all bg-zinc-900 border border-zinc-800 rounded-3xl shadow-sm hover:shadow-xl dark:bg-black dark:border-zinc-700">
            <div className="mb-4 text-sm font-bold tracking-widest text-zinc-400 uppercase">
              For Professionals
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Law Firm Access
            </h2>
            <p className="flex-1 mb-8 text-zinc-400">
              Enforce organization on client documentation. Reduce
              administrative overhead and focus on your legal strategy.
            </p>
            <button className="w-full py-4 text-lg font-semibold text-zinc-900 transition-colors bg-white rounded-2xl hover:bg-zinc-200">
              Get Business License
            </button>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-sm text-zinc-500">
          © 2026 LegalVault. All rights reserved. Secure and Encrypted.
        </p>
      </footer>
    </div>
  );
}
