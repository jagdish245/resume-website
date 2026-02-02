import React from 'react';

const Certifications = () => {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
            <h3 className="section-title">Certification</h3>
            <div className="flex items-start gap-4">
                <div className="bg-green-50 text-green-700 p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-primary">AWS Academy Graduate – AWS Academy Cloud Foundations</h4>
                    <p className="text-secondary text-sm">Oct 2024</p>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
