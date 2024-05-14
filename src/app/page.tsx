import Sidebar from "./components/Sidebar"
import ContentWrapper from "./components/ContentWrapper"


export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <ContentWrapper />
    </main>
  );
}
