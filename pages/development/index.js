import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class DevelopmentPage extends React.Component {




  render() {
    return (
      <Layout className={s.content}>
        <div>
          <div className={s.lol}>eugeneyaroshenko@gmail.com</div>
          <div>Lol</div>
        </div>

      </Layout>
    );
  }

}

export default DevelopmentPage;
