html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Set every element's box-sizing to border-box */
* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Titillium Web', sans-serif;
}

h1, h2, h3, h4, h5 {
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
    margin-bottom: 10px;
}


.container {
    width: 880px;
    margin: auto;
}

/* Header Styles */

header {
    width: 100%;
    display: flex;
}

header nav ul {
    margin-top: 40px; 
    width: 610px;
    justify-content: space-between;
    display: flex;
}

header nav ul li a {
    text-decoration: none;
    color: #b0b0b0;
}

header nav ul li a:hover {
    text-decoration: underline;
    color: black;
}

header .logo {
    align-self: flex-end;
    margin: 28px 0 0 91px;
}

.cta {
    display: flex;
    margin-top: 72px;
    justify-content: flex-end;
    
    .cta-text {
        font-size: 72px;
        text-align: center;
        letter-spacing: 5px;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        margin: 0 82px 0 0;
        
        button {
            border: 1px double black;
            font-size: 16px;
            background: white;
            width: 170px;
            height: 32px;
            margin-top: 10px;
            cursor: pointer;
        }
        
        button:hover {
            background: black;
            color: white;
        }
    }
}

.main-content {
   border-top: 2px solid black; 
   border-bottom: 2px solid black;
   margin: 75px 0 35px 0;
   padding: 35px 0;
   font-size: 16px;
   line-height: 18px;
   
   .top-content {
        display: flex;
        justify-content: space-around;
    }
    
    .middle-img {
        display: block;
        margin: 30px auto;
    }
    .bottom-content {
        display: flex;
        justify-content: space-around;
        
        p {
            padding-right: 20px;
        }
    }
}

/* Contact Styles */

.contact p {
    margin: 15px 0;
}

/* Footer Styles */

footer {
    text-align: center;
    margin: 40px 0 20px;
}