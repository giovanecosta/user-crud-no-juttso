import Event from "../../../models/Event";

export default {
  Query: {
    event: (root, args) => {
      return new Promise((resolve, reject) => {
        Event.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    events: () => {
      return new Promise((resolve, reject) => {
        Event.aggregate([
          {
            $lookup: {
              from: "users",
              localField: "_author",    // field in the orders collection
              foreignField: "_id",  // field in the items collection
              as: "author"
            }
          },
          {
            $project: {
              type: 1,
              time: 1,
              _author: '$author.name'
            }
          },
          {
            $unwind: { path: "$_author", preserveNullAndEmptyArrays: true }
          },
          {
            $sort: { time: -1 }
          }
        ]).exec((err, res) => {
            console.log(res);
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
};
