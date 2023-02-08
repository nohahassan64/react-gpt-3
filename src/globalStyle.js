import styled , {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
        scroll-behavior: smooth;
    }
    html , body {
        overflow-x: hidden;
    }
    :root {
        --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
        --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);

        --color-bg: #040C18;
        --color-footer : #031B34;
        --color-blog: #042c54;
        --color-text: #81AFDD;
        --color-subtext: #FF8A71;
    }
    body {
        background: var(--color-bg);
    }

    a {
        color: unset;
        text-decoration: none;
    }
    .gradient__text {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section__padding {
        padding: 4rem 6rem;
    }

    .section__margin {
        margin: 4rem 6rem;
    }

    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @-webkit-keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }

    @keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }

    @media screen and (max-width: 700px) {
    .section__padding {
        padding: 4rem;
    }

    .section__margin {
        margin: 4rem;
    }
    }

    @media screen and (max-width: 550px) {
    .section__padding {
        padding: 4rem 2rem;
    }

    .section__margin {
        margin: 4rem 2rem;
    }  
    }
`;
export const GradientBg = styled.div`
    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 3% 25%, rgba(4, 12, 24, 1) 0%, rgba(0, 188, 212, 1) 100%, rgba(4, 12, 24, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 3% 25%, rgba(4, 12, 24, 1) 0%, rgba(0, 188, 212, 1) 100%, rgba(4, 12, 24, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 3% 25%, rgba(4, 12, 24, 1) 0%, rgba(0, 188, 212, 1) 100%, rgba(4, 12, 24, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 3% 25%, rgba(4, 12, 24, 1) 0%, rgba(0, 188, 212, 1) 100%, rgba(4, 12, 24, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 3% 25%, rgba(4, 12, 24, 1) 0%, rgba(0, 188, 212, 1) 100%, rgba(4, 12, 24, 1) 100%);
`;