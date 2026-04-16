export default function DocumentList({ documents }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-zinc-500 text-sm">
            <th className="pb-4 font-medium">Document Name</th>
            <th className="pb-4 font-medium">Category</th>
            <th className="pb-4 font-medium">Date</th>
            <th className="pb-4 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg group"
            >
              <td className="py-4 px-4 rounded-l-lg border-y border-l border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-500">
                    📄
                  </div>
                  <span className="font-medium text-zinc-200">{doc.name}</span>
                </div>
              </td>
              <td className="py-4 px-4 border-y border-zinc-800 text-zinc-400 text-sm">
                {doc.category}
              </td>
              <td className="py-4 px-4 border-y border-zinc-800 text-zinc-500 text-sm">
                {doc.date}
              </td>
              <td className="py-4 px-4 rounded-r-lg border-y border-r border-zinc-800 text-right">
                <button className="text-zinc-500 hover:text-white transition-colors mr-4">
                  Download
                </button>
                <button className="text-red-500/50 hover:text-red-500 transition-colors">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
