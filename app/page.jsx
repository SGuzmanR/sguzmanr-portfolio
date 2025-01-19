import FloatingDock from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FloatingDock />
      <Hero />
      {/* <Projects />
      <ContactMe /> */}
    </main>
  );
}
