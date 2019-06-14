# Notes app user stories
> Makers Academy Week 7

The task for this week was to create a pure JS front end Single Page web app for making and displaying notes.

![Screenshot](/public/images/Screenshot 2019-06-14 at 14.20.32.png)

## Installation
git clone this repo:
```sh
git clone https://github.com/breycarr/notes.git
```

run app:
```sh
open app.html
```

## User Stories
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```
```
As a programmer
I can create a new note
So I can record something I need to remember
```
```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```
(NB: notes do not need to be permanently stored.  If the user refreshes their web page, they'll lose their notes, and that's fine.)

## Usage

After loading the page, type your note in the text area, then click the button marked 'Create'. Your note will be added beneath the text area:

![Entering a note](/public/images/NewNoteScreenShot.png)
![An added note](/public/images/AddedNoteScreenShot.png)

If your note is longer than 20 characters, a shortened version will appear beneath the text box
![An shortened note](/public/images/AbbreviatedNoteScreenShot.png)

Clicking on the note will show open an alert box containing the full text of your note
![Full note display](/public/images/FullMessageScreenShot.png)

The alert can be dismissed to add additional notes or access other existing notes.
