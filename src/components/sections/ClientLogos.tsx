import React from "react";
import Image from "next/image";

export default function ClientLogos() {
  const clients = [
    {
      name: "Client 1",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-03.svg",
    },
    {
      name: "Client 2",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-04.svg",
    },
    {
      name: "Client 3",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-02.svg",
    },
    {
      name: "Client 4",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-07.svg",
    },
    {
      name: "Client 5",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-06.svg",
    },
    {
      name: "Client 6",
      src: "https://fincia-demo.themetechmount.com/wp-content/uploads/2025/12/client-05.svg",
    },
  ];

  return (
    <section className="bg-[#063633] text-white py-14 border-t border-white/10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logos Flex Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="h-10 flex items-center justify-center grayscale contrast-200 invert brightness-125 hover:scale-105 transition-transform"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-8 max-w-[130px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Counter Subtext & Divider Line */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm font-normal text-emerald-100/90">
            Over <strong className="font-bold text-white">2,600</strong>{" "}
            satisfied clients businesses worldwide
          </p>
        </div>

      </div>
    </section>
  );
}
