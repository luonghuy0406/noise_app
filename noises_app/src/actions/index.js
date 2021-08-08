import {
	UPDATE_ANSWER,
} from "./constants";

export function updateAnswer(value) {
	return {
		type: UPDATE_ANSWER,
		value: value
	};
}