
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-primary font-bold text-xl mr-2">
              ООО "ЦПСЗЭ"
            </div>
            <div className="hidden md:block text-xs text-gray-600">
              Центр почвенно-экологических,<br />сельскохозяйственных и земельных экспертиз
            </div>
          </div>

          {/* Desktop Navigation */}

            <a href="#main" className="text-gray-700 hover:text-primary cursor-pointer">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-primary cursor-pointer">О компании</a>
            <a href="#services" className="text-gray-700 hover:text-primary cursor-pointer">Услуги</a>
            <a href="#experts" className="text-gray-700 hover:text-primary cursor-pointer">Эксперты</a>
            <a href="#documents" className="text-gray-700 hover:text-primary cursor-pointer">Документы</a>
            <a href="#news" className="text-gray-700 hover:text-primary cursor-pointer">Новости</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary cursor-pointer">Контакты</a>
            <Button variant="default" size="sm" href="#contacts">

              <Icon name="FileText" size={16} />
              Запросить экспертизу
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 flex flex-col space-y-3">
            <a href="#main" className="text-gray-700 hover:text-primary py-2">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-primary py-2">О компании</a>
            <a href="#services" className="text-gray-700 hover:text-primary py-2">Услуги</a>
            <a href="#experts" className="text-gray-700 hover:text-primary py-2">Эксперты</a>
            <a href="#documents" className="text-gray-700 hover:text-primary py-2">Документы</a>
            <a href="#news" className="text-gray-700 hover:text-primary py-2">Новости</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary py-2">Контакты</a>
            <Button variant="default" size="sm" className="w-full justify-center">
              <Icon name="FileText" size={16} />
              Запросить экспертизу
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
