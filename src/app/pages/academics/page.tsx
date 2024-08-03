"use client";
import Navbar from '@/app/navbar';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '@/app/footer';

const Page = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="relative h-96 md:h-96 flex items-center justify-center md:mt-10">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://tbcsc.org/files/galleries/fall2011-106-2.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 p-4">
                    <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Academics</h2>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 md:mt-32 px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-700 text-center">Academic Program</h1>
                <p className="text-base md:text-xl mt-6 md:mt-10 text-slate-500 text-center">
                    We believe that a rigorous academic program combined with a supportive social-emotional curriculum leads to scholar success. APS academic program reflects the practices that are associated with high-performing urban schools: more time on task, standards-based instruction, research-based curricula, regular assessments, nightly homework, and horizon-broadening enrichment opportunities.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 md:mt-32 px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6 md:mb-10 text-center">Academic Calendar</h1>
                <img className="w-full max-w-lg md:max-w-3xl" src="https://aparnapublicschool.in/uploads/gallery/media/1687398818-10964511526493a9a27bb2f!calender_page-0001.jpg?1687398879" alt="Academic Calendar" />
            </div>

            <Footer />
        </div>
    );
};

export default Page;
