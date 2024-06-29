import { upcutContactInfo } from "../data";
import { IconCall, IconCircleArrow, IconInstagram, IconLinkedIn, IconX } from "../icons";


export function footer() {
    return `
    <section class="pg-container pt-36 pb-44">
    <div class="even-columns items-center">

    <div>
    <h5 class="text-2xl md:text-displayMedium font-bold">Do you have a New Idea?</h5>
    <p class="text-3xl md:text-headlineLarge mt-6">Lets Build it for You at upcut</P>
    <a href="mailto:osotaayomikun@gmail.com" class="inline-flex items-center gap-3.5 mt-6">
    <span class="text-primary-500 text-2xl md:text-[64px]">
     ${IconCircleArrow}
     </span>
    <span class="text-base md:text-headlineLarge font-bold">Get in Touch</span>
    </a>
    </div>

    <article class="max-md:mt-10">
    <p class="text-3xl md:text-displayMedium max-w-[21ch]">
  
    </p>


    <a href="tel:${upcutContactInfo.phone}" class="mt-10 inline-flex items-center gap-2.5">
    <span class="bg-primary-500 text-base md:text-2xl w-6 md:w-11 aspect-square rounded-full flex items-center justify-center">
     ${IconCall}
     </span>
     <span class="text-base md:text-headlineLarge">
    ${upcutContactInfo.phone}
    </span>
    </a>
    <a 
    title="email address" 
    aria-label="email address" 
    href="mailto:${upcutContactInfo.email}" 
    class="mt-10 md:mt-16 block text-xl md:text-displaySmall font-bold">
   ${upcutContactInfo.email}
    </a>

    <div class="flex items-center gap-6 md:gap-10 text-4xl md:text-[54px] mt-10 md:mt-16">
    <a href="${upcutContactInfo.linkedin}" title="linkedIn" aria-label="linkedIn">
    ${IconLinkedIn}</a>
    <a href="${upcutContactInfo.instagram}" title="instagram" aria-label="instagram">${IconInstagram}</a>
    <a href="${upcutContactInfo.x}" title="x" aria-label="x">${IconX}</a>
    </div>
    </article>
    </div>
    </section>
    `;
}