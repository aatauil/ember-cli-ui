import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GenerateCardComponent extends Component {
  @tracked name;

  get command(){
    console.log(this.args)
    return this.args.command.toLowerCase()
  }

  @action
    generate() {
      console.log(`ember g ${this.command} ${this.name}\r\n`);
  }
}
