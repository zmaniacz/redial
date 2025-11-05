import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-[-0.08em]">
              <span className="text-gray-300">REDIAL</span>
              {' . '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NET
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            A silly place.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Some people hang out on Discord
          </p>
          <div className="flex flex-col items-center gap-4 mb-6">
            <a
              href="https://discord.gg/bFuyshS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
            >
              #nottdzk
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <h1 className="text-sm md:text-sm font-black text-white ">
              Linkz is the admin now
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}
