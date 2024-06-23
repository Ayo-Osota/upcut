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
   12, CAC okeisegun street
   Samuel sule, Eleyele
   Ibadan
    </p>


    <a href="tel:+2348011111111" class="mt-10 inline-flex items-center gap-2.5">
    <span class="bg-primary-500 text-base md:text-2xl w-6 md:w-11 aspect-square rounded-full flex items-center justify-center">
     ${IconCall}
     </span>
     <span class="text-base md:text-headlineLarge">
    +2348011111111
    </span>
    </a>
    <a href="mailto:osotaayomikun@gmail.com" class="mt-10 md:mt-16 block text-xl md:text-displaySmall font-bold">
    Hello@Upcut.com
    </a>

    <div class="flex items-center gap-6 md:gap-10 text-4xl md:text-[54px] mt-10 md:mt-16">
    <span>
    ${IconLinkedIn}</span>
    <span>${IconInstagram}</span>
    <span>${IconX}</span>
    </div>
    </article>
    </div>
    </section>
    `;
}