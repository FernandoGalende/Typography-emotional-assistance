import { connect } from 'react-redux'
import * as actions from '../actions/homeActions'
import { Home }  from '../pages/home'

const mapStateToProps = (state, ownProps) => ({
  hasUser: state.home.hasUser
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleUser: () => dispatch(actions.toggleUserAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)