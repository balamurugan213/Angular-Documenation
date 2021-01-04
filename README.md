# Angular-Documenation

learning angular

- Angular is component based wher every element is a component based where angular-js is MVC based.

- Angular is written on Typescript.

## Installing Angular CLI

- Install node package manager(npm) first.

- Then install angular cli

```cmd
npm install -g @angular/cli@latest
```

- Create a angular project.

```cmd
ng new HamletBloggers
```

- Create a angular componant.

```cmd
ng generate component home-Component
```

- To run the server.

```cmd
ng serve --open
```

---

## Components

Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM).

Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

```javascript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HamletBloggers';
}

```

- Html code is written in the templateUrl.
- styles for the html can be added by StyleYrl (Css or scss).
- typescript (javascript) can be written in inside the class.

So we use the template tag( \<app-root> \</app-root>) to use this template.

---

## Data binding

 ![databinding](https://angular.io/generated/images/guide/architecture/databinding.png)

- The {{hero.name}} interpolation displays the component's hero.name property value within the element.

- The [hero] property binding passes the value of selectedHero from the parent HeroListComponent to the hero property of the child HeroDetailComponent.

- The (click) event binding calls the component's selectHero method when the user clicks a hero's name.

```html
<li>{{hero.name}}</li>
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
<li (click)="selectHero(hero)"></li>
```

- Two way binding

```html
<input [(ngModel)]="hero.name">
```
