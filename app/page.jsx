import FloatingDock from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="oveflow-hidden">
      <FloatingDock />
      <Hero />
      {/* <Projects /> */}
    </main>
  );
}
