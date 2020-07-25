import { Controller, Get, Post, Body, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from '../dto/create-mensaje-dto';
import { MensajeService } from '../services/mensaje/mensaje.service';
import { Mensaje } from '../Entities/mensaje.entity';




@Controller('mensaje')
export class MensajeController {
    constructor(private mensajeService: MensajeService){}


    @Get()
    getAll(@Res() response:any){
        return this.mensajeService.getAll()
                    .then( mensaje => response.status(HttpStatus.OK).json(mensaje))
                    .catch(err=> response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al obtener el registro"}))
    }

    @Post()
    createMensaje(@Body() mensaje: CreateMensajeDto, @Res() response:any){
        return  this.mensajeService.createMensaje(mensaje)
                    .then( mensaje => response.status(HttpStatus.CREATED).json(mensaje))
                    .catch(err=> response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al crear el registro"}))
    }

    @Put(':id')
    updateMensaje(@Body() mensaje: CreateMensajeDto, @Res() response:any, @Param('id') id){
        return this.mensajeService.updateMensaje(id, mensaje)
                    .then( mensaje => response.status(HttpStatus.OK).json(mensaje))
                    .catch(err=> response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al actualizar el registro"}))
    }

    @Delete(':id')
    deleteMensaje(@Res() response: any, @Param('id') id: number){
        return this.mensajeService.deleteMensaje(id)
        .then( res => response.status(HttpStatus.OK).json(res))
        .catch(err=> response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error al Eliminar el registro"}))
    }
}
