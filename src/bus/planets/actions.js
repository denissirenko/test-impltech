import { api } from '../../api';
import { types } from './types';

export const planetsActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.PLANETS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.PLANETS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.PLANETS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.PLANETS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: () => async(dispatch) => {
        dispatch(planetsActions.startFetching());

        const response = await api.planets.fetch();

        if(response.status === 200) {
            const {results} = await response.json();
            dispatch(planetsActions.fill(results));
        } else {
            const error = {
                status: response.status
            }
            dispatch(planetsActions.setFetchingError(error));
        }

        dispatch(planetsActions.stopFetching());
    }
})