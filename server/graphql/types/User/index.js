export default `
  type User {
    _id: String!
    name: String!
    email: String!
    phone: String
    password: String!
  }
  type Query {
    user(_id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(name: String!, email: String!, phone: String!, password: String!): User
    editUser(_id: String, name: String, email: String, phone: String, password: String): User
    deleteUser(_id: String, name: String, email: String): User
  }
`;
