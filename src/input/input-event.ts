/**
 * The type of an input.
 * Press and Release are for buttons, and move is for axes.
 *
 * @export
 * @enum {number}
 */
export enum InputType {
    Press,
    Release,
    Move
}

/**
 * The type of device an input came from
 *
 * @export
 * @enum {number}
 */
export enum DeviceType {
    Keyboard,
    Mouse,
    Controller
}

/**
 * A single input event.
 * This contains an input time and a state.
 *
 * @export
 * @class InputEvent
 */
export class InputEvent {
    /**
     * The device used to make the input.
     *
     * @type {number}
     * @memberof InputEvent
     */
    public device: number;
    /**
     * The state change performed by the input
     *
     * @type {InputType}
     * @memberof InputEvent
     */
    public state: InputType;
    /**
     * The time when the input took place, in epoch time
     *
     * @type {number}
     * @memberof InputEvent
     */
    public time: number;
    constructor(device: number, state: InputType, time: number) {
        this.device = device;
        this.state = state;
        this.time = time;
    }
}
