// initialize container and make binding
import "reflect-metadata";
import { Container, decorate, injectable } from "inversify";
import IUserService from './UseCase/IServices/IUserService'; 
import UserService from './UseCase/Services/UserService';
import IUserRepository from './UseCase/IRepositories/IUserRepository'; 
import UserRepository from './Framework/Infrastructure/Repositories/UserRepository';
import User from './Framework/Infrastructure/DataEntities/User';
import TYPES from './type';


// add injectable annotation to third party class
//  - i don't this does not work ???
//decorate(injectable(), IUserModel );

const container = new Container();

// binding here
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

/**
 * DI for Model (from sequelize-typescript) to Repository's constructor
 *  - because model is third party abstract class so I had use "decorate" to explicitly declare the "injectable" but it seems not to work for me, so for now, I directly assign Model dependency to Repository
 *  #REFACTOR
 **/



export default container;
