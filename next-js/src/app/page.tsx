import { CardComponent } from "@/components/CardComponent";
import { Header } from "@/components/Header";
import poster1 from "../../public/images/feature-1.png"

export default function Home({ heading_text, para_text, image }: any) {
  return (
    <main>
      <Header />
      <CardComponent image={poster1} heading_text={"Enjoy on your TV"} para_text={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} />
      <CardComponent image={poster1} heading_text={"Download your shows to watch offline"} para_text={"Save your favourites easily and always have something to watch."} />
    </main>
  );
}
