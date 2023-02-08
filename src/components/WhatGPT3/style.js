import styled from "styled-components";

export const WhatGptSec = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem;
    background: var(--color-footer);

    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`;
export const WhatGptFeatures = styled.div`
    display: flex;
`;
export const WhatGPTHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 2rem;
    h1 {
        font-size: 34px;
        line-height: 45px;
        font-weight: 800;
        max-width: 510px;
    }
    p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        color: var(--color-subtext);
        cursor: pointer;
    }
`;
export const WhatGPTContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`;