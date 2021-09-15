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

		var prefix : boolean;
		this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
			if(evt.key == 'b' && evt.ctrlKey)
			{
				prefix = true

			}
			else if(evt.key == '%' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("workspace:split-vertical")
				prefix = false
			}
			else if(evt.key == '"' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("workspace:split-horizontal")
				prefix = false
			}
			else if(evt.key == 'w' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("workspace:close")
				prefix = false
			}
		});

	}

}
