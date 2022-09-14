import {Cat} from './models/Cat'; 

export const resolvers = {
    Query: {
        hello: () => "Hello world! I am here",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (parent, args, context, info) => {
            const cat = new Cat({ name: args.name });
            await cat.save();
            return cat;
        }
    }
};
