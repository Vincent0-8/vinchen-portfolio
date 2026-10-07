"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import { certificationsList } from "@/data/certifications";
import { 
  TbArrowLeft, 
  TbX, 
  TbZoomIn 
} from "react-icons/tb";

export default function CertificationsPage() {
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);
    AOS.refresh();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCertImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      className="min-h-screen bg-(--color-bg) py-10 sm:py-16"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Home Navigation */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-(--color-text-secondary) hover:text-accent transition-colors mb-10 cursor-pointer"
        >
          <TbArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-14 text-center">
          <p className="text-accent text-sm text-center font-medium tracking-widest uppercase mb-2">
            Licenses & Certifications
          </p>
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-(--color-text-primary) mb-3">
            All Certifications
          </h1>
          <p className="text-(--color-text-secondary) text-sm text-center sm:text-base leading-relaxed max-w-2xl mx-auto">
            A complete record of licenses and certifications earned.
          </p>
        </div>

        {/* Certifications List Wrapper */}
        <div className="divide-y divide-(--color-border) border-y border-(--color-border)">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="py-8 sm:py-10 flex flex-col sm:flex-row gap-2 sm:gap-10 group"
            >
              {/* Period (Bulan/Tahun) */}
              <div className="sm:w-36 shrink-0 text-sm font-medium text-(--color-text-secondary) pt-1">
                {cert.issueDate}
              </div>

              {/* Detail Content */}
              <div className="flex-1 space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-(--color-text-primary) leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h2>

                <p className="text-sm text-(--color-text-secondary)">
                  {cert.issuer}
                </p>

                {/* Certificate Image Thumbnail & View Credential Link */}
                {cert.imageUrl && (
                  <div className="pt-3">
                    {/* Thumbnail */}
                    <div
                      onClick={() => setActiveCertImage(cert.imageUrl || null)}
                      className="relative w-44 h-26 sm:w-52 sm:h-30 rounded-lg overflow-hidden border border-(--color-border) bg-(--color-surface) cursor-pointer hover:border-accent hover:scale-[1.02] transition-all shadow-2xs group/img"
                    >
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 176px, 208px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-medium backdrop-blur-[1px]">
                        <TbZoomIn size={16} />
                        <span>Preview</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Zoom */}
      {activeCertImage &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setActiveCertImage(null)}
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-auto flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveCertImage(null)}
                aria-label="Close certificate preview"
                className="absolute -top-11 right-0 text-white/80 hover:text-white transition-colors cursor-pointer p-1"
              >
                <TbX size={30} />
              </button>

              {/* Certificate Image */}
              <img
                src={activeCertImage}
                alt="Certificate Full Preview"
                className="max-h-[82dvh] w-auto max-w-full object-contain rounded-xl shadow-2xl bg-white"
              />
            </div>
          </div>,
          document.body
        )}
    </main>
  );
}


