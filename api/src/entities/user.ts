import{Entity,Column,CreateDateColumn,UpdateDateColumn, BaseEntity,PrimaryColumn} from 'typeorm'
@Entity()
export class Users extends BaseEntity {
@PrimaryColumn()
userscatalogo:string
@Column()
pasworddd:string
@CreateDateColumn() //propieda de actualizacion 
createdAtuser:Date;
@UpdateDateColumn()
updatedAdPas:Date;
}