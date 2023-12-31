# Imperfections

This simple game written in Angular aims to replicate the 1980s boardgame 'Heartthrob' with a modern pop-culture twist!

## Note about Content

The content for the game (characters and red flags) is not open sourced for licensing reasons. When spinning up your own version of the game, you can easily add your own content by replicating the behavior of my server through `HostedDataSourceService`.

Your server should contain:

- A `red-flags.json` file - an array of strings each containing a red flag
- A `characters.json` file - an array of `Character` objects
- An `images/` directory - for storing images referenced in the `characters.json` manifest

Note that if you don't include an `imageUrl` in a particular character object, a generic image will be used in its place. You must always provide a name and franchise however.

## Potential improvements

I'm not sure I'll ever do any of these, but here are some ideas:

- Character set filtering
  - Allow users to select which franchises they want included in their character deck rather than always using the whole deck
- Other genders
  - Add a filter for feminine/masculine characters and add a classification of each to `Character` to allow users to play with non-male characters
- Submission portal
  - Allow users to submit their own character/red flag suggestions
  - Could do this in a really fancy way with automatic screening for problematic content and unattended alterations of the dataset
