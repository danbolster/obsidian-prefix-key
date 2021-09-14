import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface MyPluginSettings
{
	mySetting: string;
}


const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}


export default class MyPlugin extends Plugin
{
	settings: MyPluginSettings;

	async onload()
	{
		console.log('loading plugin');
		await this.loadSettings();


		this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
		alert("prefix")
		});

}

	onunload()
	{
		console.log('unloading plugin');
	}

	async loadSettings()
	{
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings()
	{
		await this.saveData(this.settings);
	}

}
