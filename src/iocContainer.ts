// initialize container and make binding
import "reflect-metadata";
import { Container } from "inversify";
import IUserService from './API/services/IUserService'; 
import UserService from './API/services/UserService';
import IUserRepository from './infrastructure/Repositories/IUserRepository'; 
import UserRepository from './infrastructure/Repositories/UserRepository';
import TYPES from './type';

const container = new Container();

// binding here
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);


export default container;
