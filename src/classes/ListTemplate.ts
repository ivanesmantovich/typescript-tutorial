import { HasLimitBreak } from "../interfaces/hasLimitBreak";
export class ListTemplate {
    constructor (
        public list: HTMLUListElement = document.querySelector('item-list')!
    ){}
    render(warrior: HasLimitBreak, heading: string, atStart?: boolean) {
        let data: HTMLLIElement
        data = document.createElement('li');
        
        let header:HTMLHeadingElement = document.createElement('h4');
        header.textContent = heading
        data.appendChild(header)

        let text:HTMLParagraphElement = document.createElement('p');
        text.textContent = warrior.limitBreak();
        data.appendChild(text)

        this.list.appendChild(data)
    }
}

