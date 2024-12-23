export { Layout };

import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

function Layout({ children }) {
    return (
        <PageLayout>
            <Sidebar>
                {/* Note: added 'vike-react-boilerplate' just for github nested domain, no need if you deploy on root url  */}
                <a className="navitem" href="vike-react-boilerplate/">
                    Home
                </a>
                <a className="navitem" href="vike-react-boilerplate/about">
                    About
                </a>
            </Sidebar>
            <Content>{children}</Content>
        </PageLayout>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function PageLayout({ children }) {
    return (
        <div
            style={{
                display: 'flex',
                maxWidth: 900,
                margin: 'auto',
            }}
        >
            {children}
        </div>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function Sidebar({ children }) {
    return (
        <div
            style={{
                padding: 20,
                paddingTop: 42,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: '1.8em',
            }}
        >
            {children}
        </div>
    );
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

function Content({ children }) {
    return (
        <div
            style={{
                padding: 20,
                paddingBottom: 50,
                borderLeft: '2px solid #eee',
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};
