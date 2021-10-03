export class ListTemplate {
    constructor(list) {
        this.list = list;
    }
    render(warrior, heading, pos) {
        let data;
        data = document.createElement('li');
        let header = document.createElement('h4');
        header.textContent = heading;
        data.appendChild(header);
        let text = document.createElement('p');
        text.textContent = warrior.limitBreak();
        data.appendChild(text);
        if (pos === 'start')
            this.list.prepend(data);
        else
            this.list.append(data);
    }
}
