import { images } from '../../utils/images';

const categories = [
  { title: 'Robes de mariée', img: images.gallery1 },
  { title: 'Robes de soirée', img: images.gallery2 },
  { title: 'Accessoires', img: images.gallery3 },
  { title: 'Dragées & cadeaux', img: images.gallery4 },
  { title: 'Décoration & location', img: images.gallery5 },
  { title: 'Espace maquillage', img: images.gallery6 },
];

const OurUniverse = () => {
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="h-0.5 w-24 mx-auto bg-[#B58A4A] mb-3" />
          <h2 className="font-playfair text-3xl text-[#4A2E1D] mb-2">NOTRE UNIVERS</h2>
          <div className="h-0.5 w-24 mx-auto bg-[#B58A4A] mt-3" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-t-[1.5rem] rounded-b-md border border-b-[3px] border-[#F7E7CE] border-b-[#B58A4A] bg-[#FAF8F3] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <div className="text-sm uppercase tracking-[0.2em] text-[#4A2E1D] font-semibold">{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurUniverse;
