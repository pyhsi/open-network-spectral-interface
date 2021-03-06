export class Config {
	private static _applicationEnvironment: string = process.env.NODE_ENV;

	// Properties
	static get InstrumentationKey() {
		let instrumentationKey: string = "";

		if (this._applicationEnvironment && this._applicationEnvironment.toLowerCase() === "development") {
			instrumentationKey = "6ef48419-b287-40ea-9389-fe9af5de1d54";
		}
		else {
			// Assume production
			instrumentationKey = "4419feb1-263f-4a2b-a500-7a1fa12b9d36";
		}

		return instrumentationKey;
	}

	static get PortNumber() {
		return 3200;
	}
}