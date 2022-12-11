import * as React from 'react';

function LoaderIcon(props) {
    return (
        // <svg xmlns="http://www.w3.org/2000/svg"
        //      viewBox="0 0 100 100" height="100%" width="100%">
        //     <path
        //         fill="#7a8292"
        //         d="M67.227 65.239c8.415-9.512 7.524-24.052-1.988-32.466s-24.052-7.524-32.466 1.988m2.921 2.584c6.957-7.865 19.022-8.674 26.961-1.651s8.608 19.096 1.651 26.961">
        //         <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
        //                           to="360 50 50"
        //                           repeatCount="indefinite">
        //         </animateTransform>
        //     </path>
        // </svg>
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
