// /components/EventsSection.tsx

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

// Dados de exemplo (mock data)
const eventItems = [
  {
    slug: "/eventos/evento-1",
    image: "https://cbkw.org.br/uploads/evento/34-campeonato-brasileiro.jpeg",
    title: "34º Campeonato Brasileiro de Wushu Kungfu",
    dateMonth: "NOV",
    dateDay: "07",
    location: "Brasília - DF",
  },
  {
    slug: "/eventos/evento-2",
    image: "https://cbkw.org.br/uploads/evento/wttc-2025.jpeg",
    title: "Wushu Taolu Training Camp (WTTC) 2025",
    dateMonth: "JAN",
    dateDay: "15",
    location: "São Paulo - SP",
  },
];

export function EventsSection() {
  return (
    // Opcional: mudei o fundo para 'bg-secondary' para dar um leve contraste
    <section className="w-full bg-secondary py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* --- Título da Seção --- */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Próximos Eventos</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Marque na sua agenda e participe!
          </p>
        </div>

        {/* --- Grade de Eventos --- */}
        <div
          className="
          grid 
          grid-cols-1        /* 1 coluna no mobile (padrão) */
          md:grid-cols-2    /* 2 colunas no desktop */
          gap-6             /* Espaço entre os cards */
          max-w-4xl         /* Limita a largura máxima no desktop */
          mx-auto           /* Centraliza a grade */
        "
        >
          {eventItems.map((item) => (
            <Link href={item.slug} key={item.slug} className="group">
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg">
                {/* Imagem do Card */}
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                </CardHeader>

                {/* Conteúdo do Card (com a data em destaque) */}
                <CardContent className="flex-grow p-4 flex">
                  {/* Bloco da Data */}
                  <div className="flex flex-col items-center justify-center pr-4 border-r border-border mr-4">
                    <span className="text-sm font-bold text-primary">
                      {item.dateMonth}
                    </span>
                    <span className="text-3xl font-bold">{item.dateDay}</span>
                  </div>

                  {/* Informações do Evento */}
                  <div className="flex flex-col justify-center">
                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground mt-1">
                      {item.location}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <span className="text-primary font-medium flex items-center">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* --- Botão "Ver Mais" --- */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/eventos">
              Ver todos os eventos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
