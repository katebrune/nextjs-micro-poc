import Document, {Html, Head, Main, NextScript} from 'next/document'
import {pathSharing} from '@module-federation/nextjs-mf'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(){
        return(
            <Html>
                {pathSharing()}
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument