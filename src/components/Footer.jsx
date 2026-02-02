import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100 mt-8">
            <p>&copy; {new Date().getFullYear()} Jagdish Prajapati. All rights reserved.</p>
        </footer>
    );
};

export default Footer;