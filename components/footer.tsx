export default function Footer() {
  
  const profileLinks = [
    {
      link: 'https://github.com/Bilal-io',
      name: 'Github'
    },
    {
      link: 'https://twitter.com/imbk_dev',
      name: 'Twitter'
    },
    {
      link: 'https://www.linkedin.com/in/mrkhoukhi/',
      name: 'LinkedIn'
    }
  ]

  return (
    <footer className="container w-full max-w-4xl border-grey-800 border-t-2 pt-4 pb-4">
      <div className="flex flex-wrap justify-center">
          {
            profileLinks.map(profile => {
              return (
                <a key={profile.name} className="text-red-500 hover:text-white font-semibold hover:bg-red-500 uppercase mr-8 p-2 last:m-0"
                  rel="noopener" href={profile.link} target="_blank">{profile.name}</a>
              )
            })
          }
          <span className="text-red-500 hover:text-white font-semibold hover:bg-red-500 uppercase mr-8 p-2 last:m-0"><span>hello</span> at <span>bilalkhoukhi.com</span></span>
      </div>

      <p className="text-center mt-4">
        Made with Next.js - 
        <a className="hover:text-white font-semibold hover:bg-red-500 uppercase mr-8 p-2 last:m-0" rel="noopener" href="https://github.com/Bilal-io/bilalkhoukhi.com" target="_blank">
          Source Code on Github
        </a>
      </p>
    </footer>
  )
}
