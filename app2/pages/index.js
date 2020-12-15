import Head from 'next/head';
import {useRouter} from 'next/router'
import {Heading, Pane, Link, Paragraph, Code, Strong, UnorderedList, ListItem} from 'evergreen-ui'

export default function Home() {
  const router = useRouter()
  return (
    <div >

      <Head>
        <title>NextJS Micro Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Pane display="flex" alignContent="space-between"  marginLeft={"2.5%"} marginTop={"1%"} padding={16} background="tint2" borderRadius={3} width={"95%"}>
          <Pane flex={1} alignSelf="flex-start" alignItems="center" display="flex">
            <Heading size={800}>Hello, World!</Heading>
          </Pane>

          <Pane  alginSelf="flex-end" alignItems="center"  display="flex">
            <Link padding={4} href="/page1">Page 1</Link>
            <Link padding={4} href="/page2">Page 2</Link>
          </Pane>
        </Pane>
        <Pane padding={16} marginLeft={'2.5%'}>
          <Paragraph>
            This is an example of using nextJS in a microservice frontend architecture.
            The links for page1 & page2 will take you to /page1 & /page2. The content 
            on page1 is being rendered from 'app1', and the content on page2 is being rendered
            from 'app3'. The 'container' application that we see as being the whole application,
            and what's rendering the current text you're reading, is 'app2'.
          </Paragraph>
        </Pane>
        <Pane padding={16} marginLeft={'2.5%'}>
          <Paragraph>
            This is all possible because of 'module federation'.
            If you check out <Code>next.config.js</Code> in any of the apps, you can see how
            it's used.
          </Paragraph>
        </Pane>
        <Pane padding={16} marginLeft={'2.5%'}>
          <Paragraph>
            <Strong>app2</Strong> is our <Strong>container</Strong> application.
            It's job is to know what the remotes are and where to render them, render
            other common page elements like headers & footers, and to facilitate other
            concerns like navigation & authentication. 
            <br /> 
            In <Code>app2/next.config.js</Code> we set the remotes, and in <Code> app2/pages/index.js</Code> we see the imports from remotes being used.
          </Paragraph>
        </Pane>
        <Pane padding={16} marginLeft={'2.5%'}>
          <Paragraph>
            <Strong>app1</Strong> and <Strong>app3</Strong> are our <Strong>remotes</Strong>, or our <Strong>microservices</Strong>.
            Their job is to own a feature of the application.
            <br />
            In <Code>app1/next.config.js</Code> and <Code>app3/next.config.js</Code> we set
            which functions and components are exposed on the microservice. 
          </Paragraph>
        </Pane>
        <Pane padding={16} marginLeft={'2.5%'}>
          <Paragraph>
            This is still very much a work in progress. Some things I'm interested in looking into are:
            <UnorderedList>
              <ListItem>
                Setting up some sort of config to make managing remotes & ports simpler
              </ListItem>
              <ListItem>
                Setting up a script so you don't have to start each microservice individually
              </ListItem>
              <ListItem>
                Figuring out how to manage routes from the container when microservices manage their own routes
              </ListItem>
              <ListItem>
                Figuring out how to deploy this thing
              </ListItem>
              <ListItem>
                Introducing storybook as a standalone microservice
              </ListItem>
              <ListItem>
                Basic route authentication
              </ListItem>
            </UnorderedList>
          </Paragraph>
        </Pane>
      </main>

    </div>
  );
}
