import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head>
    {/*<!-- meta -->*/}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description"    content="We build Cloud-based Business Apps that allow merchants to do more, and sell more." />
    <meta name="keywords"       content="Shopify, Apps, Software, technology, business, cloud, serverless" />
    <meta name="author"         content="KlaudSol Apps" />
    <meta property="og:image" content="https://klaudsol.com/assets/img/klaudsol-og-image.png" />
    <meta property="og:url" content="https://klaudsol.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="KlaudSol - Cloud-based Business Apps" />
    <meta property="og:description" content="We build Cloud-based Business Apps that allow merchants to do more, and sell more." />
    <meta property="fb:app_id" content="758280608034823" />
    


    {/*<!-- favicon -->*/}
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/klaudsol-favicon.png" />


    {/*<!-- Plugin Css -->*/}
    <link href="assets/css/plugin.css" rel="stylesheet" />

    {/*<!-- Site css -->*/}
    <link href="assets/css/style.css" rel="stylesheet" />

    {/*<!-- Site css -->*/}
    <link href="assets/css/responsive.css" rel="stylesheet" />


    {/*<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->*/}

  
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument