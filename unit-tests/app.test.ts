import { app } from "../src/app";

it('app works', (done) => {
    const server = app.listen(3000, () => {
        server.close(() => {
            done();
        })
    });
})