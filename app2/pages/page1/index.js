import { render } from 'react-dom';

const {Page1} = (await import('app1/page1'));

export default function Page1Home(){
    return(
        <Page1 />
    )
}