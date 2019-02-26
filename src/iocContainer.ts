// initialize container and make binding
import "reflect-metadata";
import { Container, decorate, injectable } from "inversify";

// IService
import IUserService from './UseCase/IServices/IUserService'; 
import IWordService from './UseCase/IServices/IWordService'; 

// Service
import UserService from './UseCase/Services/UserService';
import WordService from './UseCase/Services/WordService';

// IRepositories
import IUserRepository from './UseCase/IRepositories/IUserRepository'; 
import IWordRepository from './UseCase/IRepositories/IWordRepository'; 

// Repository
import UserRepository from './Framework/Infrastructure/Repositories/UserRepository';
import WordRepository from './Framework/Infrastructure/Repositories/WordRepository';

// Model

import TYPES from './type';


// add injectable annotation to third party class
//  - i don't this does not work ???
//decorate(injectable(), IUserModel );

const container = new Container();

// binding here
//  - User
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

//  - Word
container.bind<IWordService>(TYPES.IWordService).to(WordService);
container.bind<IWordRepository>(TYPES.IWordRepository).to(WordRepository);

/**
 * DI for Model (from sequelize-typescript) to Repository's constructor
 *  - because model is third party abstract class so I had use "decorate" to explicitly declare the "injectable" but it seems not to work for me, so for now, I directly assign Model dependency to Repository
 *  #REFACTOR
 **/



export default container;
