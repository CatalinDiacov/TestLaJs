
let n = prompt("dati numarul de elevi");
let elevi = [];
    for (let i = 0; i < n; i++) {
        let pivot = new Object();
        pivot.name = prompt("dati numele elevului "+(+i+1));
        pivot.m = prompt("dati numarul de note al elevului elevului "+pivot.name);
        pivot.marks = []
        for (let x = 0; x < pivot.m; x++) {
            pivot2 = prompt("dati nota elevului "+pivot.name);
            pivot.marks.push(+pivot2)
        }
        elevi.push(pivot)
    }
function Function31() {
    for (let j = 0; j < elevi.length; j++) {
        let media = 0
        for (let y = 0; y < elevi[j].m; y++) {
            media += elevi[j].marks[y];
        }
        console.log(elevi[j].name+' media:'+media/elevi.length)
    }
}
function Function32() {
    for (let j = 0; j < elevi.length; j++) {
        let media = 0
        for (let y = 0; y < elevi[j].m; y++) {
            media += elevi[j].marks[y];
        }
        if (media/elevi.length<5){
        console.log(elevi[j].name+' media:'+media/elevi.length)}
    }
}

function Function33() {
    let mediaclasei =0
    let media = 0
    for (let j = 0; j < elevi.length; j++) {

        media = 0
        for (let y = 0; y < elevi[j].m; y++) {
            media += elevi[j].marks[y];
        }
        mediaclasei+=media;
    }
    for (let z = 0; z < elevi.length; z++) {
        media = 0
        for (let k = 0; k < elevi[z].m; k++) {
            media += elevi[z].marks[k];
        }
        if (media>mediaclasei/elevi.length){console.log(elevi[z].name+' media:'+media)}}
}