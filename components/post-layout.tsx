import MDX from "@mdx-js/runtime"
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import CodeBlock from './code-block'

export default function Layout({post}) {
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const components = {
    a: props => <a  rel="noopener" target="_blank" {...props} />,
    pre: props => <div {...props} />,
    code: CodeBlock 
  }
  

  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>{post.title} | BK</title>
        <meta name="title" content={post?.title}></meta>
        <meta name="description" content={post?.excerpt}></meta>

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={post?.slug}></meta>
        <meta property="og:title" content={post?.title}></meta>
        <meta property="og:description" content={post?.excerpt}></meta>
        <meta property="og:image" content={post?.thumbnail}></meta>

        {/* Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content={post?.slug}></meta>
        <meta property="twitter:title" content={post?.title}></meta>
        <meta property="twitter:description" content={post?.excerpt}></meta>
        <meta property="twitter:image" content={post?.thumbnail}></meta>
      </Head>

      <Header />

      <main className="prose dark:prose-dark container w-full max-w-4xl mt-4 lg:mt-8 mb-24 mx-auto px-6 lg:px-0">
        <span className="block border-grey-800 border-b-2 mb-12">
          <span className="text-grey-600 dark:text-grey-400 text-sm mt-2 md:mt-0 mb-1 flex items-center">
            <svg className="mr-4 fill-current inline-block h-4 w-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon-shape"><path className="fill-current" d="M1,3.99508929 C1,2.8932319 1.8926228,2 2.99508929,2 L17.0049107,2 C18.1067681,2 19,2.8926228 19,3.99508929 L19,18.0049107 C19,19.1067681 18.1073772,20 17.0049107,20 L2.99508929,20 C1.8932319,20 1,19.1073772 1,18.0049107 L1,3.99508929 Z M3,6 L17,6 L17,18 L3,18 L3,6 Z M5,0 L7,0 L7,2 L5,2 L5,0 Z M13,0 L15,0 L15,2 L13,2 L13,0 Z M5,9 L7,9 L7,11 L5,11 L5,9 Z M5,13 L7,13 L7,15 L5,15 L5,13 Z M9,9 L11,9 L11,11 L9,11 L9,9 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z M13,9 L15,9 L15,11 L13,11 L13,9 Z M13,13 L15,13 L15,15 L13,15 L13,13 Z" id="Combined-Shape"></path></g></g>
            </svg>
            <time dateTime={post?.date}>
              {(new Date(post?.date)).toLocaleDateString('en-US', dateOptions)}
            </time>
          </span>
          <h2 className="text-grey-200 text-lg capitalize">
            {post?.title}
          </h2>
        </span>
        <MDX components={components}>
          {post.content}
        </MDX>
      </main>
      
      <Footer />
    </>
  )
}
