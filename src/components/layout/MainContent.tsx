import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";
import PainPoints from "@/components/PainPoints";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import NavigationTabs from "@/components/NavigationTabs";

const SectionLoader = () => (
  <div className="w-full py-10">
    <div className="container mx-auto px-4">
      <Skeleton className="h-8 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const MainContent = () => {
  return (
    <div className="relative z-10 space-y-10">
      <section><Hero /></section>
      <Suspense fallback={<SectionLoader />}>
        <section id="video"><ProductShowcase /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="pricing"><Pricing /></section>
      </Suspense>
      <div className="container mx-auto px-4">
        <Suspense fallback={<SectionLoader />}>
          <section id="features" className="space-y-10">
            <PainPoints />
          </section>
        </Suspense>
      </div>
      <Suspense fallback={<SectionLoader />}>
        <section id="testimonials"><Testimonials /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="faq"><FAQ /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section><Footer /></section>
      </Suspense>
      <NavigationTabs />
    </div>
  );
};