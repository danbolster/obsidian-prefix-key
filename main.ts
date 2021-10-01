import
{
	App,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting
} from 'obsidian';

async function outside()
{
	setTimeout(() => {
			console.log(Date.now())

	}, 5000);
	return false
}

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

				setTimeout(function()
				{
    			prefix = false;
				},5000);
			}
			else if(evt.key == '%' && prefix == true)
			{
				var application : any = this.app
				application.commands.executeCommandById("workspace:split-vertical")
				prefix = false
				evt.preventDefault()
			}
			else if(evt.key == '"' && prefix == true)
			{

				var application : any = this.app
				application.commands.executeCommandById("workspace:split-horizontal")
				prefix = false
				evt.preventDefault()
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


		});
	}

}
