import Link from "next/link";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "BETCLIC",
    logo: "https://ext.same-assets.com/2883226675/1084788556.jpeg",
    category: "Gaming & Sports"
  },
  {
    id: 2,
    name: "OM",
    logo: "https://ext.same-assets.com/2883226675/1263812621.jpeg",
    category: "Sports"
  },
  {
    id: 3,
    name: "FFF",
    logo: "https://ext.same-assets.com/2883226675/609153772.jpeg",
    category: "Fédération"
  },
  {
    id: 4,
    name: "LOSC",
    logo: "https://ext.same-assets.com/2883226675/2292280681.jpeg",
    category: "Sports"
  },
  {
    id: 5,
    name: "BDS",
    logo: "https://ext.same-assets.com/2883226675/2307914878.jpeg",
    category: "Gaming"
  },
  {
    id: 6,
    name: "Panini",
    logo: "https://ext.same-assets.com/2883226675/1136842449.jpeg",
    category: "Collector"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Header */}
      <header className="relative flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-sm font-medium">
          Sound Designer
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="block">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">VALENTIN</span>
              <span className="text-cyan-400">LEVRAUD</span>
            </div>
          </Link>
        </div>

        <div>
          <Link
            href="mailto:contact@valentinlevraud.com?subject=%5BSITE%5D%20Prise%20de%20contact"
            className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            Get in touch
            <Image
              src="https://ext.same-assets.com/2883226675/229669324.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="opacity-60"
            />
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mt-8 mb-16">
        <Link href="/about" className="text-sm font-medium hover:opacity-80 transition-opacity text-cyan-400">
          About
        </Link>
        <Link href="/projects" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Projects
        </Link>
        <Link href="/services" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 mb-20">
        <h1 className="text-huge font-special text-white mb-12 leading-none tracking-tight">
          À PROPOS DE<br />
          VALENTIN
        </h1>
      </section>

      {/* Bio Section */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">VL</span>
                    </div>
                    <p className="text-gray-400 text-sm">Photo de profil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Sound Designer Passionné</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Avec plus de 10 ans d'expérience dans la création sonore, je me spécialise dans la conception d'identités sonores uniques et d'expériences audio immersives.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Mon approche combine créativité artistique et expertise technique pour créer des sons qui racontent des histoires et évoquent des émotions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                De la publicité à l'animation, en passant par le cinéma et la télévision, chaque projet est une opportunité de repousser les limites du possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diplômes et Formation */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formation & Diplômes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Master Sound Design</h3>
              <p className="text-gray-400 mb-2">École Nationale Supérieure des Arts</p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Licence Audio-Visuel</h3>
              <p className="text-gray-400 mb-2">Université de Paris</p>
              <p className="text-sm text-gray-500">2017 - 2020</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Certification Pro Tools</h3>
              <p className="text-gray-400 mb-2">Avid Technology</p>
              <p className="text-sm text-gray-500">2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Techniques</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Sound Design</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Mixage Audio</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Mastering</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Spécialités</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Identités sonores</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Sound design cinéma</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Audio publicitaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Musique d'ambiance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réseaux Sociaux */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Réseaux Sociaux</h2>
          <div className="flex justify-center gap-8">
            <Link 
              href="https://linkedin.com/in/valentinlevraud" 
              className="px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://behance.net/valentinlevraud" 
              className="px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
            >
              Behance
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Clients & Collaborations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="text-sm font-bold text-white mb-1">
                    {client.name}
                  </div>
                  <div className="text-xs text-white/80">
                    {client.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-lg text-gray-300 mb-8">
            Prêt à donner vie à votre projet avec une identité sonore unique ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
          >
            Me contacter
            <Image
              src="https://ext.same-assets.com/2883226675/229669324.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="ml-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
