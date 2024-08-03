"use client";
import Footer from '@/app/footer';
import Navbar from '@/app/navbar';
import React from 'react';

const Page: React.FC = () => {
    return (
        <>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Online Admission</h2>
                    <div className="flex justify-center md:justify-end mt-4 space-x-4 mb-10">
                        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                            Download Application Form
                        </button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Instructions</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="text-xl md:text-2xl font-semibold mb-2">General Instruction for Admission:</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                                <li>We recommend that you use Chrome or Mozilla Firefox browser for filling this form.</li>
                                <li>Filling up this form does not guarantee admission of your child.</li>
                                <li>The form comprises 5 stages, i.e. Student Details, Parent Details, Communication Details, Documents Uploading & Payment.</li>
                                <li>You would be required to upload certain documents in the Documents stage. Kindly have soft copies of the following documents ready before starting to fill the form.</li>
                                <li>Document require for Applicant are Passport size picture, Birth certificate, Transfer certificate & Report card.</li>
                                <li>Document require for Parent are Passport size picture, PAN card and Aadhaar Card.</li>
                                <li>All document file sizes should be less than 1 MB. All document file types should be in PDF / JPEG / JPG format except applicant and parents passport size photo file type should be JPEG / JPG only.</li>
                                <li>All required documents should be applicable for all classes except (Transfer Certificate, Marksheet and Report card) which is needed for below class 1 applicants.</li>
                                <li>Birth Certificate issued by Municipal Corporation or issued by Govt. Hospital shall be accepted.</li>
                                <li>Please upload the latest passport size, coloured photographs of the student, parents or guardian (if applicable).</li>
                                <li>Date of assessment / observation / interaction / interview will be notified via E-mail / SMS.</li>
                                <li>The assessment shall take place on the intimated date for students seeking admission to Class 1 onwards.</li>
                                <li>For admission to Nursery, UKG & LKG, the teacher only observes / interacts with the child along with the parents. Both the parents must accompany the child.</li>
                                <li>You would need access to Debit / Credit Card, Net Banking, etc. to make payment online.</li>
                                <li>An acknowledgement E-mail will be generated on successful payment, with details filled in by you and a “Registration No” corresponding to the Applicant will also be generated, which is to be used for any further communication with the school.</li>
                                <li>Once you have received the intimation for your child’s admission, the full fees have to be paid within the deadline given by the school. If you fail to make the payment of the full fee within the stipulated time frame, the seat will be given to another deserving candidate without giving any intimation / notice to you.</li>
                                <li>The intimation for confirmed admission will be sent via E-mail / SMS.</li>
                                <li>The Admission Fee Payment Link will be sent to you via E-mail / SMS to PAY FEE ONLINE.</li>
                                <li>Admission is strictly as per the policy formulated based on MERIT.</li>
                                <li>All the decisions taken by the management concerning admissions will be final, binding and indisputable.</li>
                                <li>The applicants should strictly adhere to the age norms set by the school.</li>
                                <li>The application form should be submitted before the scheduled date / time. Late submission of the application form will not be accepted / considered. Incomplete forms will not be accepted / considered.</li>
                                <li>Parents seeking to exercise any form of influence including a recommendation by or through any person including any agents or persons, styling themselves as management representatives for securing admissions will be disqualified.</li>
                                <li>The school does not encourage any agents or management representatives for securing admissions. Please beware of any impostors. Dealings with such people posing as agents / management representatives will be at your own risk and will not be binding on the school / management.</li>
                                <li>In case, any information / particular furnished in the admission form for seeking admission to the school is found to be incorrect or misleading, the management reserves the right to cancel the admission, even after admission is granted.</li>
                                <li>Parent should carefully read about the pedagogy, values and regulations of the school before taking admission.</li>
                                <li>Acceptance of guidelines, submission of online form and payment of admission fee will be construed as acceptance of all instructions / rules / regulations / policies and information and that you unconditionally agree to abide by the same throughout the tenure of your child in the school.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Page;
