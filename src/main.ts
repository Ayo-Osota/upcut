import './style.css'
import { navbar } from './components/navbar.ts';
import { navigationLinks } from './data.ts';
import { heroSection } from './components/heroSection.ts';
import { servicesSection } from './components/services.ts';
import { homeContent } from './components/homeContent.ts';
import { footer } from './components/footer.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="">
    ${navbar(navigationLinks)}
    ${heroSection()}
    ${servicesSection()}
    ${homeContent()}
    ${footer()}
  </div>
`

