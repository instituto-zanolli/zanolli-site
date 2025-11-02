// /components/NewsSection.tsx

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Dados de exemplo (mock data)
// No futuro, isso virá de um CMS ou banco de dados
const newsItems = [
  {
    slug: "/noticias/artigo-1",
    image:
      "https://cbkw.org.br/uploads/noticia/campeonato-brasileiro-infantil-2024.jpeg",
    title: "Campeonato Brasileiro Infantil, Cadete e Juvenil de Kungfu 2024",
    date: "30/10/2025",
  },
  {
    slug: "/noticias/artigo-2",
    image: "https://cbkw.org.br/uploads/noticia/circular-01-2025.jpeg",
    title: "Circular 01/2025 - Anuidade e Valor de Inscrição",
    date: "28/10/2025",
  },
  {
    slug: "/noticias/artigo-3",
    image:
      "https://cbkw.org.br/uploads/noticia/campeonato-sul-americano-2024.jpeg",
    title: "Resultados do 13º Campeonato Sul-Americano de Wushu",
    date: "25/10/2025",
  },
];

export function NewsSection() {
  return (
    <section className="w-full bg-background py-12 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* --- Título da Seção --- */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl  md:text-4xl font-bold">Últimas Notícias</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Fique por dentro de tudo que acontece no mundo do Wushu.
          </p>
        </div>

        {/* --- Grade de Notícias --- */}
        <div
          className="
          grid 
          grid-cols-1        /* 1 coluna no mobile (padrão) */
          md:grid-cols-2    /* 2 colunas em tablets */
          lg:grid-cols-3    /* 3 colunas no desktop */
          gap-6             /* Espaço entre os cards */
        "
        >
          {newsItems.map((item) => (
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

                {/* Conteúdo do Card */}
                <CardContent className="flex-grow p-4">
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                  <CardTitle className="text-lg font-semibold mt-2 line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardContent>

                {/* Rodapé do Card */}
                <CardFooter className="p-4 pt-0">
                  <span className="text-primary font-medium flex items-center">
                    Leia mais
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
            <Link href="/noticias">
              Ver todas as notícias
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
