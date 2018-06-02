const express=require('express');
const expressGraphQL=require('express-graphql');
const app=express();

app.use('/graphql',expressGraphQL({
graphiql:true
}));

app.listen(3000,(err,res)=>{
	if(err){
		console.log('error in listening to server');
	}else{
		console.log('Listening to port');
	}
});