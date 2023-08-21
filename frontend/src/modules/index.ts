import { mergeArrays } from '../utils/reduceArrays';
import auth from './auth';
import { IModule } from './common/interfaces/moduleInterfaces';
import feeds from "./feeds";
import adminPanel from "./adminPanel";

const routes = mergeArrays(auth.routes, feeds.routes, adminPanel.routes);
const module: IModule = { routes };
export default module;
