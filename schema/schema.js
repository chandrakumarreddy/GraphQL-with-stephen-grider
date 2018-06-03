import {GraphQLObjectType,GraphQLString,GraphQLInt} from 'graphql';
const users=[{id:123,Firstname:'chandra',age:23},{id:1234,Firstname:'Reddy',age:32}];

const UserType=new GraphQLObjectType({
	name:'User',
	fields:{
		id:{type:GraphQLString},
		Firstname:{type:GraphQLString},
		age:{type:GraphQLInt}
	}
});

const RootQuery=new GraphQLObjectType({
	name:'RootQueryType',
	fields:{
		user:{
			type:UserType,
			args:{id:{type:GraphQLString}},
			resolve(parentValue,args){
				return _.find(users,{id:args.id})
			}
		}
	}
});
module.exports=new GraphQLSchema({
	query:RootQuery
});