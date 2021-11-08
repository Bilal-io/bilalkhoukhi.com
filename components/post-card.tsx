import MDX from "@mdx-js/runtime"
import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({post}) {
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <article className="grid sm:grid-cols-3 grid-cols-1 sm:grid-flow-col grid-flow-row gap-4 mb-6 last:mb-0 pb-6 last:pb-0 border-b-2 border-grey-800 last:border-b-0 border-opacity-75">
      <Link href={`/blog/${post?.slug}`}>
        <a className="self-start col-span-1 w-full h-48 xl:w-48 xl:h-32 relative">
          <Image
            alt={post?.title}
            src={post?.thumbnail}
            layout="fill"
            objectFit="cover"
          />
        </a>
      </Link>

      <div className="col-span-2">
        <span className="text-grey-600 dark:text-grey-500 text-sm mt-2 md:mt-0 mb-1 flex items-center">
          <svg className="mr-4 fill-current inline-block h-4 w-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon-shape"><path className="fill-current" d="M1,3.99508929 C1,2.8932319 1.8926228,2 2.99508929,2 L17.0049107,2 C18.1067681,2 19,2.8926228 19,3.99508929 L19,18.0049107 C19,19.1067681 18.1073772,20 17.0049107,20 L2.99508929,20 C1.8932319,20 1,19.1073772 1,18.0049107 L1,3.99508929 Z M3,6 L17,6 L17,18 L3,18 L3,6 Z M5,0 L7,0 L7,2 L5,2 L5,0 Z M13,0 L15,0 L15,2 L13,2 L13,0 Z M5,9 L7,9 L7,11 L5,11 L5,9 Z M5,13 L7,13 L7,15 L5,15 L5,13 Z M9,9 L11,9 L11,11 L9,11 L9,9 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z M13,9 L15,9 L15,11 L13,11 L13,9 Z M13,13 L15,13 L15,15 L13,15 L13,13 Z" id="Combined-Shape"></path></g></g>
          </svg>

          <time dateTime="post?.created_at">
            {(new Date(post?.date)).toLocaleDateString('en-US', dateOptions)}
          </time>
        </span>

        <Link href={`/blog/${post?.slug}`}>
        <a>
          <h3 className="text-lg font-semibold capitalize leading-6 mb-2 text-red-500 dark:hover:text-grey-200 hover:text-grey-800">
            {post?.title}
          </h3>
        </a>
        </Link>
        
        <span className="text-grey-900 dark:text-grey-200 text-sm transition-colors duration-200">
          <MDX>
            {post?.excerpt}
          </MDX>
        </span>
      </div>
    </article>
  )
}
