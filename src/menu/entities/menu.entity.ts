import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import{
    Entity,
    Column,
    ObjectIdColumn
}from 'typeorm';

@Entity()
export class Menu {

    @ObjectIdColumn()
    id : number;

    @Column()
    itemName : string;

    @Column()
    itemCategory : string;

    @Column()
    itemPrice : number;


}
