export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        owner: () => {
            return {
                name: "Sergey",
                age: 25
            }
        }
    },
};