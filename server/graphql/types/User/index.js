export default `
  type User {
    id: String!
    name: String!
    email: String!
    phone: String
    password: String!
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(name: String!, email: String!, phone: String!, password: String!): User
    editUser(id: String, name: String, email: String, phone: String, password: String): User
    deleteUser(id: String, name: String, email: String): User
  }
`;
