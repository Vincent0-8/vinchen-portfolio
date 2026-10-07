"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { certificationsList } from "@/data/certifications";
import { TbX, TbArrowRight } from "react-icons/tb";

export default function Certification() {
    const [activeCertImage, setActiveCertImage] = useState<string | null>(null);
    const featuredCertifications = certificationsList.slice(0, 3);

    return (
        <section id="certifications" data-aos="fade-up" className="container max-w-4xl py-20">
        
        {/* 1. Centered Section Header */}
        <p className="text-accent text-sm font-medium text-center tracking-widest mb-2">
            Licenses & Certifications
        </p>
        <h2 className="text-3xl font-bold text-center text-(--color-text-primary) mb-12">
            Certifications
        </h2>

        {/* 2. List Wrapper */}
        <div className="space-y-10">
            {featuredCertifications.map((cert) => (
            <div 
                key={cert.id} 
                className="flex flex-col sm:flex-row gap-1 sm:gap-8 group"
            >
                <div className="sm:w-28 shrink-0 text-sm font-medium text-(--color-text-secondary) pt-0.5">
                {cert.issueDate}
                </div>

                <div className="flex-1 space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-(--color-text-primary) leading-snug group-hover:text-accent transition-colors">
                    {cert.title}
                </h3>
                
                <p className="text-sm text-(--color-text-secondary)">
                    {cert.issuer}
                </p>

                {cert.imageUrl && (
                    <div className="pt-2">
                        <div 
                        onClick={() => setActiveCertImage(cert.imageUrl)}
                        className="relative w-32 h-18 sm:w-36 sm:h-20 rounded-md overflow-hidden border border-(--color-border) bg-(--color-surface) cursor-pointer hover:border-accent hover:scale-105 transition-all shadow-2xs">
                            <Image
                            src={cert.imageUrl}
                            alt={cert.title}
                            fill={true}
                            sizes="(max-width: 640px) 128px, 144px"
                            className="object-cover"
                            />
                        </div>
                    </div>
                )}

                </div>
            </div>
            ))}
        </div>

        {/* 3. Bottom Action: Explore All in dedicated sub-page */}
        <div className="flex justify-center pt-12">
            <Link
                href="/certifications"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-(--color-border) bg-white hover:bg-(--color-accent) text-(--color-text-primary) hover:text-white font-medium transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
            >
                <span>Explore All Certifications ({certificationsList.length})</span>
                <TbArrowRight className="text-(--color-text-primary) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
        </div>

        {/* Modal Lightbox Zoom via React Portal */}
        {activeCertImage && typeof document !== "undefined" && createPortal(
        <div
            onClick={() => setActiveCertImage(null)}
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            style={{ animation: "fadeIn 0.2s ease" }}
        >
            {/* Kotak Gambar + Tombol X di Atas Kanan */}
            <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-auto flex flex-col items-center justify-center"
            >
            <button
                onClick={() => setActiveCertImage(null)}
                aria-label="Close certificate preview"
                className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors cursor-pointer p-1"
            >   
                <TbX size={28} />
            </button>

            <img
                src={activeCertImage}
                alt="Certificate Preview"
                className="max-h-[82dvh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            </div>
        </div>,
        document.body
        )}


        </section>
    );
}
