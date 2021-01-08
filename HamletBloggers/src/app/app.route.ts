
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";


const APP_ROUTES=[
    {path:'nav',component: NavComponent},
    {path:'',component:HomeComponent}
]

export const APP_ROUTES_PROVIDER = APP_ROUTES;