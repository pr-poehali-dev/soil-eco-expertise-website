
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const news = [
  {
    title: "Новые методы анализа почв в полевых условиях",
    date: "15 апреля 2025",
    excerpt: "Наши специалисты успешно применили новую методику экспресс-анализа почв, что позволяет значительно ускорить процесс экспертизы на местности.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Участие в международной конференции по экологии почв",
    date: "28 марта 2025",
    excerpt: "Эксперты нашего центра выступили с докладом на международной конференции, посвященной современным проблемам почвенной экологии.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Открытие нового филиала в Санкт-Петербурге",
    date: "10 марта 2025",
    excerpt: "Мы рады сообщить об открытии нового офиса в Санкт-Петербурге, что позволит нам более оперативно обслуживать клиентов из северо-западного региона.",
    image: "https://images.unsplash.com/photo-1594818379496-da1e345dc0dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-blue-900 text-center">Новости и статьи</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Следите за последними новостями нашей компании и публикациями в области почвоведения и экологии
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Icon name="Calendar" size={14} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-blue-700">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Все публикации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
