import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Event Management Web Application (MERN Stack)",
            description: [
                "Full-stack event management platform with admin & user roles",
                "Event creation, browsing, ticket booking, and digital ticket generation",
                "REST API integration"
            ],
            link: "https://github.com/jagdish245/Event_Management_backEnd"
        },
        {
            title: "Water Quality Monitoring System (IoT)",
            description: [
                "IoT system using pH, temperature, and turbidity sensors",
                "Cloud integration for data storage, visualization, and trend analysis"
            ],
            link: null
        }
    ];

    return (
        <section id="projects" className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
            <h3 className="section-title">Projects</h3>
            <div className="grid gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <div className="flex items-baseline gap-4">
                            <h4 className="text-xl font-semibold text-primary">{project.title}</h4>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-accent hover:underline flex items-center gap-1"
                                >
                                    GitHub
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            )}
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-1 text-secondary">
                            {project.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
