import * as React from 'react';

function LoaderIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 24"
        >
            <circle fill="#172d4c" cx="6" cy="7" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".1" />
            </circle>
            <circle fill="#172d4c" cx="26" cy="7" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".2" />
            </circle>
            <circle fill="#172d4c" cx="46" cy="7" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin=".3" />
            </circle>
        </svg>
    );
}

export default LoaderIcon;
