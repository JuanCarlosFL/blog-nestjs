import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: User): Observable<User>;
    findOne(id: number): Observable<User>;
    findAll(): Observable<User[]>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
}
