const fliptext = require("flip-text")

exports.textgen = function(query, ctx) {
    if(query == "base64"){
        return Buffer.from(ctx).toString('base64')
    }
    if(query == "flipped"){
        return fliptext(ctx)
    }else{
        throw new ReferenceError(`\"${query}\" itsn't defined`)
    }
}