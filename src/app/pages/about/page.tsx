"use client";
import Navbar from '@/app/navbar'
import React from 'react'
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
                    style={{ backgroundImage: "url('https://tbcsc.org/files/galleries/Photo-May-09,-12-13-24-PM.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 p-4">
                    <h2 className="text-white text-3xl md:text-5xl font-bold text-center">About Us</h2>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-32 '>
                <h1 className='text-5xl font-bold text-slate-700'>Our Mission</h1>
                <p className='text-xl mt-10 text-slate-500 text-center'>The Mission of The Aparna Public School is to empower our children to achieve their greatest potential both as <br /> students and as members of their communities.</p>
            </div>

            <section className="bg-gray-300 py-12 mt-20 mb-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-slate-700 text-center mb-8">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-20 mt-20">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="text-blue-500 text-5xl mb-4 md:mb-0 md:mr-4">
                                <i className="fas fa-award"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Fostering Academic Excellence</h3>
                                <p>By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="text-blue-500 text-5xl mb-4 md:mb-0 md:mr-4">
                                <i className="fas fa-brain"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Developing Critical Thinkers</h3>
                                <p>By encouraging intellectual curiosity and rewarding independent and creative problem solvers</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="text-blue-500 text-5xl mb-4 md:mb-0 md:mr-4">
                                <i className="fas fa-child"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Nurturing the Whole Child</h3>
                                <p>By creating engaged learners, encouraging honesty and guiding social and emotional development</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="text-blue-500 text-5xl mb-4 md:mb-0 md:mr-4">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Building Partnership</h3>
                                <p>By welcoming our families, staff and members of the wider community to participate in and celebrate the successes of our students</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="text-blue-500 text-5xl mb-4 md:mb-0 md:mr-4">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Ensuring a Safe Environment</h3>
                                <p>By promoting mutual respect in our diverse community of students, teachers and families</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold text-slate-700 text-center mb-8">Our Building</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <img src="https://tbcsc.org/files/_cache/0aaae8507852ede9d8e7d4c1f48a5f8e.png" alt="Students" className="w-full rounded-lg" />
                        </div>
                        <div>
                            <p className="mb-4">
                                In 2023, APS opened in an 1,000 square foot building  with a mission to provide  the best education to the pupils of colliery belt with the association with Aparna Public School.
                            </p>
                            <p className='mb-4'>
                                The School provides education from UKG to Class VI and is affiliated to the Central Board of Secondary Education (CBSE).Set in an exuberant and lush green environment.
                                At Aparna Public School, we offer students contemporary and progressive schooling with utmost priority to high quality education. The school is equipped with state –of- the- art facilities and aims to develop students as ambassadors of positive change who will help to build a better tomorrow. With a balanced blend of curricular, co- curricular activities and community service the teaching learning process is enriched.
                                We want every child to be proficient in academics, technology which is developing rapidly,sociocultural aspects, physically fit and be a class apart. In APARNA PUBLIC SCHOOL we provide an atmosphere which inculcates all sorts of facilities for children to achieve overall  development and doesn't curb to be better than yesterday.
                                All this is made possible under the guidance of effective leadership, efficient & experienced teachers, unparalleled & unbiased counselling and courteous support staff.
                            </p>
                            <p className="mb-4">
                                Over the 2023-24 school year, the existing facility more than doubled in size. As a result of an addition of two floors and the renovation and expansion of two existing floors.
                            </p>
                            <p className="mb-4">
                                Our elementary school building currently offers 9 classrooms, all at least 800 square feet in size and filled with natural light and color, as well as an expanded cafeteria and several new spaces designed for small group learning and administrative offices. We have a gymnasium, a music room and an art studio in our school building and we have recently added a technology lab.
                            </p>
                            <p className="mb-4">
                                In August 2024, we reached capacity as a K-6 school. During the 2024-2025 school year:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page