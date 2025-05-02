
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ООО "ЦПСЗЭ"</h3>
            <p className="mb-4 text-blue-100">
              Центр почвенно-экологических, сельскохозяйственных и земельных экспертиз
            </p>
            <p className="text-blue-200">
              Профессиональные экспертизы в области почвоведения, экологии и земельных отношений
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#main" className="text-blue-200 hover:text-white">Главная</a>
              <a href="#services" className="text-blue-200 hover:text-white">Услуги</a>
              <a href="#about" className="text-blue-200 hover:text-white">О компании</a>
              <a href="#experts" className="text-blue-200 hover:text-white">Эксперты</a>
              <a href="#documents" className="text-blue-200 hover:text-white">Документы</a>
              <a href="#news" className="text-blue-200 hover:text-white">Новости</a>
              <a href="#contacts" className="text-blue-200 hover:text-white">Контакты</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon name="MapPin" className="text-blue-300 mr-3 mt-1" size={16} />
                <span>127006, г. Москва, ул. Тверская, д. 10, офис 315</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="text-blue-300 mr-3" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="text-blue-300 mr-3" size={16} />
                <span>info@pochvaexpert.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-blue-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2025 ООО "Центр почвенно-экологических, сельскохозяйственных и земельных экспертиз". 
            Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-white">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
