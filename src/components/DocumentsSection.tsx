
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const documents = [
  {
    icon: "FileCheck",
    title: "Свидетельство о государственной регистрации",
    fileType: "PDF",
    fileSize: "1.2 MB",
  },
  {
    icon: "Award",
    title: "Лицензия на проведение экспертиз",
    fileType: "PDF",
    fileSize: "0.8 MB",
  },
  {
    icon: "Certificate",
    title: "Аттестат аккредитации лаборатории",
    fileType: "PDF",
    fileSize: "1.5 MB",
  },
  {
    icon: "ScrollText",
    title: "Сертификаты экспертов",
    fileType: "PDF",
    fileSize: "2.3 MB",
  },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-blue-900 text-center">Документы и лицензии</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Наша компания имеет все необходимые разрешения и лицензии для проведения профессиональных экспертиз
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name={doc.icon as any} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{doc.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="FileText" size={14} className="mr-1" />
                      <span>{doc.fileType}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Для получения дополнительных документов или информации обратитесь в наш офис
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
