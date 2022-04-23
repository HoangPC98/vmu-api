"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../config/configuration");
const typeormConfig = Object.assign({
    migrationsTableName: 'eco_migrations',
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/entities/*{.ts,.js}'],
    seeds: [__dirname + '/seeds/**/*{.ts,.js}'],
    factories: [__dirname + '/factories/**/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/migration',
        entitiesDir: __dirname + '/entities',
    },
}, (0, configuration_1.default)().database);
module.exports = typeormConfig;
//# sourceMappingURL=typeormconfig.js.map