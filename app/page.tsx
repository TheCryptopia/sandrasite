import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeSection } from "@/components/ResumeSection";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
