import { IconCircleArrow } from "../icons";
import emmanPictures from '/eman-pictures.png'

export function servicesSection() {
  return `
    <section class="pg-container py-14 md:pt-40 md:pb-32">
    <div class="even-columns">
    <div>
    <img src="${emmanPictures}" class="logo" alt="Vite logo" />
    </div>
    <article>
    <h6 class="text-sm md:text-headlineSmall text-primary-500">Services</h6>
    <h2 class="text-3xl md:text-displayLarge font-bold max-w-[14ch] mt-3">From Design To Development</h2>
    <p class="text-base md:text-headlineSmall max-w-[28ch] mt-6">Navigating the Journey Together: From Conceptual Design to Precision Development, We Transform Your Ideas into Digital Excellence</p>
    <a href="mailto:osotaayomikun@gmail.com" class="mt-10 inline-flex items-center gap-2.5">
    <span class="text-primary-500 text-[42px]">
     ${IconCircleArrow}
     </span>
    <span>Become a client</span>
    </a>
    </article>
    </div>
    </section>
    `;
}