import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TasksLintController extends Controller {
  @tracked command;
  @tracked type = 'all';

  @action
  runLint() {
    if(this.type === 'all') {
    this.command = 'npm run lint\r\n';
    } else {
    this.command = `npm run lint:${this.type}\r\n`;
    }
  }

  @action
  updateType(event) {
    this.type = event.target.value;
    console.log(this.type);
  }
}
