import { CardComponent } from "@/components/CardComponent1";
import { Header } from "@/components/Header";
import poster1 from "../../public/images/feature-1.png"
import poster2 from "../../public/images/feature-2.png"
import poster3 from "../../public/images/feature-3.png"
import poster4 from "../../public/images/feature-4.png"
import { CardComponent2 } from "@/components/CardComponent2";
import { QuestionComponent } from "@/components/QuestionComponent";

export default function Home({ heading_text, para_text, image }: any) {
  return (
    <main>
      <Header />

      <CardComponent image={poster1} heading_text={"Enjoy on your TV"} para_text={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} />

      <CardComponent2 image={poster2} heading_text={"Download your shows to watch offline"} para_text={"Save your favourites easily and always have something to watch."} />

      <CardComponent image={poster3} heading_text={"Watch everywhere"} para_text={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} />

      <CardComponent2 image={poster4} heading_text={"Create profiles for kids"} para_text={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} />

      <QuestionComponent />

    </main>
  );
}
