import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajeController } from './mensaje/Controllers/mensaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensaje/Entities/mensaje.entity';
import { MensajeService } from './mensaje/services/mensaje/mensaje.service';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mssql',
        host: 'SMLPTEI007',
        port: 1433,
        username: 'ariel',
        password: 'Arieldesa_11',
        database: 'alumnos',
        // schema: 'public',
        connectionTimeout : 15000, 
        //entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [Mensaje],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Mensaje]) //Sirva para injectar la clase Mensaje en los servicios
  ],

  controllers: [AppController, MensajeController],
  providers: [AppService, MensajeService],
})
export class AppModule {}
