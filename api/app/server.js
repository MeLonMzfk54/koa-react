import app from './app';
import {PORT} from "../config/config";
import ENV, {IS_DEV} from "./utils/env";

// const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`Server running on port ${PORT}`);
});

export default server;

// const user = {name: 'test'};
// const getname = () => {
//   const {name} = user;
//
//   return name;
// };
//
// console.log(`name: ${getname()}`);
