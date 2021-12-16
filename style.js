const styleCode = require('./style.json');
export function style(char,Style) {
    
}
export function styleSelector(character){
}

// var a =0
// function style(){
//     b = 0;
//     console.log('\n');
//     for(;b<101;){
//         console.log(`\x1b[0mstart \x1b[${a}mnum is : ${a} end num \x1b[${b}mis : ${b}\x1b[0m`);
//         b++;
//     }
//     a++;
// }

/* ████ console.log color
format \x1b[ <value> m

0 reset
1 fg bright / fg highlight / bold end 22
2 dim
3 italic end 23
4 underline end 24
5-6 fg dim
7 invert end 27
8 hidden end 28
9 strikthrough end 29
10-29 fg dim
30 fg black end 39
31 fg red end 39
32 fg green end 39
33 fg yellow end 39
34 fg blue end 39
35 fg magenta end 39
36 fg cyan end 39
37 fg white end 39
38-39 normal style

40 bg black end 49
41 bg red end 49
42 bg green end 49
43 bg yellow end 49
44 bg blue end 49
45 bg magenta end 49
46 bg cyan end 49
47 bg white end 49
48-89 normal style

90 fg gray end 39
91 fg bright red end 39
92 fg bright green end 39
93 fg bright yellow end 39
94 fg bright blue end 39
95 fg bright magenta end 39
96 fg brught cyan end 39
97 fg bright white end 39
98-99 normal style

100 bg gray end 49
101 bg bright red end 49
102 bg bright green end 49
203 bg bright yellow end 49
104 bg bright blue end 49
105 bg bright magenta end 49
106 bg bright cyan end 49
107 bg bright white end 49
*/