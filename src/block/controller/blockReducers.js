import { RECEIVE_BLOCKS } from './blocksActions';
import { RECEIVE_BLOCK_INFO } from './blockInfoActions';

export function blockReducers(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BLOCKS:
            return {
                ...state,
                blocks: action.blocks
            };

        case RECEIVE_BLOCK_INFO:
            return {
                ...state,
                [action.block]: action.data
            };

        default:
            return state;
    }
}
