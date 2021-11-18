import { Route, Switch } from "react-router"
import { book } from "./book"

import { People } from '../bus/people'
import { Planets } from "../bus/planets"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={book.root}>
                    <People />
                </Route>
                <Route exact path={book.planets}>
                    <Planets />
                </Route>
                <Route exact path={book.starships}>
                    starships
                </Route>
            </Switch>
        </>
    )
}