import { useEffect, useState } from "react";
import { Brain, Target, MessageCircle, HelpCircle, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DirectionProvider } from "@radix-ui/react-direction";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["video", "pricing", "features", "testimonials", "faq"];
      let foundActiveSection = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is currently in view (with some padding)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(section);
            foundActiveSection = true;
            break;
          }
        }
      }

      // If no section is in view, clear the active tab
      if (!foundActiveSection) {
        setActiveTab("");
      }
    };

    const handleVideoVisibility = () => {
      const videoSection = document.getElementById("video");
      if (videoSection) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
                setIsVisible(false);
              } else {
                setIsVisible(true);
              }
            });
          },
          {
            threshold: 0.9,
          }
        );

        observer.observe(videoSection);
        return () => observer.disconnect();
      }
    };

    window.addEventListener("scroll", handleScroll);
    const cleanup = handleVideoVisibility();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cleanup) cleanup();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <DirectionProvider dir="ltr">
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-navy/90 backdrop-blur-lg rounded-full border border-teal/20 p-2">
          <Tabs value={activeTab} onValueChange={(value) => {
            setActiveTab(value);
            scrollToSection(value);
          }}>
            <TabsList className="bg-transparent">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <TabsTrigger value="video" className="py-3 rounded-full data-[state=active]:bg-teal/10">
                        <Brain size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />
                      </TabsTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-navy text-teal border-teal/20 px-2 py-1 text-xs">
                    Demo
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <TabsTrigger value="pricing" className="py-3 rounded-full data-[state=active]:bg-teal/10">
                        <DollarSign size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />
                      </TabsTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-navy text-teal border-teal/20 px-2 py-1 text-xs">
                    Pricing
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <TabsTrigger value="features" className="py-3 rounded-full data-[state=active]:bg-teal/10">
                        <Target size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />
                      </TabsTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-navy text-teal border-teal/20 px-2 py-1 text-xs">
                    Features
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <TabsTrigger value="testimonials" className="py-3 rounded-full data-[state=active]:bg-teal/10">
                        <MessageCircle size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />
                      </TabsTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-navy text-teal border-teal/20 px-2 py-1 text-xs">
                    Stories
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <TabsTrigger value="faq" className="py-3 rounded-full data-[state=active]:bg-teal/10">
                        <HelpCircle size={16} strokeWidth={2} className="text-teal" aria-hidden="true" />
                      </TabsTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-navy text-teal border-teal/20 px-2 py-1 text-xs">
                    FAQ
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </DirectionProvider>
  );
};

export default NavigationTabs;