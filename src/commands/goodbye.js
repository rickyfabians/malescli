const {Command, flags} = require('@oclif/command')

class GoodbyeCommand extends Command {

  async run() {
    const {args} = this.parse(GoodbyeCommand)
    const name = args.name || 'world'
    this.log(`hello, goodbye ${name} from MalesCLI`)
  }
}

GoodbyeCommand.description = `Describe the command here
...
Extra documentation goes here
`

GoodbyeCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

GoodbyeCommand.args = [
  { 
    name: 'name', 
    description: 'ft',
    required: false
  }
 ]
  

module.exports = GoodbyeCommand
