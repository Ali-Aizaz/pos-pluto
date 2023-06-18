import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="max-h-screen overflow-hidden">
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
