import { connect } from 'react-redux';
import LoadingEffect from '../../components/Common/LoadingEffect';

const mapStateToProps = (state) => {
  const { isLoading } = state.commonState
  return {
    isLoading: isLoading,
  };
}

export default connect(mapStateToProps, null)(LoadingEffect);
