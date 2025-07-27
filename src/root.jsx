import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import PropTypes from 'prop-types';

export function Root({ children }) {
    return (
        <>
            <Analytics /> 
            <SpeedInsights />
            {children}
        </>
    );
}

Root.propTypes = {
    children: PropTypes.node.isRequired,
};
