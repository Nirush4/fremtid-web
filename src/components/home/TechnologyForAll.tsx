import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function TechnologyForAll() {
  const { t } = useLanguage();

  return (
    <section className='px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24 max-w-7xl'>
      <div className='grid items-center gap-3 lg:grid-cols-12 lg:gap-16'>
        {/* Visual / Illustration Column - Positioned first on mobile, or can switch order */}
        <div className='flex justify-center lg:col-span-5 lg:order-2'>
          <div className='w-full max-w-md  flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]'>
            <img
              src='/image/techForAll.svg'
              alt=''
              aria-hidden='true'
              className='object-contain w-4/5 h-auto sm:max-h-full'
            />
          </div>
        </div>

        {/* Content Column */}
        <div className='lg:col-span-7 lg:order-1'>
          <div className='inline-block mb-4'>
            <span className='inline-flex items-center text-xs font-bold uppercase tracking-wider text-dark-chocolate bg-[#FAEDCD] px-3.5 py-1.5 rounded-full border border-cappuccino/20'>
              {t.home.techForAll?.tag || 'For små og mellomstore bedrifter'}
            </span>
          </div>

          <h2 className='text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-dark-chocolate text-balance'>
            {t.home.techForAll?.title || 'Teknologi tilgjengelig for alle'}
          </h2>

          <div className='mt-6 space-y-4 text-base font-normal leading-relaxed sm:text-lg text-dark-chocolate/90'>
            <p>
              {t.home.techForAll?.description1 ||
                'Fremtid Web ble startet med én klar visjon: å senke terskelen for små og mellomstore bedrifter som ønsker moderne og profesjonelle nettsider, uavhengig av bedriftens størrelse.'}
            </p>
            <p>
              {t.home.techForAll?.description2 ||
                'Gode digitale løsninger skal ikke være forbeholdt aktører med store budsjetter. Vi leverer fleksible pakker skreddersydd for lokale aktører og tjenesteytere med full kvalitet og transparente priser.'}
            </p>
            <p className='font-medium text-dark-chocolate'>
              {t.home.techForAll?.description3 ||
                'Enten du driver kafé, frisørsalong, konsulentvirksomhet eller et lokalt foretak – vi hjelper deg å bli synlig og ta del i den digitale hverdagen.'}
            </p>
          </div>

          <div className='flex flex-col items-stretch mt-8 sm:mt-10 sm:flex-row sm:items-center'>
            <Link
              to='/services'
              className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-200 shadow-md rounded-xl min-h-[48px] bg-terra-cotta text-dark-chocolate hover:bg-dark-chocolate hover:text-surface focus:outline-none focus:ring-2 focus:ring-dark-chocolate focus:ring-offset-2 text-center'
            >
              {t.home.heroCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
