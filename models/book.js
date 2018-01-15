var mongoose=require('mongoose');

//genres schema
var bookSchema=mongoose.Schema({
    name:{
        type: String,
        require: true
    },
	genre:{
        type: String,
        require: true
	},
	description:{
    	type:String
	},
    create_date:{
        type : Date,
        default : Date.now
    }

});
var Book =module.exports=mongoose.model('Book',bookSchema);

//get genres
module.exports.getBookById=function(id,callback){
    Book.findById(id,callback);

}
module.exports.getBooks=function(callback,limit){
    Book.find(callback).limit(limit);

}