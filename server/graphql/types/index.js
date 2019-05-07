
import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Event from "./Event/";

const typeDefs = [User, Event];

export default mergeTypes(typeDefs, { all: true });
