export default function ProfileCard() {
  const categories = [
    {
      title: "Personal Information",
      items: ["Full Name", "Address", "Date of Birth", "Nationality"],
      status: "Required",
    },
    {
      title: "Identity",
      items: ["ID Card (Front/Back)", "Passport"],
      status: "Required",
    },
    {
      title: "Finances",
      items: ["Salary Slips", "Tax Assessments", "Tax ID"],
      status: "Required",
    },
    {
      title: "Insurance",
      items: ["Liability", "Health", "Life", "Legal Protection"],
      status: "Required",
    },
    {
      title: "Housing & Real Estate",
      items: ["Rental Agreement", "Land Registry", "Utility Bills"],
      status: "Optional",
    },
    {
      title: "Family & Status",
      items: ["Marriage Certificate", "Birth Certificates", "Divorce Decree"],
      status: "Optional",
    },
    {
      title: "Vehicles & Traffic",
      items: ["Vehicle Registration", "Driver's License", "Accident Reports"],
      status: "Optional",
    },
    {
      title: "Professional",
      items: ["Employment Contract", "Reference Letters", "Resignation"],
      status: "Optional",
    },
    {
      title: "Advanced Planning",
      items: ["Living Will", "Power of Attorney"],
      status: "Optional",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {cat.title}
            </h2>
            <span
              className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${
                cat.status === "Required"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              {cat.status}
            </span>
          </div>

          <ul className="space-y-2 flex-grow">
            {cat.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-zinc-600 dark:text-zinc-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-8 w-full py-2 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            Upload Documents
          </button>
        </div>
      ))}
    </div>
  );
}
