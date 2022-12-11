import * as React from 'react';

function LoaderIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100" height="100%" width="100%">
            <path
                fill="#e4e4e4"
                d="M67.227 65.239c8.415-9.512 7.524-24.052-1.988-32.466s-24.052-7.524-32.466 1.988m2.921 2.584c6.957-7.865 19.022-8.674 26.961-1.651s8.608 19.096 1.651 26.961">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                                  to="360 50 50"
                                  repeatCount="indefinite">
                </animateTransform>
            </path>
        </svg>
    );
}

export default LoaderIcon;
