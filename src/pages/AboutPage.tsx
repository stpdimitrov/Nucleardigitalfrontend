export default function AboutPage() {
  const htmlContent = `<!doctype html>


<html lang="en" data-redirect-timezone="1">
<head>
    <meta charset="utf-8">
    
    
    <meta name="viewport" content="width=device-width">
    <title>About us | Newclear Digital</title>
    <meta name="description" content="Discover Newclear Digital's mission, vision, and the passionate team driving our commitment to cinematic storytelling and client-focused creativity.">
    <link href="/images/favicon.svg" rel="icon" media="(prefers-color-scheme: light)">
    <link href="/images/favicon.svg" rel="icon" media="(prefers-color-scheme: dark)">

    <meta property="og:type" content="website">
    <meta property="og:title" content="About us | Newclear Digital">
    <meta property="og:description" content="Discover Newclear Digital's mission, vision, and the passionate team driving our commitment to cinematic storytelling and client-focused creativity.">
    <meta property="og:image" content="/images/og-image.png">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="About us | Newclear Digital">
    <meta name="twitter:description" content="Discover Newclear Digital's mission, vision, and the passionate team driving our commitment to cinematic storytelling and client-focused creativity.">
    <meta name="twitter:image" content="/images/og-image.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Display:wght@500;600;700&display=swap" rel="stylesheet">
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap" rel="stylesheet">
    <style>
@font-face { font-family: "Ronzino"; src: url("/fonts/Ronzino-Medium.woff2") format("woff2"); font-style: normal; font-weight: 500; font-display: swap }
@font-face { font-family: "Apfel Grotezk"; src: url("/fonts/ApfelGrotezk-Medium.woff2") format("woff2"); font-style: normal; font-weight: 500; font-display: swap }
@font-face { font-family: "Apfel Grotezk"; src: url("/fonts/ApfelGrotezk-Regular.woff2") format("woff2"); font-style: normal; font-weight: 400; font-display: swap }
    </style>
    
    <meta name="robots" content="max-image-preview:large">
</head>
<body>
    <div dangerouslySetInnerHTML={{ __html: \`[FULL_BODY_HTML]\` }} />
</body>
</html>`;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
