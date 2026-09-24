import React from 'react';
import Image from 'next/image';
import bannerImage from "@/assets/hero_img.jpg";
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 py-10 md:px-12 md:py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-gray-100 shadow-lg rounded-3xl">
                <div className="space-y-6">
                    <h2 className="font-bold text-4xl md:text-5xl leading-tight">
                        Books to freshen up <br /> your bookshelf
                    </h2>
                    <Link href="/books">
                        <button className="btn btn-primary">View the List</button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={bannerImage}
                        alt="Banner Image"
                        className="rounded-2xl shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;