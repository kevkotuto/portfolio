import Title from "@/components/header/Title";
import InfoPerso from "@/components/body/InfoPerso";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const image = [
  { src: "/logo/1.png", alt: "NappyLocks" },
  { src: "/logo/2.png", alt: "GeneraleCi" },
  { src: "/logo/3.png", alt: "Bernabe Ci" },
  { src: "/logo/4.png", alt: "Mr Bricolage Ci" },
  { src: "/logo/5.png", alt: "Moro" },
];

export default function Home() {
  return (
    <div>
      <div className="h-[30rem] rounded-b-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border-b-2 ">
        <div className="h-20"></div>
        <Title />
      </div>
      <div className="min-h-60 border-b-2 rounded-b-[5rem] justify-center flex flex-row items-center gap-10 flex-wrap p-4 z-10 bg-white">
        {image.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className="w-32 h-32 object-cover"
          />
        ))}
      </div>

      <div className="mt-10">
        <InfoPerso />
      </div>

      <div className="min-h-[30rem] rounded-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] border my-10 p-10 md:p-20 flex flex-col justify-between gap-2">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <div className="flex flex-row justify-start gap-2 mb-20 md:mb-0">
            <div className="border-l-2 sm:h-[62em] md:h-[800px] translate-y-2"></div>
            <div>
              <div className="flex flex-row gap-2 justify-start items-center mb-8">
                <p className="text-2xl font-bold w-4 h-4 border bg-gray-800 rounded-full -translate-x-4 -translate-y-10"></p>
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <p>De 2023 à aujourd’hui</p>
                    <Separator orientation="vertical" className="h-4" />
                    <p>Développeur Digital</p>
                  </div>
                  <p className="italic">Bernabé Côte d’Ivoire</p>
                  <p className="pl-4 text-sm">
                    • Développement des sites web pour Mr. Bricolage et Bernabé CI.
                    <br />
                    • Mise en œuvre de solutions digitales pour améliorer
                    l’expérience client et l’efficacité des processus internes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center mb-8">
                <p className="text-2xl font-bold w-4 h-4 border bg-gray-800 rounded-full -translate-x-4 -translate-y-12"></p>
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <p>1 an</p>
                    <Separator orientation="vertical" className="h-4" />
                    <p>Analyste Service Prix et Gestionnaire de Base Article</p>
                  </div>
                  <p className="italic">Bernabé Côte d’Ivoire</p>
                  <p className="pl-4 text-sm">
                    • Analyse des prix et gestion de la base de données produits
                    pour optimiser les offres commerciales.
                    <br />
                    • Coordination avec les équipes d'approvisionnement et
                    techniques pour assurer une mise à jour continue des articles
                    et des prix.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center mb-8">
                <p className="text-2xl font-bold w-4 h-4 border bg-gray-800 rounded-full -translate-x-4 -translate-y-12"></p>
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <p>9 mois</p>
                    <Separator orientation="vertical" className="h-4" />
                    <p>Gestionnaire de Stock</p>
                  </div>
                  <p className="italic">Bernabé Côte d’Ivoire</p>
                  <p className="pl-4 text-sm">
                    • Supervision et suivi des stocks pour optimiser les niveaux
                    de stock, réduire les coûts et éviter les ruptures.
                    <br />
                    • Collaboration avec les équipes de vente pour répondre aux
                    besoins des clients en temps réel.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <p className="text-2xl font-bold w-4 h-4 border bg-gray-800 rounded-full -translate-x-4 -translate-y-12"></p>
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <p>3 ans</p>
                    <Separator orientation="vertical" className="h-4" />
                    <p>Community Manager, Infographiste et Administrateur Système</p>
                  </div>
                  <p className="italic">Bakeryshop Originale</p>
                  <p className="pl-4 text-sm">
                    • Création de contenu graphique pour promouvoir les produits
                    de pâtisserie.
                    <br />
                    • Gestion des réseaux sociaux pour améliorer la visibilité de
                    la marque et interagir avec la clientèle.
                    <br />
                    • Administration des systèmes pour assurer la continuité des
                    services numériques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <div className="flex flex-row gap-4 flex-wrap w-full justify-center items-center">
              <Card className="h-[200px] w-[180px]">
                <CardHeader className="flex justify-center items-center">
                  <img
                    src={"/logo/openclassroom.png"}
                    alt="openclassroom"
                    className="w-20 h-20 object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <p>18 certifications <br /> OpenClassroom</p>
                </CardContent>
              </Card>
              <Card className="h-[200px] w-[180px] flex flex-col justify-center items-center">
                <CardContent className="flex flex-col justify-around items-center">
                  <Avatar className=" w-24 h-24">
                    <AvatarFallback>BTS</AvatarFallback>
                  </Avatar>
                  <p className="text-center">
                    Informatique <br /> Développement <br /> d'application
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-row gap-4 flex-wrap w-full justify-center items-center">
              <Card className="h-[200px] w-[180px] flex justify-center items-center">
                <CardContent className="flex flex-col justify-around items-center h-full">
                  <Avatar className=" w-24 h-24">
                    <AvatarFallback>BAC</AvatarFallback>
                  </Avatar>
                  <p className="text-center">Baccalauréat</p>
                </CardContent>
              </Card>
              <Card className="h-[200px] w-[180px] flex justify-center items-center">
                <CardContent className="flex flex-col justify-around items-center h-full">
                  <Avatar className=" w-24 h-24">
                    <AvatarFallback>BEPC</AvatarFallback>
                  </Avatar>
                  <p className="text-center">Brevet d'Études <br /> du Premier Cycle</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-row gap-4 flex-wrap w-full justify-center items-center">
              <Card className="h-[200px] w-[180px] flex justify-center items-center">
                <CardContent className="flex flex-col justify-around items-center h-full">
                  <Avatar className=" w-24 h-24">
                    <AvatarFallback>CEPE</AvatarFallback>
                  </Avatar>
                  <p className="text-center">Certificat d'Études <br /> Primaires Élémentaires</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="p-10 flex justify-center items-center flex-col mt-20">
          <Separator />
          <Badge variant="outline" className="-translate-y-4 bg-white rotate-3 text-xl px-4">
            Compétences Techniques
          </Badge>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
          <div>
            <p>
              • <span className="font-bold">Développement</span> : Fullstack Web &
              Mobile (Next.js, Node.js, React Native, etc.)
              <br /><br />
              • <span className="font-bold">Langages</span> : HTML, CSS, JavaScript,
              SQL, Python et autres technologies du stack fullstack.
              <br /><br />
              • <span className="font-bold">Outils de Productivité</span> : Excel
              (niveau avancé), gestion de projets avec JIRA, méthodologies Scrum et Agile.
              <br /><br />
              • <span className="font-bold">Gestion de Base de Données</span> : MySQL, MongoDB, Firebase v9
              <br /><br />
              • <span className="font-bold">Infographie</span> : Création de visuels et
              supports marketing (niveau intermédiaire en infographie).
              <br /><br />
              • <span className="font-bold">Autres Compétences</span> : Administration
              système, Community Management
            </p>
          </div>
          <div className="flex gap-4 flex-col mt-10 md:mt-0">
            <h2 className="font-bold">Langues</h2>
            <div>
              <p>• Français : Langue maternelle</p>
              <p>• Anglais : Niveau A1 (Baccalauréat)</p>
              <p>• Arabe : Très débutant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}