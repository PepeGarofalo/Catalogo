import{Entity,Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, BaseEntity,Unique} from 'typeorm'
@Entity()
export class Iniciativa extends BaseEntity{
@PrimaryGeneratedColumn()
@Unique("unique_id", ["id"])
identificador: number;
@Column()
nombre_iniciativa:string
@Column()
tematica:string
@Column() 
propietario:string
@Column() 
hectareas:string
@Column()
direccion:string
@Column()
nombre_provincia:string
@Column()
nombre_municipio:string
@Column({ type: 'double precision' })
latitud: number;
@Column({ type: 'double precision' })
longitud: number;
@Column()
contacto:string
@Column()
telefonos:string  
@Column()
correo :string
@Column({ nullable: true, default: null })
facebook:string
@Column({ nullable: true, default: null })
instagram:string
@Column({ nullable: true, default: null })
twitter:string
@Column({ default: false }) // Valor predeterminado es falso
destacada: boolean;
@Column('simple-array', { nullable: true, default: null }) // Permitir un array de strings (rutas de las imágenes)
imagenes: string[];
@CreateDateColumn() //propieda de actualizacion 
createdAt:Date;
@UpdateDateColumn()
updatedAd:Date;
}
