import{DataSource} from 'typeorm'
import { Iniciativa } from './entities/iniciativa'
import { Users } from './entities/user'
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "bd_tesis",
    entities: [Iniciativa ,Users],
    synchronize:true
})