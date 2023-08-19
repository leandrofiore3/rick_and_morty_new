
let myFavorites = [];

function postFav(req, res) {
    const { id } = req.body;
    myFavorites.push(id);
    res.status(200).json({ favorites: myFavorites });
    
}

function deleteFav(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter((fav) => fav !== id);
    res.status(200).json({ favorites: myFavorites });
}

module.exports = {
    postFav,
    deleteFav
};