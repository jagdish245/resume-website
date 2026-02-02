import React from 'react';

const Skills = () => {
    const skills = [
        "React.js",
        "JavaScript",
        "ASP.NET Core Web API",
        "Express.js",
        "RESTful API Design",
        "Material UI",
        "PostgreSQL",
        "JWT-based Authentication & Authorization",
        "MVC & MVVM Architecture",
        "Git & GitHub",
        "AWS (Foundations)"
    ];

    return (
        <section id="skills" className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
            <h3 className="section-title">Skills</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 text-secondary text-sm font-medium rounded-md border border-gray-200 hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
