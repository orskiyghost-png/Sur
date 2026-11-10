import { personalInfo } from '../../data/content';

export default function Contact() {
  return (
    <section id="contacts" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-black text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Контакты
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-2">
              Свяжитесь со мной для обсуждения проекта или сотрудничества
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Telegram */}
            <a
              href={personalInfo.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-colors group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                  <svg 
                    className="w-8 h-8 text-black group-hover:text-white transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Telegram</h3>
                  <p className="text-sm text-gray-600">@bigth</p>
                </div>
              </div>
            </a>

            {/* VK */}
            <a
              href={personalInfo.contacts.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-black transition-colors group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                  <svg 
                    className="w-8 h-8 text-black group-hover:text-white transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.492-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.744-.576.744z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">ВКонтакте</h3>
                  <p className="text-sm text-gray-600">vk.com/ase2k</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}