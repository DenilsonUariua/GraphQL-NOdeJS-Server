import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../typeDefs";
import { resolvers } from "../resolvers";
import express from "express";
import mongoose from "mongoose";



const startServer = async () => {


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});
await mongoose.connect("mongodb+srv://denilson:denilson1@fires.yu5fn.mongodb.net/test?authSource=admin&replicaSet=atlas-vlj6t0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`Server is running on port 
    http://localhost:4000${server.graphqlPath}`);
})
};

startServer();