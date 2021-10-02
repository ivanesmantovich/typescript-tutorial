export class ListTemplate {
    constructor(list = document.querySelector('.item-list')) {
        this.list = list;
    }
    render(warrior, heading, atStart) {
        let data;
        data = document.createElement('li');
        let header = document.createElement('h4');
        header.textContent = heading;
        data.appendChild(header);
        let text = document.createElement('p');
        text.textContent = warrior.limitBreak();
        data.appendChild(text);
        this.list.appendChild(data);
    }
}
