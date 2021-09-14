import
{
	App,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting
} from 'obsidian';

export default class MyPlugin extends Plugin
{
	async onload()
	{
		console.log('loading plugin');


		this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
			if(evt.key == 'b' && evt.ctrlKey)
			{
				alert("prefix")
				//console.log(this.app as any).commands.executeCommandById('')
				this.app.commands.executeCommandById("workspace:split-vertical")
			}

		});
	}

}
