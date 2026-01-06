import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Bring Nature Home",
    subtitle:
      "Transform your space with our curated collection of indoor plants",
    tag: "Premium Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Fresh Air, Calm Mind",
    subtitle: "Air-purifying plants for healthier living",
    tag: "Air Purifiers",
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Easy Care Collection",
    subtitle: "Beginner-friendly plants that thrive with minimal care",
    tag: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full delius-swash-caps-regular">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative min-h-[520px] md:min-h-[560px] bg-center bg-cover"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-black/45" />

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-6xl mx-auto my-20 px-5 w-full">
                  <div className="max-w-2xl  text-white">
                    <div className=" inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20">
                      <span className="text-sm font-medium">{s.tag}</span>
                    </div>

                    <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                      {s.title}
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-white/90">
                      {s.subtitle}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/plants"
                        className="btn bg-[#1f3d2b] hover:bg-[#1a3325] text-white border-none rounded-xl px-6"
                      >
                        Explore Plants →
                      </Link>

                      <Link
                        to="/register"
                        className="btn btn-outline text-white border-white/40 hover:bg-white/10 rounded-xl px-6"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.55);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: rgba(255,255,255,0.95);
        }
      `}</style>
    </section>
  );
}
