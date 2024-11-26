'use client'
import {Header} from "@/app/components/header";
import {Navigation} from "@/app/components/navigation";
import {RecentlyBoughtCarousel} from "@/app/components/recently-bought-carousel";
import {MostBoughtCarousel} from "@/app/components/most-bought-carousel";
import {Footer} from "@/app/components/footer";
import {isApp} from "@/app/utils/isApp";
export default function Home() {
  return (
    <div className="group/marketplace" data-traffic={isApp()? 'app': 'web'}>
      <Header/>

      <div className="mx-4 mt-10 gap-10 flex flex-col">
        <Navigation/>
        <RecentlyBoughtCarousel/>
        <MostBoughtCarousel/>
      </div>

      <Footer/>
    </div>
  );
}
