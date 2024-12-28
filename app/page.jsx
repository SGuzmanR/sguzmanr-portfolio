import { FloatingDock } from "@/components/ui/floating-dock";
import { floatingDockLinks } from "@/constants";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="oveflow-hidden">
      <div className="w-full flex justify-center items-center">
        <FloatingDock
          desktopClassName="fixed bottom-6"
          mobileClassName="fixed bottom-6 right-6"
          items={floatingDockLinks}
        />
      </div>

      <Hero />
    </main>
  );
}
