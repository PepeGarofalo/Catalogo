"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const iniciativa_1 = require("./entities/iniciativa");
const user_1 = require("./entities/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "bd_tesis",
    entities: [iniciativa_1.Iniciativa, user_1.Users],
    synchronize: true
});
