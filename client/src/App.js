import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { currentUser } from './actions/authAction';

import { getDepartament, getTaskList, getUser } from './actions/mainAction';
import { getTask, getTaskUser } from './actions/taskAction';

import MyHeader from './Block/Header/MyHeader';
import MyList from './Block/List/MyList';
import Main from './Block/Main';
import SiderNavbar from './Components/SiderNavbar/SiderNavbar';

const { Content, Sider } = Layout;

function App() {

  const dispatch = useDispatch()

    dispatch(getDepartament())
    dispatch(getTask())
    dispatch(getTaskList())
    dispatch(getUser())
    dispatch(getTaskUser())
    dispatch(currentUser())

  return (
    <BrowserRouter>
      <Layout>
        <MyHeader />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SiderNavbar />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/2" component={MyList} />
                <Route path="/" component={Main} />
                <Redirect to='/' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
