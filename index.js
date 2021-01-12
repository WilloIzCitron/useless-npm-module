const fliptext = require("flip-text")

function textToBin(text) {
  var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  } 
  return output.join(" ");
}

exports.textgen = function(query, ctx) {
    if(query == "base64"){
        return Buffer.from(ctx).toString('base64')
    }
    if(query == "hex"){
        return Buffer.from(ctx).toString('hex')
    }
    if(query == "binary"){
        return textToBin(ctx)
    }
    if(query == "flipped"){
        return fliptext(ctx)
    }else{
        throw new ReferenceError(`\"${query}\" itsn't defined`)
    }
}