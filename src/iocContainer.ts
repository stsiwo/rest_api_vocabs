// initialize container and make binding
import "reflect-metadata";
import { Container } from "inversify";
import IUserService from './UseCase/IServices/IUserService'; 
import UserService from './UseCase/Services/UserService';
import IUserRepository from './UseCase/IRepositories/IUserRepository'; 
import UserRepository from './Framework/Infrastructure/Repositories/UserRepository';
import TYPES from './type';

const container = new Container();

// binding here
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);


export default container;
