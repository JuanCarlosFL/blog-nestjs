import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Observable<User>;
    findOne(params: any): Observable<User>;
    findAll(): Observable<User[]>;
    deleteOne(id: string): Observable<any>;
    updateOne(id: string, user: User): Observable<any>;
}
