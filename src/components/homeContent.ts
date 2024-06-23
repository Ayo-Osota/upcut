import { IconCircleArrow } from "../icons";
import upcutTeam from '/upcut-team-working.png'

export function homeContent() {
    return `
    <section class="pg-container mt-16">
    <h2 class="text-2xl md:text-displayLarge font-bold">Transforming Visions into Tech Brilliance, Unleash Possibilities with Upcut</h2>
    <div class="even-columns items-center mt-10 md:mt-22">
    <article>
    <p class="text-base md:text-headlineSmall max-w-[32ch] mt-6">
    In our world of innovation, we create, design, and develop digital solutions. We empower businesses to embrace cutting-edge digital experiences, allowing them to focus on achieving measurable success.
    </p>
    <a href="mailto:osotaayomikun@gmail.com" class="mt-10 inline-flex items-center gap-2.5">
    <span class="text-primary-500 text-[42px]">
     ${IconCircleArrow}
     </span>
    <span>Learn More</span>
    </a>
    </article>
     <div class="max-w-fit md:justify-self-end">
    <img src="${upcutTeam}" class="logo" alt="Vite logo" />
    </div>
    </div>
    </section>
    `;
}