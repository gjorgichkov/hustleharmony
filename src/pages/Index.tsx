import { lazy } from "react";
import { Background } from "@/components/layout/Background";
import { MainContent } from "@/components/layout/MainContent";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen relative bg-navy">
      <ScrollProgress />
      <Background />
      <MainContent />
    </main>
  );
};

export default Index;