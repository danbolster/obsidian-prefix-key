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
			else if(evt.key == 'ArrowLeft' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-left")
			}
			else if(evt.key == 'ArrowRight' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-right")
			}
			else if(evt.key == 'ArrowUp' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-top")
			}
			else if(evt.key == 'ArrowDown' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-bottom")
			}
			else if(evt.key == 'h' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-left")
			}
			else if(evt.key == 'l' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-right")
			}
			else if(evt.key == 'k' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-top")
			}
			else if(evt.key == 'j' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("editor:focus-bottom")
			}
		});

	}

}
