import { LinkItem } from "../interface";
import logo from '/logo.svg'

function mapLinks(links: LinkItem[]) {
    const currentUrl = window.location.pathname
    return links.map((link) => `
        <li>
            <a href="${link.href}" class="text-headlineSmall hover:font-bold ${link.href === currentUrl ? 'font-bold' : 'font-normal'}">${link.text}</a>
        </li>
    `).join('');
}


export function navbar(links: LinkItem[]) {
    return `
    <div class="pg-container flex justify-between items-center py-6 md:py-10 gap-4">
    <img src="${logo}" class="" alt="upcut" />
        <nav class="max-md:hidden">
            <div class="container mx-auto px-4">
                <ul class="flex space-x-8">
                    ${mapLinks(links)}
                </ul>
            </div>
        </nav>
        </div>
    `;
}