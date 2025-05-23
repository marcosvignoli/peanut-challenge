# Marcos Vignoli - Peanut Challenge.

### Thinking process:

The fist thing that I did was writing the task goal and a rough sketch of the steps that I though I had to make in order to achieve the goal ( you can see them below I left them here on the read me.)

After that, since I detected that the Links dictate the whole workflow of the app, I focused my efforts on making that work first.
I've created the links for the request and the claim, a small form UI and made the consumption for the params passed from this form.
This was important cause I wanted to fill the social media preview with this data.
Since I've never implemented this myself I knew that understanding the way it works it was going to be the most time consuming task I left it for the last step but I over estimated the time that the boiler plate to make the other areas work would take me and didn't do a great job on the styling of the preview.
Also the way that the data flows in the whole app should be highly improved, overall I enjoyed the task :D

### Considerations - Troubles - Tradeoffs and possible production problems

- SVG not working
- Dynamic Data: only query parameters, path params, or server-side data fetching (from a database or file) can be used for dynamic content in Open Graph images.

Since this preview needs to be dynamic and the way it looks its quite important, this are the two most important things to pay attention.

SVGS:
The SVG's cannot be imported but can be used inline and also PNG's are allowed, this is important for the Icon/Logo, and all the other assets around the name of the user and the amount. Figuring a way to achieve this its core, my lazy side says "just make a "background image and add the texts on top" but probably we should test the "better approach" at my sight that its just importing each file and manipulate it accordingly.

Dynamic data:
Since we can't use the functionalities from react, figuring out the way to consume the data its the most important thing.
I saw that we can access to the search params, but didn't succeed on the consumption of it, I would spend more time on this.

## Task Goals:

Generate a sharable link with the right data and represent the social media view of the link according to the design.

## Steps to achieve the task: ( This may change when we start implementing but its nice to have an order )

1. Create link routes:

- Claim Link - Format: peanut.me/claim?id=...
- Request Link - Format: peanut.me/username/amount

2. Read params from links on the UI to know what to show
3. Make a simple UI that represents each link with their specific case.
4. Make a button to copy and paste links, copying links with the press of a button its awesome XD
5. Mock values to make a "real flow"
6. Search how to change the view of the links shared on social media and implement it with the design
