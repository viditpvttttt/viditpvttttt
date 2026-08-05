<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta
    name="description"
    content="Vidit Sharma — Product Builder exploring AI, software, agents and startups."
  />

  <title>Vidit Sharma — Builder</title>

  <!-- =====================================================
       FONTS
  ====================================================== -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  >


  <!-- =====================================================
       ALL CSS
  ====================================================== -->

  <style>

    /* =====================================================
       RESET
    ====================================================== */

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background: #f3f1ec;
      color: #1d1b18;
      font-family: "Inter", Arial, sans-serif;
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    a {
      -webkit-tap-highlight-color: transparent;
    }


    /* =====================================================
       VARIABLES
    ====================================================== */

    :root {
      --background: #f3f1ec;
      --ink: #1d1b18;
      --muted: #77716a;
      --line: #d5d1c9;
      --accent: #a47762;

      --serif:
        "Instrument Serif",
        Georgia,
        serif;

      --mono:
        "DM Mono",
        monospace;
    }


    /* =====================================================
       NOISE
    ====================================================== */

    .noise {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.035;

      background-image:
        url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"
        );
    }


    /* =====================================================
       LOADER
    ====================================================== */

    .loader {
      position: fixed;
      inset: 0;
      z-index: 10000;

      background: var(--background);

      display: flex;
      align-items: center;
      justify-content: center;

      transition:
        opacity 0.8s ease,
        visibility 0.8s ease;
    }

    .loader.loaded {
      opacity: 0;
      visibility: hidden;
    }

    .loader-inner {
      width: min(500px, calc(100% - 50px));
    }

    .loader-top,
    .loader-bottom {
      display: flex;
      justify-content: space-between;

      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.16em;

      color: var(--muted);
    }

    .loader-progress {
      height: 1px;
      background: var(--line);
      margin: 20px 0;
    }

    .loader-progress-bar {
      height: 100%;
      width: 0%;
      background: var(--ink);
    }


    /* =====================================================
       NAVIGATION
    ====================================================== */

    .navigation {
      position: sticky;
      top: 0;
      z-index: 100;

      height: 60px;

      padding:
        0
        max(
          28px,
          calc((100vw - 1220px) / 2)
        );

      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;

      border-bottom: 1px solid var(--line);

      background:
        rgba(243, 241, 236, 0.92);

      backdrop-filter: blur(14px);
    }

    .logo {
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 0.18em;
    }

    .logo span {
      color: var(--accent);
    }

    .navigation nav {
      display: flex;
      gap: 32px;
    }

    .navigation nav a,
    .nav-github {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.14em;
      color: var(--muted);

      transition: color 0.2s ease;
    }

    .navigation nav a:hover,
    .nav-github:hover {
      color: var(--accent);
    }

    .nav-github {
      justify-self: end;
    }


    /* =====================================================
       TICKER
    ====================================================== */

    .ticker {
      height: 45px;
      overflow: hidden;

      border-bottom: 1px solid var(--line);

      display: flex;
      align-items: center;
    }

    .ticker-track {
      display: flex;
      gap: 27px;
      white-space: nowrap;

      animation:
        ticker 35s linear infinite;

      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.2em;
      color: var(--muted);
    }

    .ticker-track i {
      color: var(--accent);
      font-style: normal;
    }

    @keyframes ticker {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }


    /* =====================================================
       HERO
    ====================================================== */

    .hero {
      min-height: 850px;
      border-bottom: 1px solid var(--line);
    }

    .hero-grid {
      width:
        min(
          1220px,
          calc(100% - 56px)
        );

      min-height: 850px;

      margin: auto;

      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding:
        90px
        50px
        90px
        0;
    }

    .technical-label {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.2em;
      color: var(--muted);
    }

    .hero h1 {
      margin: 32px 0 35px;

      font-family: var(--serif);

      font-size:
        clamp(
          68px,
          7vw,
          112px
        );

      line-height: 0.88;
      font-weight: 400;

      letter-spacing: -0.045em;
    }

    .hero h1 em {
      color: var(--accent);
      font-style: italic;
    }

    .hero-description {
      max-width: 500px;

      color: var(--muted);

      font-size: 16px;
      line-height: 1.75;
    }

    .hero-actions {
      display: flex;
      gap: 10px;
      margin-top: 34px;
    }

    .button {
      min-height: 48px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      gap: 18px;

      padding:
        0
        19px;

      border: 1px solid var(--line);

      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.12em;

      transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
    }

    .button:hover {
      transform: translateY(-3px);
    }

    .button-dark {
      color: var(--background);
      background: var(--ink);
      border-color: var(--ink);
    }

    .hero-meta {
      display: flex;
      gap: 30px;

      margin-top: 60px;

      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.13em;

      color: #918a82;
    }


    /* =====================================================
       HERO 3D
    ====================================================== */

    .hero-visual {
      position: relative;

      min-height: 850px;

      border-left: 1px solid var(--line);
    }

    #hero3d {
      width: 100%;
      height: 100%;
      display: block;

      cursor: grab;
    }

    #hero3d:active {
      cursor: grabbing;
    }

    .visual-label {
      position: absolute;

      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.14em;

      color: var(--muted);

      pointer-events: none;
    }

    .visual-label-top {
      top: 30px;
      left: 30px;
    }

    .visual-label-bottom {
      bottom: 30px;
      right: 30px;
    }

    .visual-coordinates {
      position: absolute;

      right: 30px;
      top: 50%;

      transform: translateY(-50%);

      font-family: var(--mono);
      font-size: 9px;
      line-height: 1.9;

      color: #aaa29a;

      pointer-events: none;
    }


    /* =====================================================
       SECTIONS
    ====================================================== */

    .section {
      width:
        min(
          1220px,
          calc(100% - 56px)
        );

      margin: auto;

      padding:
        130px
        0;

      border-bottom: 1px solid var(--line);
    }

    .section-header {
      display: flex;
      justify-content: space-between;

      margin-bottom: 75px;

      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.22em;

      color: var(--muted);
    }

    .section-header span:first-child {
      color: var(--accent);
    }


    /* =====================================================
       ABOUT
    ====================================================== */

    .about-grid {
      display: grid;

      grid-template-columns: 1fr 1fr;

      gap: 100px;
    }

    .about-heading h2 {
      margin: 0;

      font-family: var(--serif);

      font-size:
        clamp(
          55px,
          6vw,
          92px
        );

      line-height: 0.92;

      font-weight: 400;

      letter-spacing: -0.04em;
    }

    .about-heading em {
      color: var(--accent);
    }

    .about-copy {
      padding-top: 15px;
      max-width: 520px;
    }

    .about-copy p {
      color: var(--muted);

      line-height: 1.8;

      font-size: 15px;

      margin-bottom: 30px;
    }

    .about-copy .large-copy {
      font-family: var(--serif);

      font-size: 31px;

      line-height: 1.2;

      color: var(--ink);
    }

    .about-signature {
      display: flex;
      justify-content: space-between;

      padding-top: 30px;

      border-top: 1px solid var(--line);

      font-family: var(--mono);

      font-size: 9px;

      letter-spacing: 0.15em;

      color: var(--muted);
    }


    /* =====================================================
       FOLIO
    ====================================================== */

    .folio {
      width: 100%;

      padding-left:
        max(
          28px,
          calc((100vw - 1220px) / 2)
        );

      padding-right:
        max(
          28px,
          calc((100vw - 1220px) / 2)
        );
    }

    .folio-intro {
      display: grid;

      grid-template-columns:
        1fr
        1fr;

      align-items: end;

      gap: 80px;
    }

    .folio-intro h2 {
      margin:
        20px
        0
        0;

      font-family: var(--serif);

      font-size:
        clamp(
          120px,
          15vw,
          220px
        );

      font-weight: 400;

      line-height: 0.7;

      letter-spacing: -0.055em;
    }

    .folio-intro h2 span {
      color: var(--accent);
    }

    .folio-description {
      max-width: 500px;
    }

    .folio-description p {
      font-family: var(--serif);

      font-size: 28px;

      line-height: 1.15;
    }

    .project-tags {
      display: flex;
      gap: 8px;

      flex-wrap: wrap;

      margin-top: 30px;
    }

    .project-tags span {
      padding:
        9px
        12px;

      border: 1px solid var(--line);

      font-family: var(--mono);

      font-size: 8px;

      letter-spacing: 0.15em;
    }


    /* =====================================================
       FOLIO 3D
    ====================================================== */

    .folio-system {
      position: relative;

      height: 700px;

      margin-top: 80px;

      border: 1px solid var(--line);

      overflow: hidden;

      background:
        radial-gradient(
          circle at center,
          rgba(
            164,
            119,
            98,
            0.04
          ),
          transparent 60%
        );
    }

    #folio3d {
      width: 100%;
      height: 100%;

      cursor: grab;
    }

    #folio3d:active {
      cursor: grabbing;
    }

    .system-center {
      position: absolute;

      top: 50%;
      left: 50%;

      transform:
        translate(
          -50%,
          -50%
        );

      font-family: var(--mono);

      font-size: 10px;

      letter-spacing: 0.3em;

      color: var(--accent);

      pointer-events: none;
    }

    .system-data {
      position: absolute;

      font-family: var(--mono);

      font-size: 9px;

      letter-spacing: 0.14em;

      color: #938b83;

      pointer-events: none;
    }

    .system-data-1 {
      top: 30px;
      left: 30px;
    }

    .system-data-2 {
      right: 30px;
      top: 30px;
    }

    .system-data-3 {
      bottom: 30px;
      left: 30px;
    }

    .system-instruction {
      position: absolute;

      bottom: 30px;
      right: 30px;

      font-family: var(--mono);

      font-size: 9px;

      letter-spacing: 0.13em;

      color: #aaa29b;

      pointer-events: none;
    }


    /* =====================================================
       SPECIFICATIONS
    ====================================================== */

    .specifications {
      display: grid;

      grid-template-columns:
        repeat(
          3,
          1fr
        );

      border:
        1px solid
        var(--line);

      border-top: none;
    }

    .spec {
      min-height: 250px;

      padding: 28px;

      border-right:
        1px solid
        var(--line);
    }

    .spec:last-child {
      border-right: none;
    }

    .spec-number {
      display: block;

      font-family: var(--mono);

      font-size: 10px;

      color: var(--accent);

      margin-bottom: 45px;
    }

    .spec-title {
      font-family: var(--mono);

      font-size: 11px;

      letter-spacing: 0.15em;
    }

    .spec p {
      margin-top: 20px;

      max-width: 300px;

      color: var(--muted);

      font-size: 13px;

      line-height: 1.7;
    }


    /* =====================================================
       WORK
    ====================================================== */

    .work-list {
      border-top:
        1px solid
        var(--line);
    }

    .work-item {
      min-height: 200px;

      display: grid;

      grid-template-columns:
        70px
        1fr
        140px
        40px;

      gap: 30px;

      align-items: center;

      border-bottom:
        1px solid
        var(--line);

      transition:
        padding 0.3s ease,
        background 0.3s ease;
    }

    .work-item:hover {
      padding:
        0
        20px;

      background:
        rgba(
          164,
          119,
          98,
          0.035
        );
    }

    .work-number {
      font-family: var(--mono);

      font-size: 10px;

      color: var(--accent);
    }

    .work-title {
      display: flex;

      align-items: baseline;

      gap: 20px;
    }

    .work-title h3 {
      margin: 0;

      font-family: var(--serif);

      font-size: 48px;

      font-weight: 400;
    }

    .work-title span,
    .work-status {
      font-family: var(--mono);

      font-size: 8px;

      letter-spacing: 0.15em;

      color: var(--muted);
    }

    .work-main p {
      max-width: 500px;

      color: var(--muted);

      font-size: 13px;

      line-height: 1.6;
    }

    .work-arrow {
      font-size: 20px;

      color: var(--accent);
    }


    /* =====================================================
       STACK
    ====================================================== */

    .stack-layout {
      display: grid;

      grid-template-columns:
        1fr
        1fr;

      gap: 80px;
    }

    .stack-copy h2 {
      margin: 0;

      font-family: var(--serif);

      font-size:
        clamp(
          65px,
          7vw,
          105px
        );

      line-height: 0.88;

      font-weight: 400;
    }

    .stack-copy h2 em {
      color: var(--accent);
    }

    .stack-copy p {
      max-width: 420px;

      margin-top: 40px;

      color: var(--muted);

      line-height: 1.8;
    }

    .stack-visual {
      height: 500px;

      position: relative;

      border:
        1px solid
        var(--line);
    }

    #stack3d {
      width: 100%;
      height: 100%;
    }

    .stack-visual-label {
      position: absolute;

      top: 25px;
      left: 25px;

      font-family: var(--mono);

      font-size: 9px;

      color: var(--muted);

      letter-spacing: 0.15em;

      pointer-events: none;
    }


    /* =====================================================
       TECHNOLOGY GRID
    ====================================================== */

    .technology-grid {
      display: grid;

      grid-template-columns:
        repeat(
          4,
          1fr
        );

      margin-top: 70px;

      border-top:
        1px solid
        var(--line);

      border-left:
        1px solid
        var(--line);
    }

    .technology-grid div {
      padding: 23px;

      border-right:
        1px solid
        var(--line);

      border-bottom:
        1px solid
        var(--line);

      font-family: var(--mono);

      font-size: 10px;

      letter-spacing: 0.16em;
    }


    /* =====================================================
       GITHUB
    ====================================================== */

    .github-layout {
      display: grid;

      grid-template-columns:
        1fr
        1fr;

      gap: 100px;
    }

    .github h2 {
      margin:
        30px
        0
        0;

      font-family: var(--serif);

      font-size:
        clamp(
          70px,
          8vw,
          115px
        );

      line-height: 0.86;

      font-weight: 400;
    }

    .github h2 em {
      color: var(--accent);
    }

    .github-right {
      align-self: end;

      max-width: 400px;
    }

    .github-right p {
      color: var(--muted);

      line-height: 1.8;

      margin-bottom: 35px;
    }


    /* =====================================================
       NOW
    ====================================================== */

    .now-list {
      border-top:
        1px solid
        var(--line);
    }

    .now-item {
      display: grid;

      grid-template-columns:
        180px
        1fr
        1fr;

      align-items: center;

      min-height: 125px;

      border-bottom:
        1px solid
        var(--line);
    }

    .now-item span {
      font-family: var(--mono);

      font-size: 9px;

      letter-spacing: 0.16em;

      color: var(--accent);
    }

    .now-item strong {
      font-family: var(--serif);

      font-size: 38px;

      font-weight: 400;
    }

    .now-item p {
      color: var(--muted);

      font-size: 13px;
    }


    /* =====================================================
       CONTACT
    ====================================================== */

    .contact {
      min-height: 750px;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      text-align: center;

      border-bottom:
        1px solid
        var(--line);
    }

    .contact h2 {
      margin:
        35px
        0
        55px;

      font-family: var(--serif);

      font-size:
        clamp(
          75px,
          10vw,
          145px
        );

      line-height: 0.82;

      font-weight: 400;

      letter-spacing: -0.05em;
    }

    .contact h2 em {
      color: var(--accent);
    }


    /* =====================================================
       FOOTER
    ====================================================== */

    footer {
      min-height: 80px;

      width:
        min(
          1220px,
          calc(100% - 56px)
        );

      margin: auto;

      display: flex;

      justify-content: space-between;

      align-items: center;

      font-family: var(--mono);

      font-size: 9px;

      letter-spacing: 0.13em;

      color: var(--muted);
    }


    /* =====================================================
       REVEAL
    ====================================================== */

    .section,
    .work-item,
    .spec,
    .now-item {
      opacity: 0;

      transform:
        translateY(35px);

      transition:
        opacity 0.8s ease,
        transform 0.8s ease;
    }

    .section.visible,
    .work-item.visible,
    .spec.visible,
    .now-item.visible {
      opacity: 1;

      transform:
        translateY(0);
    }


    /* =====================================================
       TABLET
    ====================================================== */

    @media (max-width: 900px) {

      .navigation {
        grid-template-columns:
          1fr
          auto;
      }

      .navigation nav {
        display: none;
      }

      .hero-grid {
        grid-template-columns:
          1fr;
      }

      .hero-content {
        padding:
          90px
          0
          40px;
      }

      .hero-visual {
        min-height:
          600px;

        border-left:
          none;

        border-top:
          1px solid
          var(--line);
      }

      .about-grid,
      .folio-intro,
      .stack-layout,
      .github-layout {
        grid-template-columns:
          1fr;
      }

      .folio-intro {
        gap: 40px;
      }

      .specifications {
        grid-template-columns:
          1fr;
      }

      .spec {
        border-right: none;

        border-bottom:
          1px solid
          var(--line);
      }

      .spec:last-child {
        border-bottom: none;
      }

      .work-item {
        grid-template-columns:
          50px
          1fr
          30px;
      }

      .work-status {
        display: none;
      }

      .technology-grid {
        grid-template-columns:
          repeat(
            2,
            1fr
          );
      }

      .now-item {
        grid-template-columns:
          130px
          1fr;
      }

      .now-item p {
        grid-column:
          2;
      }
    }


    /* =====================================================
       MOBILE
    ====================================================== */

    @media (max-width: 600px) {

      .navigation {
        padding:
          0
          18px;
      }

      .nav-github {
        display: none;
      }

      .hero-grid,
      .section,
      footer {
        width:
          calc(
            100% - 36px
          );
      }

      .hero {
        min-height:
          auto;
      }

      .hero-grid {
        min-height:
          auto;
      }

      .hero-content {
        padding:
          90px
          0
          50px;
      }

      .hero h1 {
        font-size:
          clamp(
            62px,
            16vw,
            88px
          );
      }

      .hero-description {
        font-size:
          14px;
      }

      .hero-actions {
        flex-direction:
          column;

        align-items:
          stretch;
      }

      .hero-meta {
        flex-wrap:
          wrap;

        gap:
          12px;
      }

      .hero-visual {
        min-height:
          450px;
      }

      .section {
        padding:
          90px
          0;
      }

      .section-header {
        margin-bottom:
          55px;
      }

      .about-grid {
        gap:
          55px;
      }

      .about-heading h2 {
        font-size:
          58px;
      }

      .folio-intro h2 {
        font-size:
          115px;
      }

      .folio-system {
        height:
          500px;
      }

      .work-item {
        min-height:
          180px;

        gap:
          12px;
      }

      .work-title {
        flex-direction:
          column;

        gap:
          5px;
      }

      .work-title h3 {
        font-size:
          38px;
      }

      .work-main p {
        font-size:
          12px;
      }

      .stack-visual {
        height:
          400px;
      }

      .technology-grid {
        margin-top:
          45px;
      }

      .github-layout {
        gap:
          50px;
      }

      .now-item {
        min-height:
          145px;

        grid-template-columns:
          100px
          1fr;
      }

      .now-item strong {
        font-size:
          32px;
      }

      .contact {
        min-height:
          600px;
      }

      .contact h2 {
        font-size:
          70px;
      }

      footer {
        flex-direction:
          column;

        gap:
          15px;

        justify-content:
          center;
      }

    }

  </style>
