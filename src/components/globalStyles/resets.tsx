import { css } from 'styled-components';

// Added to make sure websites behave the same, regardless of the browser

export default css`
    /*!
    * Bootstrap Reboot v4.3.1 (https://getbootstrap.com/)
    * Copyright 2011-2019 The Bootstrap Authors
    * Copyright 2011-2019 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
    */
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: grubhubsans-bold, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
    }

    hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
    }

    hr:not([size]) {
    height: 1px;
    }

    h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    }

    h1 {
    font-size: 2.5rem;
    }

    h2 {
    font-size: 2rem;
    }

    h3 {
    font-size: 1.75rem;
    }

    h4 {
    font-size: 1.5rem;
    }

    h5 {
    font-size: 1.25rem;
    }

    h6 {
    font-size: 1rem;
    }

    p {
    margin-top: 0;
    margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
    }

    address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
    }

    ol,
    ul {
    padding-left: 2rem;
    }

    ol,
    ul,
    dl {
    margin-top: 0;
    margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
    margin-bottom: 0;
    }

    dt {
    font-weight: 700;
    }

    dd {
    margin-bottom: .5rem;
    margin-left: 0;
    }

    blockquote {
    margin: 0 0 1rem;
    }

    b,
    strong {
    font-weight: bolder;
    }

    small {
    font-size: 80%;
    }

    sub,
    sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
    }

    sub {
    bottom: -.25em;
    }

    sup {
    top: -.5em;
    }

    a {
    color: #007bff;
    text-decoration: none;
    }

    a:hover {
    color: #0056b3;
    text-decoration: underline;
    }

    a:not([href]), a:not([href]):hover {
    color: inherit;
    text-decoration: none;
    }

    pre,
    code,
    kbd,
    samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1em;
    }

    pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 87.5%;
    }

    pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
    }

    code {
    font-size: 87.5%;
    color: #e83e8c;
    word-wrap: break-word;
    }

    a > code {
    color: inherit;
    }

    kbd {
    padding: 0.2rem 0.4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
    }

    kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700;
    }

    figure {
    margin: 0 0 1rem;
    }

    img {
    vertical-align: middle;
    }

    svg {
    overflow: hidden;
    vertical-align: middle;
    }

    table {
    border-collapse: collapse;
    }

    caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
    }

    th {
    text-align: inherit;
    }

    label {
    display: inline-block;
    margin-bottom: 0.5rem;
    }

    button {
    border-radius: 0;
    }

    button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    }

    button,
    input {
    overflow: visible;
    }

    button,
    select {
    text-transform: none;
    }

    select {
    word-wrap: normal;
    }

    [list]::-webkit-calendar-picker-indicator {
    display: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }

    button:not(:disabled),
    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled) {
    cursor: pointer;
    }

    ::-moz-focus-inner {
    padding: 0;
    border-style: none;
    }

    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
    -webkit-appearance: textfield;
    }

    textarea {
    overflow: auto;
    resize: vertical;
    -webkit-appearance: textfield;
    }

    fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    }

    legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
    }

    mark {
    padding: 0.2em;
    background-color: #fcf8e3;
    }

    progress {
    vertical-align: baseline;
    }

    ::-webkit-datetime-edit {
    overflow: visible;
    line-height: 0;
    }

    [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
    }

    ::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
    padding: 0;
    }

    ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
    }

    output {
    display: inline-block;
    }

    summary {
    display: list-item;
    cursor: pointer;
    }

    template {
    display: none;
    }

    main {
    display: block;
    }

    [hidden] {
    display: none !important;
    }
    /*# sourceMappingURL=bootstrap-reboot.css.map */
`;
