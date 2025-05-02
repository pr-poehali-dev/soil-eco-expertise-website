
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: "MapPin",
    title: "Адрес",
    content: "127006, г. Москва, ул. Тверская, д. 10, офис 315",
  },
  {
    icon: "Phone",
    title: "Телефон",
    content: "+7 (495) 123-45-67",
  },
  {
    icon: "Mail",
    title: "Email",
    content: "info@pochvaexpert.ru",
  },
  {
    icon: "Clock",
    title: "Режим работы",
    content: "Пн-Пт: 9:00-18:00, Сб-Вс: выходной",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-blue-900 text-center">Контакты</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом или оставьте заявку через форму обратной связи
        </p>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-slate-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-center sm:text-left">{item.title}</h3>
                        <p className="text-gray-600 text-center sm:text-left">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] mb-4">
              {/* Здесь будет карта. В реальном проекте можно использовать React-компонент для Яндекс.Карт или Google Maps */}
              <div className="bg-slate-200 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={36} className="text-slate-400 mb-2" />
                  <p className="text-slate-500">Здесь будет карта с расположением офиса</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Форма обратной связи</h3>
                <p className="text-gray-600 mb-6">
                  Заполните форму, и наш специалист свяжется с вами в ближайшее время
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
