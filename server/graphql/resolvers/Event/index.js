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
        Event.find({})
          .populate('user', 'name')
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
};
