import { LinkItem } from "../interface";
import logo from '/logo.png'

function mapLinks(links: LinkItem[]) {
    return links.map((link) => `
        <li>
            <a href="${link.href}">${link.text}</a>
        </li>
    `).join('');
}


export function navbar(links: LinkItem[]) {
    return `
    <div class="pg-container flex justify-between items-center py-10">
    <img src="${logo}" class="" alt="upcut" />
        <nav class="">
            <div class="container mx-auto px-4">
                <ul class="flex space-x-4">
                    ${mapLinks(links)}
                </ul>
            </div>
        </nav>
        </div>
    `;
}