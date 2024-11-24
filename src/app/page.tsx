import {Header} from "@/app/components/header";
import {Navigation} from "@/app/components/navigation";
import {Product} from "@/app/components/product";
import {recentlyBought} from "@/app/data/recently-bought";
import {RecentlyBoughtCarousel} from "@/app/components/recently-bought-carousel";
import {MostBoughtCarousel} from "@/app/components/most-bought-carousel";
import {Footer} from "@/app/components/footer";
export default function Home() {
  return (
    <div>
      <Header/>

      <Navigation/>

      <div className="mx-4 mt-10 gap-10 flex flex-col">
        <RecentlyBoughtCarousel/>
        <MostBoughtCarousel/>
      </div>

      <Footer/>

    </div>
  );
}
