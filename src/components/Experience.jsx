import React from 'react';

const Experience = () => {
    const jobs = [
        {
            role: "Full Stack Developer",
            company: "Riviera Infraprojects Pvt. Ltd.",
            period: "Jul 2025 – Present",
            description: [
                "Designed, developed, and maintained enterprise-scale web applications using React and .NET Core Web API",
                "Developed and optimized RESTful APIs with complex business logic, validations, and error handling",
                "Worked extensively with PostgreSQL including schema design, joins, indexing, and performance-oriented queries",
                "Implemented dynamic UI components, form validations, conditional rendering, and state management in React",
                "Followed MVC and MVVM patterns to improve maintainability and scalability",
                "Debugged production issues, refactored legacy code, and improved system stability",
                "Participated in code reviews and followed clean coding and version control best practices"
            ]
        },
        {
            role: "Full Stack Developer Intern",
            company: "Riviera Infraprojects Pvt. Ltd.",
            period: "Jan 2025 – Jun 2025",
            description: [
                "Contributed to internal ERP modules in a production environment",
                "Assisted in building frontend screens using React and backend APIs using .NET Core",
                "Worked with PostgreSQL and optimized SQL queries",
                "Handled bug fixes, feature enhancements, and validation logic"
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
            <h3 className="section-title">Work Experience</h3>
            <div className="space-y-12">
                {jobs.map((job, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                            <h4 className="text-xl font-semibold text-primary">{job.role}</h4>
                            <span className="text-sm font-medium text-secondary bg-gray-100 px-3 py-1 rounded-full">{job.period}</span>
                        </div>
                        <p className="text-lg text-accent font-medium mb-4">{job.company}</p>
                        <ul className="list-disc list-outside ml-5 space-y-2 text-secondary">
                            {job.description.map((item, i) => (
                                <li key={i} className="pl-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
