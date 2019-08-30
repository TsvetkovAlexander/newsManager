import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import CreateCard from '../CreateCard';
import { addNews} from '../../store/action';
import './header.css';

class Header extends React.Component {
    state = {
      isOpen: false,
    };

    handleClickOpen = () => this.setState({ isOpen: true });

    handleOnClose = () => this.setState({ isOpen: false });

    handleSubmitAddNews = (values) => {
      const { addNews } = this.props;

      addNews(values);
      this.setState({ isOpen: false });
    };

    render() {
      const { isOpen } = this.state;
      return (
        <header className="header-back">
          <h1 className="titleNews">NEWS</h1>
          <Button
            type="button"
            className="button-add"
            onClick={this.handleClickOpen}
          >
                Add news
          </Button>
          <Dialog open={isOpen} onClose={this.handleOnClose}>
            <CreateCard
              onSubmit={this.handleSubmitAddNews}
              handleClose={this.handleOnClose}
            />
          </Dialog>
        </header>
      );
    }
}

function mapStateToProps(state) {
  return {
    testStore: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addNews: news => dispatch(addNews(news)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
