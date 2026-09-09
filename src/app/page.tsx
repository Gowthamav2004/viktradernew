import FireworksCanvas from "@/components/vikram/FireworksCanvas";
import ScrollContent from "@/components/vikram/ScrollContent";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-[#cca052] selection:text-black">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#050505] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-75 md:opacity-70"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <FireworksCanvas />
      <ScrollContent />
    </main>
  );
}
