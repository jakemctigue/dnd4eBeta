/**
 * Extend the base Token class to include temporary and temp-max health in the bar display
 * @extends {Token}
 */
export class Token4e extends Token {
	
	/** @override */
	getBarAttribute(attribute, alternative, ...args) {
		const data = super.getBarAttribute(attribute, alternative, ...args);
		if (data && (data.attribute === "attributes.hp") && this.actor) {
			data.value += parseInt(foundry.utils.getProperty(this.actor.system, "attributes.hp.temp") || 0);
			data.max += parseInt(foundry.utils.getProperty(this.actor.system, "attributes.hp.tempmax") || 0);
		}
		return data;
	}
}

