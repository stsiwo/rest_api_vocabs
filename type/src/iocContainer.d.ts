import "reflect-metadata";
import { Container } from "inversify";
declare const container: Container;
/**
 * DI for Model (from sequelize-typescript) to Repository's constructor
 *  - because model is third party abstract class so I had use "decorate" to explicitly declare the "injectable" but it seems not to work for me, so for now, I directly assign Model dependency to Repository
 *  #REFACTOR
 **/
export default container;
//# sourceMappingURL=iocContainer.d.ts.map