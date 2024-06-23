import { IconCircleArrow } from "../icons";
import heroImage from '/hero-image.png'

export function heroSection() {
  return `
    <section class="pg-container mt-10.5">
    <h1 class=" text-4xl md:text-displayLarge font-bold max-w-[24ch]">Fueling Innovation in Design and Development</h1>

    <div class="mt-19 grid grid-flow-col justify-between items-center gap-4">
    <span class="text-4xl md:text-[107px] text-secondary-900 rotate-90">
    ${IconCircleArrow}
    </span>
      <img src="${heroImage}" class="logo w-full" alt="Vite logo" />
    </div>
    
    <div class="mt-8 md:mt-20 flex justify-between items-center">
   <span class="opacity-0 invisible">1 Trusted client</span> 
   <h6 class="text-base md:text-displayMedium">Let’s Build Technology</h6>
    </div>
    </section>
    `;
}