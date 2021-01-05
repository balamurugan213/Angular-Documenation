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

---

## Custom binding

A common pattern in Angular is sharing data between a parent component and one or more child components. You can implement this pattern by using the @Input() and @Output() directives.

### Sending data to a child component

The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.

![input](https://angular.io/generated/images/guide/inputs-outputs/input-diagram-target-source.svg)

- parent component ts

```ts
export class AppComponent {
  currentItem = 'Television';
}
```

-parent component html

```html
<child_component_name [item]="currentItem"></child_component_name>
```

- Child component ts

```typescript
import { Component, Input } from '@angular/core'; // First, import Input

export class ItemDetailComponent {
  @Input() item: string; // decorate the property with @Input()
}
```

### Sending data to a parent component

@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.

![@output](https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg)

The child component uses the @Output() property to raise an event to notify the parent of the change.

- child component ts

```typescript
export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
```

- child template html

```html
<label>Add an item: <input #newItem></label>
<button (click)="addNewItem(newItem.value)">Add to parent's list</button>
```

- Parent template html

```html
<child_component_name (newItemEvent)="addItem($event)"></child_component_name>
```

- Parent component ts

```ts
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
```
