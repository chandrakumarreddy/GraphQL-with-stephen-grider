const express=require('express');
const expressGraphQL=require('express-graphql');
const schema=require('./schema/schema');
const app=express();

app.use('/graphql',expressGraphQL({
	schema,
	graphiql:true
}));

app.listen(3000,(err,res)=>{
	if(err){
		console.log('error in listening to server');
	}else{
		console.log('Listening to port');
	}
});