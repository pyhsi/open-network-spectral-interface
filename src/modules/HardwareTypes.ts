import { IHardwareType } from "../interfaces/IHardwareType";

/* Start Module Imports */

import { SeaBreezeHardware } from "./SeaBreeze/SeaBreezeHardware";

/* End Module Imports */

export class HardwareTypes {
	/**
	 * Singleton
	 */
	private static _instance: HardwareTypes;

	static get Instance() {
		if (this._instance === null || this._instance === undefined) {
			this._instance = new HardwareTypes();
		}

		return this._instance;
	}


	public AvailableHardwareTypes: Array<IHardwareType>;

	constructor() {
		this.AvailableHardwareTypes = new Array<IHardwareType>();

		/* Start IHardwareType Initialization */

		this.AvailableHardwareTypes.push(new SeaBreezeHardware());

		/* End IHardwareType Initialization */
	}
}