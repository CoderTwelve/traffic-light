const content = `<body><div style="padding: 1px">12           3</div></body>`;

function replaceWhiteSpace(htmlStr: string): string {
    const q: number[] = [];
    let flag: number = 0;
    const arr: string[] = htmlStr.split("");
    arr.forEach((value, index) => {
        if (value === ">") {
            flag = 1;
        }
        if (value === "<") {
            flag = 0;
        }
        if (flag === 1 && value === " ") {
            q.push(index);
        }
    });
    q.forEach((value) => {
        arr[value] = "&nbsp";
    });
    return arr.join("");
}

export default replaceWhiteSpace(content);
