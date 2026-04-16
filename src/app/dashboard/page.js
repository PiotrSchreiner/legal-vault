import DocumentList from "@/components/DocumentList";

export default function DashboardPage() {
  const mockDocuments = [
    {
      id: 1,
      name: "Rental_Agreement.pdf",
      category: "Housing",
      date: "12.04.2026",
    },
    {
      id: 2,
      name: "ID_Card_Front.jpg",
      category: "Identity",
      date: "10.04.2026",
    },
    {
      id: 3,
      name: "Salary_March_26.pdf",
      category: "Finances",
      date: "01.04.2026",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Document Vault
            </h1>
            <p className="text-zinc-500 mt-2">
              Manage and organize your uploaded files.
            </p>
          </div>
          <div className="text-right text-sm text-zinc-500">
            Total Files:{" "}
            <span className="text-blue-500 font-mono">
              {mockDocuments.length}
            </span>
          </div>
        </header>

        <section className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-6">
          <DocumentList documents={mockDocuments} />
        </section>
      </div>
    </div>
  );
}
