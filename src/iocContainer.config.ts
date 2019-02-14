// initialize container and make binding
import "reflect-metadata";
import { Container } from "inversify";
import IUserService from './API/services/IUserService'; 
import UserService from './API/services/UserService';
import IUserRepository from './infrastructure/Repositories/IUserRepository'; 
import UserRepository from './infrastructure/Repositories/UserRepository';
import UserController from './API/controllers/UserController';  
import TYPES from './type';

const container = new Container();

container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<UserController>(TYPES.UserController).to(UserController);

const userController = container.resolve<UserController>(UserController);
console.log(userController.getUsers());


//export default container;
