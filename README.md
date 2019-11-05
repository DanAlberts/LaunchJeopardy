Notes: 
* BoardContainer is now old code



Todo List:

**Simple Todos**
* create landing button with "Join Game" button
* join game button brings them to a random Game show page (but for now, should always create a new one and send them to that new game's show page)
* restyle everything (brighter colors and more like jeopardy)

*In CoolerBoardContainer*
* Get it all to render! state is set up, but there might be some issues with the child CategoryTiles

*In Api::V1::GamesController*
* create `GameSerializer` to be used in the games controller instead of `game_json`

* start sending actioncable broadcasts to backend