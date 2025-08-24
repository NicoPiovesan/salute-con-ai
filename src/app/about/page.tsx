import Link from "next/link"
export default function About() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link 
          href="/"
          className="mb-10 text-blue-600 hover:text-blue-800 font-medium transition delay-50 duration-300 ease-in-out hover:-translate-x-3"
        >
          &larr; Ritorna ai paper
        </Link>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Su di Me</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Chi sono?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              *Inserire descrizione*
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Maggiori informazioni sul profilo Linkedin:
            </p>
            <a href="https://www.linkedin.com/in/barbara-camerin-83b3701b/?originalSubdomain=it" className="text-md" target="_blank" ><button role="link" className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px]  after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0">Barbara Camerin</button> </a>
            
            </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/ProPicBC.jpeg"
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover mb-8"
              />
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Barbara Camerin</h3>
              <p className="mt-2 text-lg leading-8 text-gray-600">*Inserire Professione*</p>
            </div>
            
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Research Focus
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  My research focuses on the intersection of artificial intelligence, quantum computing, and sustainable technology solutions for the future.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  Education
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Ph.D. in Computer Science, Stanford University (2015)<br />
                  M.S. in Artificial Intelligence, MIT (2011)<br />
                  B.S. in Computer Engineering, UC Berkeley (2009)
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.5 1.5 0 011.061-.44H18a6 6 0 010 12h-3a1.5 1.5 0 01-1.06-.44l-1.06-1.061a1.5 1.5 0 00-1.061-.44H9a1.5 1.5 0 00-1.06.44L6.939 9.439a1.5 1.5 0 01-1.06.44H3a6 6 0 010-12h3a1.5 1.5 0 011.06.44l1.061 1.06a1.5 1.5 0 001.06.44h4.782a1.5 1.5 0 001.06-.44zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  Publications
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Over 50 peer-reviewed publications in top-tier conferences and journals, with more than 2000 citations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                    </svg>
                  </div>
                  Awards
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  NSF Career Award (2020)<br />
                  Best Paper Award, AAAI Conference (2019)<br />
                  Google Research Scholar (2018)
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
  }