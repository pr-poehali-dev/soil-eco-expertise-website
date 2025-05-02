
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experts = [
  {
    name: "Иванов Иван Иванович",
    position: "Главный эксперт-почвовед",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    initials: "ИИ",
    description: "Кандидат биологических наук, опыт работы более 15 лет в области почвоведения и экологии.",
  },
  {
    name: "Петрова Елена Сергеевна",
    position: "Эксперт-эколог",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    initials: "ПЕ",
    description: "Специалист по экологической экспертизе с опытом работы более 10 лет.",
  },
  {
    name: "Сидоров Алексей Петрович",
    position: "Эксперт по земельным вопросам",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    initials: "СА",
    description: "Юрист со специализацией в области земельного права, опыт судебных экспертиз более 8 лет.",
  },
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-blue-900 text-center">Наши эксперты</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Команда высококвалифицированных специалистов с большим опытом проведения экспертиз в различных областях
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={expert.image} alt={expert.name} />
                <AvatarFallback className="bg-blue-700 text-white">{expert.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
              <p className="text-blue-700 mb-3">{expert.position}</p>
              <p className="text-gray-600">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
