
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">О компании</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              ООО "Центр почвенно-экологических, сельскохозяйственных и земельных экспертиз" 
              — ведущая организация, специализирующаяся на проведении экспертиз в области 
              почвоведения, экологии, сельского хозяйства и земельных отношений.
            </p>
            <p className="mb-4">
              Наши эксперты имеют многолетний опыт проведения судебных и независимых экспертиз, 
              что позволяет предоставлять объективные заключения, соответствующие всем требованиям 
              законодательства РФ.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="Award" className="text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold">Опыт</h4>
                  <p className="text-slate-600">Более 10 лет</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Icon name="Users" className="text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold">Команда</h4>
                  <p className="text-slate-600">Квалифицированные эксперты</p>
                </div>
              </div>
            </div>

            <Button className="mt-6 bg-blue-700 text-white hover:bg-blue-800" href="#about">
              Подробнее о нас
            </Button>

          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Наши специалисты за работой" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
