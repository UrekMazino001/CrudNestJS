import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from 'src/mensaje/Entities/mensaje.entity';
import { Repository, DeleteResult } from 'typeorm';
import { CreateMensajeDto } from 'src/mensaje/dto/create-mensaje-dto';

@Injectable()
export class MensajeService {
    constructor(@InjectRepository(Mensaje)  private mensajeRepository: Repository<Mensaje>, ){

    }

    async getAll(): Promise<Mensaje[]>{
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensaje: CreateMensajeDto): Promise<Mensaje>{
        const mensajeNuevo = new Mensaje();
        mensajeNuevo.nick = mensaje.nick
        mensajeNuevo.mensaje = mensaje.mensaje;

        return await this.mensajeRepository.save(mensajeNuevo);
    }

    async updateMensaje(id: number, mensaje: CreateMensajeDto): Promise<Mensaje>{
        const mensajeUpdate = await this.mensajeRepository.findOne(id);
        mensajeUpdate.nick = mensaje.nick;
        mensajeUpdate.mensaje = mensaje.mensaje;

        return await this.mensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(id: number) {
        return await this.mensajeRepository.delete(id);
    }
}

