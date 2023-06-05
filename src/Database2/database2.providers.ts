import { Photo } from 'src/photo-module/entity/photo.entity';
import { DataSource } from 'typeorm';


export const database2Providers = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'test',
                entities: [
                    Photo
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
