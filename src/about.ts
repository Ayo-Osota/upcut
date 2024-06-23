import './style.css'
import { navbar } from './components/navbar.ts';
import { navigationLinks } from './data.ts';
import { footer } from './components/footer.ts';
import { mission } from './components/mission.ts';
import { values } from './components/values.ts';


document.querySelector<HTMLDivElement>('#about')!.innerHTML = `
  <div>
    ${navbar(navigationLinks)}
       ${mission()}
       ${values()}
       ${footer()}
  </div>
`
