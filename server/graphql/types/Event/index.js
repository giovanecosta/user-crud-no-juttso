export default `
  type Event {
    _id: String!
    _author: String!
    time: String!
    type: String!
  }
  type Query {
    event(_author: String!): [Event]
    events: [Event]
  }
`;
