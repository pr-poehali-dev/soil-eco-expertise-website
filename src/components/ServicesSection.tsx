
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Sprout",
    title: "Почвенные экспертизы",
    description: "Анализ состава, свойств и характеристик почв, определение загрязнений и деградации, составление картограмм.",
  },
  {
    icon: "Leaf",
    title: "Экологические экспертизы",
    description: "Оценка экологического состояния земель, выявление загрязнений, контроль соблюдения природоохранных норм.",
  },
  {
    icon: "Wheat",
    title: "Сельскохозяйственные экспертизы",
    description: "Оценка состояния сельхозугодий, установление причин гибели урожая, определение ущерба.",
  },
  {
    icon: "MapPin",
    title: "Земельные экспертизы",
    description: "Разрешение земельных споров, установление границ участков, оценка кадастровой стоимости.",
  },
  {
    icon: "Scale",
    title: "Судебные экспертизы",
    description: "Проведение экспертиз по запросу судебных органов, подготовка заключений для судебных процессов.",
  },
  {
    icon: "FileText",
    title: "Независимые экспертизы",
    description: "Проведение независимых исследований для частных и юридических лиц, консультации по отраслевым вопросам.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-blue-900 text-center">Наши услуги</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Предоставляем широкий спектр экспертных услуг в области почвоведения, 
          экологии, сельского хозяйства и земельных отношений
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-blue-700" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
