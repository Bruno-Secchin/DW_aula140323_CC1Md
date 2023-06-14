// string exemplo:
var txt = "Hello";
var rstring = "";
function inverterString(txt) {
    // preenche a string invertida, começando pelos últimos caracteres da string de origem:
    for (i = txt.length; i > 0; i--) {
        rstring = rstring + txt[i - 1];
    }
    // exibe a string invertida:
    console.log(rstring);
    return rstring;
}