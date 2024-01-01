# WSC Website V6
> This is the 6th version of the WSC main website. It is written in [Next.js](https://nextjs.org/) and is designed to work with the existing Website-V2 database schema.

## GitHub / GitLab Mirror
The main repository is public on the [Warwick FilmSoc GitLab](https://gitlab.warwick.film/WSC/Website-V6), however it is also publicly mirrored to [GitHub](https://github.com/WarwickFilmSoc/Website-V6) for better discoverability. All issues and merge requests should be made on GitLab.

Please note that all changes made (including names and emails in commit history) will be public.

## Resources
* Designs can be found on [Figma](https://www.figma.com/file/zXtnJxRgcaZmosPbCUGbGF/Website-V6?type=design&node-id=176-1667&mode=design&t=7zVnAXb6QF788p3H-0)
* The [Website v3](https://wiki.warwick.film/wiki/Functional_Spec_(Website_Version_3)) functional specification can be used as rough guidance.
* Communication with WSC as a whole is done on the [Website V6](https://discourse.warwick.film/t/website-v6/6548) forum page.
* Make sure to familiarise yourself with the [NextJS Documentation](https://nextjs.org/docs) before getting started.

## Contributing
All contributions are welcome! If you have any questions, ask Josh in the #websidite-v6 Slack channel!

For where to get started, read this README then have a look at the [GitLab Issues Board](https://gitlab.warwick.film/WSC/Website-V6/-/issues). Make sure to assign yourself so no duplicate work is created, and if you can't do it anymore, unassign yourself or ask someone for help!

## Running the Website
You will need to have installed NodeJS v18 and NPM for this to work. If you haven't already done this, you can install the LTS version [here](https://nodejs.org/en/download).

Then, clone the website through SSH. You'll need to install [Git](https://git-scm.com/downloads) to do this, and setup a SSH key.
```bash
git clone git@gitlab.warwick.film:WSC/Website-V6.git
```

Install npm modules
```bash
npm install
```

Regenerate the Prisma client after the schema has been changed
```bash
npm run prisma:generate
```

Copy `.env` to `.env.local` and fill in the required environment variables. Please contact Josh if you need these!

Run the development server:
```bash
npm run dev
```

This will start a live-reloading web server at [http://localhost:3000](http://localhost:3000).

### MySQL
If you need to connect to the MySQL database, please contact Josh for the Website-V6 environment variable. You'll also need to forward port 3306 on a docker swarm node to your local machine with the following command:
```bash
ssh -L 3306:altitude:3306 FirstName.LastName@warwick.film
```


The `website-v6` user is read-only and should only be added to SELECT new tables as we need them - this also helps to keep the schema nice and tidy with only stuff we need. 

We're using Prisma to generate the database schema, which uses the following commands:

Pull schema from the db
```bash
npm run prisma:db:pull
```

Generate Prisma client
```bash
npm run prisma:generate
```

## Code and Commit Style
### Git Usage
Please complete any work in your own branch related to the issue you are completing. You can click 'Create Merge Request' on the issue to do this, and then create a branch when asked.

When committing changes, precede your message with a [Gitmoji](https://gitmoji.dev/) so it's easy to see what you have done. The most common ones you may use are:
* 💬 `:speech_balloon:` - Add or update text and literals
* ✨ `:sparkles:` - Introduce new features
* 🐛 `:bug:` - Fix bugs
* 💄 `:lipstick:` - Add or update the UI and style files.
* 🚨 `:rotating_light:` - Fix compiler/linter warnings

After you have completed your work, remove the draft status from your merge and assign Josh to review it!

### ESLint
We use eslint to ensure that our code is generally high quality and is formatted consistently. This will automatically be run whenever a merge request is created. This can be run with:
```bash
npm run lint
```

```bash
npm run lint:fix
```

If you are using an editor such as IntelliJ or VSCode, I'd recommend setting your editor to automatically run this whenever you save, and fix any issues.