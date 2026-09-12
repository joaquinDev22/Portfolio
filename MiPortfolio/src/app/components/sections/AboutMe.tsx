export default function AboutMe() {
  return (
    <section id='sobre-mi' className="py-4 w-fit max-w-6xl mx-auto">
        <div className="flex bg-slate-900/50 bg-blur-2xl rounded-lg p-6 mx-auto items-center">
            <div 
                id='profile-picture' 
                className="w-80 h-80 rounded-xl bg-[url(/perfil.png)] bg-center bg-cover border-2 border-blue-500/60 shadow-xl"
                role="img"
                aria-label="foto de perfil de JoacoDev"
            >
            </div>
            <div>
                <h2 className="text-center text-3xl font-bold mb-6">Sobre Mi</h2>
                <p id="description" className="ml-10 max-w-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam hic veniam possimus culpa esse non in maiores? Omnis corrupti aperiam odio quaerat tempora aliquam, consequatur possimus porro sequi architecto.
                </p>
            </div>
        </div>
    </section>
  )
}
