# Nextjs Portfolio

### Website: https://t-dev.no

# In the code

- Internal API (don't work with static sites, but is included in the .js):

```<script id="__NEXT_DATA__" type="application/json">
{
"props": {
"pageProps": {
"portfolio": [
{
"About": [
{
"id": 1,
"text": "Currently studying Front-End Developer @ Noroff - School of technology and digital media."
},
{
"id": 2,
"text": "I want to make a better web. One that is fast, easy to use, accessible to all and error-free. Started my journey to become a developer in october 2019, and after 14 years in sales I have found my passion. Learning new technologies and creating new projects are features I love in this profession."
},
{
"id": 3,
"text": "I am currently learning Go - golang along with my studies. I believe Go will become a very important language in the future."
},
{
"id": 4,
"text": "My goal is to be a Full-Stack Developer, because I like to know and understand what drives an application."
}
],
"Experience": [
{ "id": 1, "tech": "HTML/CSS", "percentage": 80 },
{ "id": 2, "tech": "JavaScript", "percentage": 70 },
{ "id": 3, "tech": "React", "percentage": 55 },
{ "id": 4, "tech": "Node.js", "percentage": 45 },
{ "id": 5, "tech": "Go", "percentage": 25 },
{ "id": 6, "tech": "Git", "percentage": 60 },
{ "id": 7, "tech": "Figma", "percentage": 80 }
],
"Social_Media": [
{ "github": "https://github.com/TrondSpjelkavik" },
{ "facebook": "https://www.facebook.com/Trondchivu" },
{
"linkedin": "https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/"
}
],
"Assets": [
{
"id": 1,
"sales": "https://t-dev.no/api/t-dev/sales-icon.svg"
},
{
"id": 2,
"team_work": "https://t-dev.no/api/t-dev/teamwork-icon.svg"
},
{
"id": 3,
"noroff": "https://t-dev.no/api/t-dev/noroff-icon.png"
},
{
"id": 4,
"feather": "https://t-dev.no/api/t-dev/feather-icon.svg"
},
{
"id": 5,
"favicon_main": "https://t-dev.no/api/t-dev/favicon.ico"
},
{
"id": 6,
"favicon_apple": "https://t-dev.no/api/t-dev/favicon.ico"
},
{ "id": 7, "trond": "https://t-dev.no/api/t-dev/trond.png" }
]
}
],
"fallback": false
},
"\_\_N_SSG": true
},
"page": "/",
"query": {},
"buildId": "lV_KMzeCnYjmkFyQ40DUB",
"nextExport": false,
"isFallback": false,
"gsp": true
}
</script>

```

## Components Folder

### GlobalLayout

GlobalLayout includes Meta, Nav, GlobalLayoutContainer and Footer components.

1. Meta

- Takes (title, keywords, description, icon and icon_apple) as props.
- Props can be changes on each side, and link it to an API. ex from projects page:

` <Meta title={projects[3].title} description={projects[3].description} ></Meta>`

- Includes defaultProps.

### Layouts

Layout folder includes:

- Components folder
- ContactForm component
- Footer component
- Nav component
- Projects component

1. ContactForm

Contact form uses `react-hook-form` for validation. With the functions:

- register
- handleSubmit
- errors

2. ProjectNav

The nav in projects uses call to internal API to change the active class, and changes the content in the projectContainer.

- projectNumber makes a call to the API and changes the number in an API call ex:
  `projectNumber = 2`
  gives:
  `content[2].content from an API.`

3. Animation

The animation uses svg and path with transform=matrix. It uses 1 circle and on 1/2 circle to create the effect that the leaf is behind the "globe".

4. Chart

Chart data is collected from internal API, and the css changes when a % grows or shrinks.
`style={{ width: skills.Experience[0].percentage - 10 + "%" }}`

5. Hamburger

Hamburger uses styled-components and useState to create the effects. ex:

`background-color: ${({ open }) => (open ? "white" : "#db6400")};`
and
`const [open, setOpen] = useState(false);` , `onClick={() => setOpen(!open)`

# Pages

1. Global

- Meta
- Nav
- Children
- Footer

2. Projects

- Meta
- Projects component
- API call

To make an api call inside the pages you use `getStaticProps` and fetch the api.
To retrieve the data, you use the return and props: { apiCall }

3. Contact

- Meta
- ContactForm

# Styled Components in Nextjs

Using styled components in Nextjs can trow an warning, and to solve this we need to install the packages:

- babel-plugin-module-resolver
- babel-plugin-styled-components

Create a .babelrc and include:

```
{
"presets": ["next/babel"],
"plugins": [
[
"module-resolver",
{
"root": ["./"],
"alias": {
"~components": "./components"
}
}
],
[
"styled-components",
{ "ssr": true, "displayName": true, "preprocess": false }
]
]
}

```

# Dependencies

1. react-hook-form
2. react-icons
3. styled-components

# Internal API

I used two .js files to create two path to the API. paths:

- api/portfolio/
- api/portfolio/projects

Inside the API folder:

Import the .js files. ex:

`import { portfolio } from "../../../api";`

handler function with status and convert to json:

` res.status(200).json(portfolio);`

Now you can call the API and get json back:

`fetch("http://localhost:3000/api/portfolio/");`

If you want to change the path that checks if the app/site is in production, you can use this code:

` const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com' `

and change the following code:

`fetch("http://localhost:3000/api/portfolio/");`

To

`fetch("${server}/api/portfolio/");`

### Question?

- trond.spjelkavik@gmail.com
