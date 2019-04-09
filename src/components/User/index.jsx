import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ASYNC_SETUP_USER } from "../../store/actions.async";
import { Header } from "./Header";
import {PageContainer} from '../../bases/styled'
import PreviewList from "../PreviewList";

const mapStateToProps = state => ({
  ...state.user
});
const mapDispatchToProps = dispatch => ({
  setup: user => dispatch(ASYNC_SETUP_USER(user))
});

const User = props => {
  let username = "";

  useEffect(() => {
    props.setup(username);
  }, []);

  return (
    <PageContainer>
      <Header {...props} />

      <PreviewList 
        posts={props.posts} 
      />

    </PageContainer>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
