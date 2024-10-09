import React from 'react';

const candidates = [
  { name: 'Emily Selman', email: 'emily.selman@example.com', date: 'January 7, 2020', status: 'Completed phone screening', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { name: 'Michael Foster', email: 'michael.foster@example.com', date: 'January 7, 2020', status: 'Completed phone screening', img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { name: 'Emma Dorsey', email: 'emma.dorsey@example.com', date: 'January 7, 2020', status: 'Completed phone screening', img: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  // Add more candidates here...
];

const CandidateList: React.FC = () => {
  return (
    <main className="pt-8 pb-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-lg font-medium text-gray-900">Candidates</h2>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Applied</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Phone Screening</a>
                <a href="#" className="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Interview</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Offer</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Disqualified</a>
              </nav>
            </div>
          </div>
        </div>
        <ul role="list" className="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0">
          {candidates.map((candidate, index) => (
            <li key={index}>
              <a href="#" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src={candidate.img} alt={candidate.name} />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-purple-600">{candidate.name}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                          </svg>
                          <span className="truncate">{candidate.email}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on <time dateTime="2020-07-01T15:34:56">{candidate.date}</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                            </svg>
                            {candidate.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0" aria-label="Pagination">
          <div className="-mt-px flex w-0 flex-1">
            <a href="#" className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">
              <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd"></path>
              </svg>
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">1</a>
            <a href="#" className="inline-flex items-center border-t-2 border-purple-500 px-4 pt-4 text-sm font-medium text-purple-600" aria-current="page">2</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">3</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">4</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">5</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">6</a>
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <a href="#" className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">
              Next
              <svg className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}

export default CandidateList;
