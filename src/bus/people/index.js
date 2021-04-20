import {usePeopleFetch} from './hooks/usePeopleFetch';

import { Human } from './components/human'

export const People = ()=> {
    const { isFetching, data, error} = usePeopleFetch();

    if(error && error.status === 404) {
        return <p>Not Found</p>;
    }

    if(error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    const spinnerJSX = isFetching && (
        <p>Loading People</p>
    );

    const listPeopleJSX = !isFetching && data && data.length && data.map(({ name, birth_year })=>{
        return <li key={name}>
            <Human  
                name={name}
                birth_year={birth_year}
            />
        </li>
    });

    return (
        <>
            <h1>People</h1>
            {spinnerJSX}
            <ul>
                {listPeopleJSX}
            </ul>
        </>
    )
}
