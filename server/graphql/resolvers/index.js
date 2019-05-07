import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Event from "./Event/";

const resolvers = [User, Event];

export default mergeResolvers(resolvers);
