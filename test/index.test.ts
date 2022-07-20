import { connection } from "mongoose";
import { server } from "../src";

it('server works', (done) => {
  connection.on('connected', async () => {
    await connection.close();
    server.close(() => {
      done();
    });
  });
})