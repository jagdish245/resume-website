import React from 'react';

const Education = () => {
    const education = [
        {
            degree: "MCA",
            institution: "Nirma University",
            year: "2023–2025",
            score: "CGPA: 8.48 / 10"
        },
        {
            degree: "BCA",
            institution: "GLS University",
            year: "2018–2021",
            score: "CGPA: 8.35 / 10"
        }
    ];

    return (
        <section id="education" className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
            <h3 className="section-title">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <div key={index} className="border border-gray-200 p-6 rounded-lg hover:border-accent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                            <span className="text-sm text-secondary bg-gray-50 px-2 py-1 rounded">{edu.year}</span>
                        </div>
                        <p className="text-accent font-medium mb-2">{edu.institution}</p>
                        <p className="text-secondary text-sm">{edu.score}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
