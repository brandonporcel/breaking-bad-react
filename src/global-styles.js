import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    :root {
        /* principal #00ffff17 */
        --principal-color: #8db596;
        /* parner-color #685128, #92817A, #707070 */
        --partner-color: #685128;
        --contrast-color: #ffa500;
        --white-color: #fff;
        --black-color: #000;
    }
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-image: url('./img/semicircle.svg');
        background-repeat: no-repeat;
        background-position: left 200px top;
        background-color: var(--principal-color);
        overflow-x: hidden;
    }
    .small-img {
        width: 43px;
        height: 43px;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
