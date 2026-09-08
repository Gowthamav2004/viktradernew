import FireworksCanvas from "@/components/vikram/FireworksCanvas";
import ScrollContent from "@/components/vikram/ScrollContent";

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen selection:bg-[#cca052] selection:text-black">
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60">
        <source src="/images/bg-video.mp4" type="video/mp4" />
      </video>
      <FireworksCanvas />
      <ScrollContent />
    </main>
  );
}
