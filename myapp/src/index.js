import dva from 'dva';
import router from './router';
import Post from './models/posts';
import Test from './models/test';
import './index.css';

// 1. Initialize
const app = dva();
// app.model(require('./models/posts'));
app.model(Post);
app.model(Test);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
// 4. Router
app.router(router);

// 5. Start
app.start('body');
