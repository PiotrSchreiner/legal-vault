"use client";

export default function BusinessLicenseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Elevate Your Practice
              </h2>
              <p className="text-zinc-400 mt-2">
                Manage client documentation with enterprise-grade security.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-white text-2xl"
            >
              &times;
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Unlimited Clients",
                "Team Collaboration",
                "Custom Branding",
                "Audit Logs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="text-blue-500">✓</span> {item}
                </div>
              ))}
            </div>

            {/* Price Card */}
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-blue-500/30">
              <span className="text-zinc-400 text-sm uppercase tracking-wider">
                Professional
              </span>
              <div className="text-4xl font-bold text-white my-2">
                $49
                <span className="text-lg text-zinc-500 font-normal">/mo</span>
              </div>
              <p className="text-xs text-zinc-500">
                Per 5 team members, billed annually.
              </p>
            </div>
          </div>

          <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all">
            Start 14-Day Free Trial
          </button>

          <p className="text-center text-zinc-600 text-xs mt-4">
            No credit card required to start.
          </p>
        </div>
      </div>
    </div>
  );
}
