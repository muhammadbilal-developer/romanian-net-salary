"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SITE_IMAGES } from "@/lib/site-images";

export default function FaqGallery() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {SITE_IMAGES.faqGallery.map((img, i) => (
        <motion.figure
          key={img.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-md ring-1 ring-border/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
          />
          <figcaption className="sr-only">{img.alt}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
