import {
    UPDATE_LOADING_STATUS
} from '../../constants/frontStage/actionsTypes';

export const updateLoadingStatus = (loadingStatus) => ({
    type: UPDATE_LOADING_STATUS,
    loadingStatus
})