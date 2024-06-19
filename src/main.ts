import './style.css'
import { navbar } from './components/navbar.ts';
import { navigationLinks } from './data.ts';
import { heroSection } from './components/heroSection.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="">
    ${navbar(navigationLinks)}
    ${heroSection()}
  </div>
`

