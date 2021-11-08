import Layout from '../components/page-layout'

export default function About() {
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
    },
  ]

  const tech = ["Javascript", "Nodejs", "Typescript", ".Net", "C#", "Angular", "React", "GraphQL", "HTML", "CSS", "SCSS", "SQL", "PostgreSQL", "ORM", "Express", "Linux", "Bash", "Python", "Serverless", "Knative", "Docker", "Kubernetes"]
  return (
    <Layout title="About BK">
      <header className="mb-8">
        {/* <!-- Page header --> */}
        <h1 className="mb-1 text-4xl">Hi, this is Bilal</h1>
        {/* <!-- Page sub-header --> */}
        <p className="text-lg">Senior Software Engineer @ Brainshark, located in HTX</p>
      </header>

      {/* <!-- WHo I am section --> */}
      <section className="mb-8">
        <h3 className="mb-4 text-xl font-bold">WHAT I DO</h3>
        <div className="">
          <p className="mb-2">Professionally I use different tools to build different products. At home, I enjoy making espresso while failing to do basic latte art. I run Kubernetes on my homelab, it gives me the opportunity to expose myself to the world of k8s while I deploy apps I build as prototypes to solve specific problems, for fun or to learn something new.</p>
        </div>
      </section>

      {/* <!-- List of technologies I use --> */}
      <section className="mb-8">
        <h3 className="mb-4 text-xl font-bold">WHAT I USE</h3>
        <div className="flex flex-wrap">
          {
            tech.map(t => {
              return (
                <span key={t} className="bg-grey-900 text-grey-100 dark:bg-grey-100 dark:text-grey-900 transition-colors duration-500 rounded-sm text-base px-3 py-1 mr-3 mb-3">{t}</span>
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}
