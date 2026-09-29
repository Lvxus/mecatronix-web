
const clients = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPGmEPL__ZQAD7r_vrQhTgrCJkZf-JbWQ2w&s",
    name: "La P'tite France"
  },
  {
    id: 2,
    image: "https://www.greatplacetowork.com.pe/images/lists/las-mejores-2018/supermercados-peruanos/logo-120.png",
    name: "Super Mercados Peruanos S.A."
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i9001OhNPNNlZp7hx8gZOQRGjGBGls5OEg&s",
    name: "La Purita Verdad"
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA09ZNRkJCdaEjYPSmvMu9qWboPbBjbOwouA&s",
    name: "Hotel Melia"
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3i9j2_QvDAmFEXN451R9KXqYRbVgPgarpw&s",
    name: "Las Delicias"
  },
  {
    id: 6,
    image: "https://i.ibb.co/Q38nXBxs/logo1.jpg",
    imageBase: "other/logo1",
    width: 169,
    height: 83,
    name: "Tortatti"
  },
  {
    id: 7,
    image: "https://static.wixstatic.com/media/f0108c_f61b71e43c0d472d9776a907659238de~mv2.png/v1/fit/w_270,h_243,q_90,enc_avif,quality_auto/f0108c_f61b71e43c0d472d9776a907659238de~mv2.png",
    name: "Sakao"
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNMi4dUJqAcwKHksUXNW9D4xYP2Tu1WRi3Q&s",
    name: "Romex"
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVo5icBHEYYsbM2U23NFBXGziz7cUMg8Obw&s",
    name: "San Roque"
  },
  {
    id: 10,
    image: "/CCL.png",
    name: "Cámara de Comercio de Lima"
  }
]

export default function ClientsSection() {
  return (
    <section className="pb-20">
      <style>{`
        @keyframes clients-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: clients-marquee 50s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 80rem;
            margin-inline: auto;
          }
        }
      `}</style>
      <h2 className="text-2xl md:text-3xl text-primary uppercase font-bold text-center" data-aos="fade-up">
        Nuestros Clientes
      </h2>
      <div
        className="relative mt-10 overflow-hidden py-4"
        data-aos="fade-up"
        data-aos-delay="100"
        aria-label="Logos de clientes"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent md:w-24"
          aria-hidden
        />
        <div className="clients-marquee-track">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
            >
              {client.imageBase ? (
                <picture>
                  <source type="image/webp" srcSet={`/images/${client.imageBase}-169.webp 169w`} />
                  <img
                    src={client.image}
                    alt={client.name}
                    title={client.name}
                    width={client.width}
                    height={client.height}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </picture>
              ) : (
                <img
                  src={client.image}
                  alt={client.name}
                  title={client.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          ))}
          {clients.map((client) => (
            <div
              key={`dup-${client.id}`}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
              aria-hidden
            >
              {client.imageBase ? (
                <picture>
                  <source type="image/webp" srcSet={`/images/${client.imageBase}-169.webp 169w`} />
                  <img
                    src={client.image}
                    alt=""
                    title={client.name}
                    width={client.width}
                    height={client.height}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </picture>
              ) : (
                <img
                  src={client.image}
                  alt=""
                  title={client.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
