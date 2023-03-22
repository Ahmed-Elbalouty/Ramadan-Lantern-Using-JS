let i;
let j;
let k;
document.write(`<div class="design">`)
for(i=1 ; i<=21 ;i+=2){
    document.write(`&nbsp;`.repeat(21-i));
    document.write(`*`.repeat(i));
    document.write("<br/>");
}
for(j=1 ; j<=17 ; j+=2){    
    document.write(`*`);
    document.write(`&nbsp;`.repeat((20-j)*2));
    document.write(`*`);
    document.write("<br/>")
    document.write(`&nbsp;`.repeat(j+1));
}
for(k=3 ; k<12 ; k+=2){
    document.write(`*`.repeat(k));
    document.write("<br/>")
    document.write(`&nbsp;`.repeat(j-3));
    j-=2;
}
document.write(`<p style="font-size:22px">Ramadan kareem</p>`)
document.write(`</div>`)