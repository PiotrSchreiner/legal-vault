import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 pt-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Your Personal Vault
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Manage and upload your legal documents.
          </p>
        </header>
        <ProfileCard />
      </div>
    </div>
  );
}
