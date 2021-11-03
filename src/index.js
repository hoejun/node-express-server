// 여러 자료들을 찾아본 결과, Node.js가 최신 자바스크립트 문법들은 지원하지만, 모듈 시스템으로 CommonJs를 채택했기 때문에 ES 모듈 시스템은 사용할 수 없다고 한다.
// Node.js에서 ES 모듈을 사용하려면 설정이 필요한데, 이전에는 Babel 같은 transpiler를 이용해서 ES6 이전의 문법으로 변환해주는 과정이 필요했다. 그러나 Node.js 13버전부터는 ES6 모듈을 지원해서 설정을 통해 import / export를 사용할 수 있다

import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import routes
import userRoutes from './app/routes/user.js';

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(morgan('dev'));
app.use(cors());
// //Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(json());

//routes
app.use('/user', userRoutes);

// app.get('/', (req, res) => {
//   res.send('서버시작');
// });

app.listen(port, () => {
  console.log('Server on port 8080');
});
