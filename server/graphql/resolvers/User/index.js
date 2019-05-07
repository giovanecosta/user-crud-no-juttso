import User from "../../../models/User";
import Event from "../../../models/Event";

async function registerEvent(type, _author) {
  const newEvent = new Event({ type, _author, time: new Date() });

  return new Promise((resolve, reject) => {
    newEvent.save(( err ) => {
      err ? reject(err) : resolve(newEvent);
    });
  });
}

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          if (err) {
            reject(err);
          } else {
            registerEvent('view', args._id);

            // Users will not have reference for view events for now. Event still have User id;

            resolve(res);
          }
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addUser: (root, { id, name, email, phone, password }) => {
      const newUser = new User({ id, name, email, phone, password });

      return new Promise((resolve, reject) => {
        newUser.save(async (err, res) => {
          if (err) {
            reject(err);
          } else {
            const newEvent = await registerEvent('create', newUser._id);

            newUser.events.push(newEvent);
            newUser.save();

            resolve(res);
          }
        });
      });
    },
    editUser: (root, { _id, name, email, phone, password }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ _id }, { $set: { name, email, phone, password } }).exec(
          async (err, res) => {
            if (err) {
              reject(err);
            } else {
              registerEvent('update', _id);

              // Users will not have reference for update events for now. Event still have User id;
              resolve(res);
            }
          }
        );
      });
    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          if (err) {
            reject(err);
          } else {
            registerEvent('delete', args._id);

            resolve(res);
          }
        });
      });
    }
  }
};