</head>


<body>

  <!-- =====================================================
       NOISE
  ====================================================== -->

  <div class="noise"></div>


  <!-- =====================================================
       LOADER
  ====================================================== -->

  <div class="loader">

    <div class="loader-inner">

      <div class="loader-top">
        <span>VIDIT SHARMA</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div class="loader-progress">
        <div class="loader-progress-bar"></div>
      </div>

      <div class="loader-bottom">
        <span>INITIALIZING SYSTEM</span>
        <span class="loader-percent">000%</span>
      </div>

    </div>

  </div>


  <!-- =====================================================
       NAVIGATION
  ====================================================== -->

  <header class="navigation">

    <a
      href="#top"
      class="logo"
    >
      VIDIT SHARMA
      <span>/</span>
      01
    </a>

    <nav>

      <a href="#about">ABOUT</a>

      <a href="#folio">FOLIO</a>

      <a href="#work">WORK</a>

      <a href="#stack">STACK</a>

    </nav>

    <a
      href="https://github.com/viditpvttttt"
      target="_blank"
      class="nav-github"
    >
      GITHUB ↗
    </a>

  </header>


  <!-- =====================================================
       TICKER
  ====================================================== -->

  <div class="ticker">

    <div class="ticker-track">

      <span>AI</span>
      <i>✦</i>

      <span>PRODUCT ENGINEERING</span>
      <i>✦</i>

      <span>AI AGENTS</span>
      <i>✦</i>

      <span>SOFTWARE</span>
      <i>✦</i>

      <span>STARTUPS</span>
      <i>✦</i>

      <span>AUTOMATION</span>
      <i>✦</i>

      <span>AI</span>
      <i>✦</i>

      <span>PRODUCT ENGINEERING</span>
      <i>✦</i>

      <span>AI AGENTS</span>
      <i>✦</i>

      <span>SOFTWARE</span>
      <i>✦</i>

      <span>STARTUPS</span>
      <i>✦</i>

      <span>AUTOMATION</span>

    </div>

  </div>


  <!-- =====================================================
       MAIN
  ====================================================== -->

  <main id="top">


    <!-- ===================================================
         HERO
    ==================================================== -->

    <section class="hero">

      <div class="hero-grid">

        <div class="hero-content">

          <div class="technical-label">
            PRODUCT BUILDER · AI · SOFTWARE
          </div>

          <h1>
            Building things
            <br>
            that
            <em>should exist.</em>
          </h1>

          <p class="hero-description">

            I'm Vidit — a builder exploring AI,
            software and products that turn
            ambitious ideas into useful experiences.

          </p>

          <div class="hero-actions">

            <a
              href="#work"
              class="button button-dark"
            >
              VIEW MY WORK
              <span>↗</span>
            </a>

            <a
              href="https://github.com/viditpvttttt"
              target="_blank"
              class="button"
            >
              GITHUB
              <span>↗</span>
            </a>

          </div>

          <div class="hero-meta">

            <span>INDIA</span>

            <span>2026</span>

            <span>BUILDING IN PUBLIC</span>

          </div>

        </div>


        <!-- HERO 3D -->

        <div class="hero-visual">

          <canvas id="hero3d"></canvas>

          <div class="visual-label visual-label-top">
            SYSTEM / 001
          </div>

          <div class="visual-label visual-label-bottom">
            DRAG TO ROTATE
          </div>

          <div class="visual-coordinates">
            X 000.43<br>
            Y 001.27<br>
            Z 002.91
          </div>

        </div>

      </div>

    </section>


    <!-- ===================================================
         ABOUT
    ==================================================== -->

    <section
      id="about"
      class="section about"
    >

      <div class="section-header">

        <span>01</span>

        <span>ABOUT</span>

      </div>


      <div class="about-grid">

        <div class="about-heading">

          <h2>

            Curious
            <br>
            by default.

            <br><br>

            <em>
              Obsessed
              <br>
              with building.
            </em>

          </h2>

        </div>


        <div class="about-copy">

          <p class="large-copy">

            I like taking an idea from a rough
            concept to an interface people can
            actually use.

          </p>

          <p>

            My interests sit around AI,
            modern web products, developer
            experience, automation and startups.

          </p>

          <p>

            I care about the intersection of
            technology and product — especially
            when complicated systems can be
            turned into simple experiences.

          </p>

          <div class="about-signature">

            <span>VIDIT SHARMA</span>

            <span>BUILDER / DEVELOPER</span>

          </div>

        </div>

      </div>

    </section>


    <!-- ===================================================
         FOLIO
    ==================================================== -->

    <section
      id="folio"
      class="section folio"
    >

      <div class="section-header">

        <span>02</span>

        <span>CURRENTLY BUILDING</span>

      </div>


      <div class="folio-intro">

        <div>

          <div class="technical-label">
            FLAGSHIP PROJECT
          </div>

          <h2>
            Folio<span>.</span>
          </h2>

        </div>


        <div class="folio-description">

          <p>

            An AI agent dashboard designed
            to make powerful AI workflows
            easier to discover, manage and use.

          </p>

          <div class="project-tags">

            <span>AI AGENTS</span>

            <span>PRODUCT</span>

            <span>AUTOMATION</span>

            <span>INTERFACE</span>

          </div>

        </div>

      </div>


      <div class="folio-system">

        <canvas id="folio3d"></canvas>

        <div class="system-center">
          FOLIO
        </div>

        <div class="system-data system-data-1">
          AGENT / 001
        </div>

        <div class="system-data system-data-2">
          WORKFLOW / ACTIVE
        </div>

        <div class="system-data system-data-3">
          STATUS / BUILDING
        </div>

        <div class="system-instruction">
          DRAG · ROTATE · EXPLORE
        </div>

      </div>


      <div class="specifications">

        <div class="spec">

          <span class="spec-number">
            01
          </span>

          <span class="spec-title">
            AI-NATIVE
          </span>

          <p>
            Designed around intelligent
            workflows instead of bolting AI
            onto an existing interface.
          </p>

        </div>


        <div class="spec">

          <span class="spec-number">
            02
          </span>

          <span class="spec-title">
            WORKFLOW-FIRST
          </span>

          <p>
            Bringing agents, tools and
            workflows into one focused
            workspace.
          </p>

        </div>


        <div class="spec">

          <span class="spec-number">
            03
          </span>

          <span class="spec-title">
            IN ACTIVE BUILD
          </span>

          <p>
            An evolving product built through
            experimentation and continuous
            iteration.
          </p>

        </div>

      </div>

    </section>


    <!-- ===================================================
         WORK
    ==================================================== -->

    <section
      id="work"
      class="section work"
    >

      <div class="section-header">

        <span>03</span>

        <span>SELECTED WORK</span>

      </div>


      <div class="work-list">


        <article class="work-item">

          <div class="work-number">
            01
          </div>

          <div class="work-main">

            <div class="work-title">

              <h3>
                Folio
              </h3>

              <span>
                AI / PRODUCT
              </span>

            </div>

            <p>
              An AI agent dashboard for
              managing useful AI workflows
              inside one focused environment.
            </p>

          </div>

          <div class="work-status">
            ACTIVE
          </div>

          <div class="work-arrow">
            ↗
          </div>

        </article>


        <article class="work-item">

          <div class="work-number">
            02
          </div>

          <div class="work-main">

            <div class="work-title">

              <h3>
                Experiments
              </h3>

              <span>
                WEB / PROTOTYPING
              </span>

            </div>

            <p>
              Interfaces, prototypes and small
              technical experiments built to
              learn by shipping.
            </p>

          </div>

          <div class="work-status">
            EXPERIMENT
          </div>

          <div class="work-arrow">
            ↗
          </div>

        </article>


        <article class="work-item">

          <div class="work-number">
            03
          </div>

          <div class="work-main">

            <div class="work-title">

              <h3>
                Next Ideas
              </h3>

              <span>
                AI / RESEARCH
              </span>

            </div>

            <p>
              Exploring what comes next in
              AI agents, automation and
              product interfaces.
            </p>

          </div>

          <div class="work-status">
            EXPLORING
          </div>

          <div class="work-arrow">
            ↗
          </div>

        </article>

      </div>

    </section>


    <!-- ===================================================
         STACK
    ==================================================== -->

    <section
      id="stack"
      class="section stack"
    >

      <div class="section-header">

        <span>04</span>

        <span>TOOLS I BUILD WITH</span>

      </div>


      <div class="stack-layout">

        <div class="stack-copy">

          <h2>

            Small stack.
            <br>

            <em>
              A lot to explore.
            </em>

          </h2>

          <p>

            Tools are means, not the identity.
            What matters is what they let me
            build.

          </p>

        </div>


        <div class="stack-visual">

          <canvas id="stack3d"></canvas>

          <span class="stack-visual-label">
            TECHNOLOGY SYSTEM / 004
          </span>

        </div>

      </div>


      <div class="technology-grid">

        <div>REACT</div>
        <div>TYPESCRIPT</div>
        <div>VITE</div>
        <div>TAILWIND</div>
        <div>SUPABASE</div>
        <div>CLOUDFLARE</div>
        <div>GITHUB</div>
        <div>AI</div>

      </div>

    </section>


    <!-- ===================================================
         GITHUB
    ==================================================== -->

    <section class="section github">

      <div class="section-header">

        <span>05</span>

        <span>OPEN SOURCE / EXPERIMENTS</span>

      </div>


      <div class="github-layout">

        <div>

          <div class="technical-label">
            THE CODE IS THE PROOF
          </div>

          <h2>

            See what
            <br>
            I'm actually
            <br>
            <em>shipping.</em>

          </h2>

        </div>


        <div class="github-right">

          <p>

            My GitHub is where experiments,
            prototypes and projects become
            visible.

          </p>

          <a
            href="https://github.com/viditpvttttt"
            target="_blank"
            class="button button-dark"
          >
            OPEN GITHUB ↗
          </a>

        </div>

      </div>

    </section>


    <!-- ===================================================
         CURRENTLY
    ==================================================== -->

    <section class="section now">

      <div class="section-header">

        <span>06</span>

        <span>CURRENTLY</span>

      </div>


      <div class="now-list">

        <div class="now-item">

          <span>
            BUILDING
          </span>

          <strong>
            Folio
          </strong>

          <p>
            AI agent dashboard
          </p>

        </div>


        <div class="now-item">

          <span>
            LEARNING
          </span>

          <strong>
            AI Agents
          </strong>

          <p>
            Intelligent workflows
            and product engineering
          </p>

        </div>


        <div class="now-item">

          <span>
            EXPLORING
          </span>

          <strong>
            Startups
          </strong>

          <p>
            Ideas worth turning
            into products
          </p>

        </div>

      </div>

    </section>


    <!-- ===================================================
         CONTACT
    ==================================================== -->

    <section class="contact">

      <div class="technical-label">
        07 — CONTACT
      </div>

      <h2>

        Have something
        <br>
        worth
        <em>building?</em>

      </h2>

      <a
        href="mailto:vidit1727@gmail.com"
        class="button button-dark"
      >
        GET IN TOUCH ↗
      </a>

    </section>

  </main>


  <!-- =====================================================
       FOOTER
  ====================================================== -->

  <footer>

    <span>
      VIDIT SHARMA · 2026
    </span>

    <span>
      BUILT WITH CURIOSITY
    </span>

    <a
      href="https://github.com/viditpvttttt"
      target="_blank"
    >
      GITHUB ↗
    </a>

  </footer>


  <!-- =====================================================
       THREE.JS
  ====================================================== -->

  <script type="module">

    import * as THREE from
      "https://cdn.jsdelivr.net/npm/three@0.176.0/build/three.module.js";


    /* =====================================================
       COLORS
    ====================================================== */

    const DARK = 0x24211e;

    const ACCENT = 0xa47762;


    /* =====================================================
       CREATE 3D SYSTEM
    ====================================================== */

    function createSystem(canvas, type) {

      const container =
        canvas.parentElement;


      /* ---------------------------------------------------
         SCENE
      --------------------------------------------------- */

      const scene =
        new THREE.Scene();


      /* ---------------------------------------------------
         CAMERA
      --------------------------------------------------- */

      const camera =
        new THREE.PerspectiveCamera(
          35,
          container.clientWidth /
          container.clientHeight,
          0.1,
          100
        );


      camera.position.z = 7;


      /* ---------------------------------------------------
         RENDERER
      --------------------------------------------------- */

      const renderer =
        new THREE.WebGLRenderer({

          canvas,

          alpha: true,

          antialias: true

        });


      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );


      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );


      renderer.outputColorSpace =
        THREE.SRGBColorSpace;


      /* ---------------------------------------------------
         MAIN GROUP
      --------------------------------------------------- */

      const group =
        new THREE.Group();


      scene.add(group);


      /* ---------------------------------------------------
         MATERIALS
      --------------------------------------------------- */

      const wireMaterial =
        new THREE.MeshBasicMaterial({

          color: DARK,

          wireframe: true,

          transparent: true,

          opacity: 0.18

        });


      const accentMaterial =
        new THREE.MeshBasicMaterial({

          color: ACCENT,

          wireframe: true,

          transparent: true,

          opacity: 0.55

        });


      const solidMaterial =
        new THREE.MeshBasicMaterial({

          color: DARK

        });


      /* ===================================================
         HERO
      ================================================== */

      if (type === "hero") {

        const outer =
          new THREE.Mesh(

            new THREE.IcosahedronGeometry(
              2.1,
              2
            ),

            wireMaterial

          );


        group.add(outer);


        const inner =
          new THREE.Mesh(

            new THREE.IcosahedronGeometry(
              1.25,
              1
            ),

            accentMaterial

          );


        group.add(inner);


        /* ORBIT RINGS */

        for (
          let i = 0;
          i < 3;
          i++
        ) {

          const ring =
            new THREE.Mesh(

              new THREE.TorusGeometry(
                2.45 + i * 0.25,
                0.008,
                8,
                128
              ),

              accentMaterial

            );


          ring.rotation.x =
            Math.PI /
            (2 + i * 0.5);


          ring.rotation.z =
            i * 0.5;


          group.add(ring);

        }


        /* PARTICLES */

        for (
          let i = 0;
          i < 35;
          i++
        ) {

          const point =
            new THREE.Mesh(

              new THREE.SphereGeometry(
                0.025,
                8,
                8
              ),

              solidMaterial

            );


          const direction =
            new THREE.Vector3()
              .randomDirection()
              .multiplyScalar(
                1.5 +
                Math.random()
              );


          point.position.copy(
            direction
          );


          group.add(point);

        }

      }


      /* ===================================================
         FOLIO
      ================================================== */

      if (type === "folio") {

        /* LAYERS */

        for (
          let i = 0;
          i < 7;
          i++
        ) {

          const panel =
            new THREE.Mesh(

              new THREE.BoxGeometry(
                3.1,
                0.12,
                2.0
              ),

              i === 3
                ? accentMaterial
                : wireMaterial

            );


          panel.position.y =
            (i - 3) * 0.48;


          panel.rotation.z =
            (i - 3) * 0.035;


          group.add(panel);

        }


        /* CENTRAL CORE */

        const core =
          new THREE.Mesh(

            new THREE.IcosahedronGeometry(
              0.65,
              2
            ),

            accentMaterial

          );


        group.add(core);


        /* CONNECTIONS */

        for (
          let i = 0;
          i < 10;
          i++
        ) {

          const angle =
            Math.PI *
            2 *
            (i / 10);


          const start =
            new THREE.Vector3(
              Math.cos(angle) * 2,
              Math.sin(angle) * 1.5,
              0
            );


          const end =
            new THREE.Vector3(
              0,
              0,
              0
            );


          const geometry =
            new THREE.BufferGeometry()
              .setFromPoints([
                start,
                end
              ]);


          const line =
            new THREE.Line(

              geometry,

              new THREE.LineBasicMaterial({

                color: ACCENT,

                transparent: true,

                opacity: 0.25

              })

            );


          group.add(line);

        }

      }


      /* ===================================================
         STACK
      ================================================== */

      if (type === "stack") {

        const center =
          new THREE.Mesh(

            new THREE.IcosahedronGeometry(
              0.8,
              2
            ),

            wireMaterial

          );


        group.add(center);


        const technologies = 12;


        for (
          let i = 0;
          i < technologies;
          i++
        ) {

          const angle =
            (i / technologies) *
            Math.PI *
            2;


          const radius = 1.8;


          const point =
            new THREE.Mesh(

              new THREE.SphereGeometry(
                0.075,
                12,
                12
              ),

              i % 3 === 0
                ? accentMaterial
                : solidMaterial

            );


          point.position.set(

            Math.cos(angle) *
              radius,

            Math.sin(angle) *
              radius,

            Math.sin(angle * 2) *
              0.35

          );


          group.add(point);


          const lineGeometry =
            new THREE.BufferGeometry()
              .setFromPoints([

                new THREE.Vector3(
                  0,
                  0,
                  0
                ),

                point.position

              ]);


          const line =
            new THREE.Line(

              lineGeometry,

              new THREE.LineBasicMaterial({

                color: DARK,

                transparent: true,

                opacity: 0.12

              })

            );


          group.add(line);

        }

      }


      /* ===================================================
         DRAG INTERACTION
      ================================================== */

      let dragging = false;

      let previousX = 0;
      let previousY = 0;

      let targetRotationX = 0;
      let targetRotationY = 0;


      container.addEventListener(
        "pointerdown",
        event => {

          dragging = true;

          previousX =
            event.clientX;

          previousY =
            event.clientY;

          container.setPointerCapture(
            event.pointerId
          );

        }
      );


      container.addEventListener(
        "pointerup",
        () => {

          dragging = false;

        }
      );


      container.addEventListener(
        "pointercancel",
        () => {

          dragging = false;

        }
      );


      container.addEventListener(
        "pointermove",
        event => {

          if (!dragging) {
            return;
          }


          const deltaX =
            event.clientX -
            previousX;


          const deltaY =
            event.clientY -
            previousY;


          targetRotationY +=
            deltaX * 0.008;


          targetRotationX +=
            deltaY * 0.008;


          previousX =
            event.clientX;


          previousY =
            event.clientY;

        }
      );


      /* ===================================================
         RESIZE
      ================================================== */

      function resize() {

        const width =
          container.clientWidth;


        const height =
          container.clientHeight;


        camera.aspect =
          width / height;


        camera.updateProjectionMatrix();


        renderer.setSize(
          width,
          height
        );

      }


      window.addEventListener(
        "resize",
        resize
      );


      /* ===================================================
         ANIMATION
      ================================================== */

      function animate() {

        requestAnimationFrame(
          animate
        );


        if (!dragging) {

          targetRotationY +=
            0.0018;

        }


        group.rotation.y +=
          (
            targetRotationY -
            group.rotation.y
          ) * 0.05;


        group.rotation.x +=
          (
            targetRotationX -
            group.rotation.x
          ) * 0.05;


        group.position.y =
          Math.sin(
            performance.now() *
            0.0007
          ) * 0.04;


        renderer.render(
          scene,
          camera
        );

      }


      animate();

    }


    /* =====================================================
       INITIALIZE ALL 3D SYSTEMS
    ====================================================== */

    createSystem(
      document.querySelector("#hero3d"),
      "hero"
    );


    createSystem(
      document.querySelector("#folio3d"),
      "folio"
    );


    createSystem(
      document.querySelector("#stack3d"),
      "stack"
    );


    /* =====================================================
       LOADER
    ====================================================== */

    const loader =
      document.querySelector(".loader");


    const progress =
      document.querySelector(
        ".loader-progress-bar"
      );


    const percent =
      document.querySelector(
        ".loader-percent"
      );


    let loading = 0;


    const interval =
      setInterval(() => {

        loading +=
          Math.random() * 8;


        if (loading >= 100) {

          loading = 100;

          clearInterval(
            interval
          );


          setTimeout(() => {

            loader.classList.add(
              "loaded"
            );

          }, 350);

        }


        progress.style.width =
          loading + "%";


        percent.textContent =
          Math.floor(loading)
            .toString()
            .padStart(
              3,
              "0"
            ) +
          "%";

      }, 60);

  </script>


  <!-- =====================================================
       PAGE INTERACTIONS
  ====================================================== -->

  <script>

    /* =====================================================
       SCROLL REVEALS
    ====================================================== */

    const revealElements =
      document.querySelectorAll(
        ".section, .work-item, .spec, .now-item"
      );


    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

              }

            }
          );

        },

        {
          threshold: 0.12
        }

      );


    revealElements.forEach(
      element => {

        observer.observe(
          element
        );

      }
    );


    /* =====================================================
       WORK HOVER
    ====================================================== */

    document
      .querySelectorAll(".work-item")
      .forEach(item => {

        item.addEventListener(
          "mouseenter",
          () => {

            item.classList.add(
              "hovered"
            );

          }
        );


        item.addEventListener(
          "mouseleave",
          () => {

            item.classList.remove(
              "hovered"
            );

          }
        );

      });

  </script>

</body>
</html>
