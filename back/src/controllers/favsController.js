let favs = require("../utils/favs");

function postFav(req, res){
    let character  = req.body;

    try {
        let characterFound = favs.find(char => char.id === character.id);
        if(characterFound) throw new Error("Character already marked as favorite");
        else{
            favs.push(character);
            res.status(201).json(favs);
        }     
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  
}

function getFavs(req, res){
    res.status(200).json(favs);
}

function deleteFav(req, res){
    const {id} = req.params;
    favs = favs.filter((character) => Number(character.id) !== Number(id));
    res.status(200).json(favs); 
}

module.exports = { postFav, getFavs, deleteFav };