
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div id="main" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Профессиональные экспертизы в области почвоведения и экологии
          </h1>
          <p className="text-lg mb-8">
            Оказываем квалифицированные услуги судебных и независимых экспертиз в сфере
            почвоведения, экологии, сельского хозяйства и земельных отношений
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Заказать экспертизу
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 bg-contain bg-right-bottom bg-no-repeat" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"}}></div>
    </div>
  );
};

export default HeroSection;
