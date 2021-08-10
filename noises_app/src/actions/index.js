import {
	UPDATE_ANSWER,
} from "./constants";

export function updateAnswer(countDown) {
	return {
		type: UPDATE_ANSWER,
		countDown: countDown
	};
}