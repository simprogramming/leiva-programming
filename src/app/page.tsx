import Sidebar from "./components/sidebar"

export default function Home() {

  return (
    <main>
    <main className="flex">
      <Sidebar />
      <div className="ml-1/6 flex-1 p-4">
        {/* Votre contenu principal ici */}
      </div>
    </main>
    </main>
  );
}
