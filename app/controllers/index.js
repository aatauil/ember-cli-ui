import Controller from '@ember/controller';
import { xml2json } from 'xml-js'

export default class IndexController extends Controller {

  get articles() {
      return fetch('https://cors-anywhere.herokuapp.com/https://blog.emberjs.com/feed.xml')
      .then(responds => responds.text())
      .then(xml => {
        const data = xml2json(xml)
        const json = JSON.parse(data)
        const articles = json.elements[0].elements.filter(element => element.name == "entry")
        return articles
      })
    }
  }
