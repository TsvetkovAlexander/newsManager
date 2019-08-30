import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { news } from '../../database';
import Card from '../Card';
import EditCard from '../EditCard';
import { deleteNews, getNews, editNews } from '../../store/action';
import Modal from '../../components/Modal';

import './style.css';


class ListNews extends Component {
  state = {
    isOpenMore: false,
    isOpenEdit: false,
    currentNews: {},
  };

  handleClickOpenInfo = (guid) => {
    const { data } = this.props.news;

    this.setState({ isOpenMore: true, currentNews: data.find((el) => el.guid === guid) });
  };

  handleOnCloseInfo = () => this.setState({ isOpenMore: false });

  handleClickOpenEdit = (guid) => {
    const { data } = this.props.news;

    console.log('guid', guid);
    return this.setState({ isOpenEdit: true, currentNews: data.find((el) => el.guid === guid) });
  };

  handleOnCloseEdit = () => this.setState({ isOpenEdit: false });

  handleSubmitEditNews = (values) => {
    const { editNews } = this.props;

    console.log('values', values);
    editNews(values);
    this.setState({ isOpenEdit: false });
  };


  componentDidMount() {
    const { getNews } = this.props;

    getNews(news);
  }

  delNews=(guid) => {
    this.props.DeleteNews(guid);
  };


  render() {
    const { data } = this.props.news;

    const {
      title, review, text, guid, photo,
    } = this.state.currentNews;

    const {
      isOpenEdit, currentNews, isOpenMore,
    } = this.state;
    return (
      <div className="AllCard">
        {data.map(({
          guid, title, review, photo, text,
        }) => (
          <Card
            id="card"
            key={guid}
            title={title}
            review={review}
            photo={photo}
            text={text}
            guid={guid}
            delNews={this.delNews}
            handleClickOpenE={this.handleClickOpenEdit}
            handleClickOpenM={this.handleClickOpenInfo}
          />
        ))}
        <Modal isOpen={isOpenEdit} handleClose={this.handleOnCloseEdit}>
          <EditCard
            initialValues={currentNews}
            handleClose={this.handleOnCloseEdit}
            onSubmit={this.handleSubmitEditNews}
          />
        </Modal>

        <Modal isOpen={isOpenMore} handleClose={this.handleOnCloseInfo} id="modal">
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent style={{ width: 200, marginBottom: 15 }}>
            <Typography variant="body2" color="textSecondary" component="p">
             review:
              {review}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              text:
              {text}
            </Typography>
          </DialogContent>
          <Button onClick={this.handleOnCloseInfo} color="primary" autoFocus>
              Close
          </Button>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getNews: (news) => dispatch(getNews(news)),
  DeleteNews: (guid) => dispatch(deleteNews(guid)),
  editNews: (news) => dispatch(editNews(news)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListNews);
